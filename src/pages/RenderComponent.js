import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { useFetch } from "../components/hooks/useFetch";
import InputComponent from '../components/InputComponent';
import ButtonComponent from '../components/ButtonComponent';
import TodosListComponent from '../components/TodosListComponent';


const NotesStyled = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 100px;
    margin-right: 100px;
    padding: 20px;
    background-color: #f2f2f2;

    @media (max-width: 768px) {
        margin: 20px;
    }

    @media (max-width: 480px) {
        margin: 10px;
    }
`;

const ContainerStyled = styled.div`
    height: 300vh; 

    @media (max-width: 768px) {
        height: 200vh;
    }

    @media (max-width: 480px) {
        height: 100vh;
    }
`;

export const InputStyled = styled.input`
    padding: 10px;
    border-bottom: 1px solid #3498db;
    outline: none;
    margin: auto;
    display: block;
    text-align: center;
    width: 500px;
    height: 20px;
`;

export const ButtonStyled = styled.button`
    padding: 3px 20px;
    margin-left: 15px;
    font-size: 16px;
    border: 2px solid #3498db;
    border-radius: 5px;
    background-color: transparent;
    color: #3498db;
    cursor: pointer;
    transition: color 0.3s ease, border-color 0.3s ease;

    :hover {
        color: red;
        border-color: #2980b9;
    }

    :disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    @media (max-width: 480px) {
        width: 100%;
        margin-top: 10px; // при потребі
    }
`;



axios.defaults.baseURL ='http://localhost:3030/'

const RenderComponent = () => {
    const[data, setData] = useState([]);
    const[input, setInput] = useState('');
    const[textValue, setTextValue] = useState('');
    const [isPostLoading, setisPostLoading] = useState(false);
    const [isEdit, setisEdit] = useState(false);
    const [editingNoteId, setEditingNoteId] = useState(null);
    const [filter, setFilter] = useState('All');
    const { data: toDos , isLoading, error} = useFetch('toDos');
    const [searchQuery, setSearchQuery] = useState('');
    const [errorInput, setErrorInput] = useState('');
    

    const inputRef = useRef(null);

    useEffect(() => {
            setData(toDos);
    },[toDos])

    const validateInput = () => {
        const minLength = 3; 
        const maxLength = 30; 

        if (input.trim().length < minLength) {
            setErrorInput(`Мінімальна кількість символів: ${minLength}`);
            return false;
        } else if (input.trim().length > maxLength) {
            setErrorInput(`Максимальна кількість символів: ${maxLength}`);
            return false;
        }

        setErrorInput('');
        return true;
    };

    const filteredNotes = toDos.filter((note) => {
        if (filter === 'Active') {
            return !note.checked;
        } else if (filter === 'Completed') {
            return note.checked;
        } else {
            return true;
        }
    });

    const addNote = async () => {

        console.log("addNote called");

        setisPostLoading(true);

        if (validateInput()) {
            const payload = {
                id: uuidv4(),
                tittle: input,
                description: textValue,
                checked: false,
                creationDate: new Date().toLocaleString()
            };

            console.log(payload);

            try {
                const response = await axios.post("toDos", payload);
                console.log(response);
    
                setData(prev => [...prev, { ...response.data, checked: false }]);
                setInput('');
                setTextValue('');
            } catch (error) {
                console.error("Error while adding note:", error);
            } finally {
                setisPostLoading(false);
            }
        }
        
    };

    if (error) {
        return <div>something went wrong {error}</div>
    }

    const editNote = (id) => {

        const noteToEdit = data.find((note) => note.id === id);

        setInput(noteToEdit.tittle);
        setTextValue(noteToEdit.description);

        inputRef.current.focus();
        setisEdit(true);
        setEditingNoteId(id);
    };

    const saveChanges = async () => {
        console.log("saveChanges called");

        if (!editingNoteId) {
            return; // якщо немає id, не виконуємо збереження
        }

        const payload = {
            tittle: input,
            description: textValue,
            creationDate: new Date().toLocaleString()
        };

        const response = await axios.put(`toDos/${editingNoteId}`, payload);

        console.log(response);

        setData((prev) =>
            prev.map((item) => (item.id === editingNoteId ? response.data : item))
        );

        setInput('');
        setTextValue('');
        setisEdit(false);
        setEditingNoteId(null);
    };


    const deleteContact = async (id) => {
        await axios.delete(`toDos/${id}`);
        setData(prev => prev.filter((item) => item.id !== id));
    };

    const onChangeHandler = (e) => {
        const inputValue = e.target.value;
        setInput(inputValue);
    };

    const onEnterPress = (e) => {
        if(e.key === 'Enter'){
            addNote();
        }
    };

    const onCheckboxChange = async (id, checked) => {
        const updatedNotes = data.map((note) =>
            note.id === id ? { ...note, checked } : note
        );
        await axios.patch(`toDos/${id}`, { checked });
        setData(updatedNotes);
    };

    const onFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const onSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const searchedNotes = filteredNotes?.filter((note) =>
        note.tittle.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const addNewToDo = () => {
        inputRef.current.focus();
    };

    const handleClick = () => {
        console.log("Button clicked");
        isEdit ? saveChanges() : addNote();
    };

    return (<>
    <NotesStyled>
        <ContainerStyled>
            <InputComponent
                input={input}
                setInput={setInput}
                textValue={textValue}
                setTextValue={setTextValue}
                onEnterPress={onEnterPress}
                errorInput={errorInput}
                onChangeHandler={onChangeHandler}
                inputRef={inputRef}
            />
            <ButtonComponent
                    isPostLoading={isPostLoading}
                    isEdit={isEdit}
                    handleClick={handleClick}
            />
            <TodosListComponent
                    filteredNotes={filteredNotes}
                    filter={filter}
                    isLoading={isLoading}
                    searchedNotes={searchedNotes}
                    deleteContact={deleteContact}
                    editNote={editNote}
                    onCheckboxChange={onCheckboxChange}
                    count={filteredNotes.length}
                    onFilterChange={onFilterChange}
                    onSearchChange={onSearchChange}
                    searchQuery={searchQuery}
                    addNewToDo={addNewToDo}
                />
        </ContainerStyled>
    </NotesStyled>
    </>);
};

export default RenderComponent;
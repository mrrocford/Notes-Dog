import React from 'react';
import TodosList from './TodosList';
import styled from 'styled-components';
import { StyledButtonLink , InputStyled } from "../pages/RenderComponent";
import { Oval } from 'react-loader-spinner';

const CountStyled = styled.p`
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
`;

const UlStyled = styled.ul`
    padding-left: 30px;
`;

const SelectStyled = styled.select`
    padding: 10px;
    margin-top: 10px;
`;

const LoadingStyled = styled.div`
    margin-top: 60px;
    padding-left: 900px;
`;


const TodosListComponent = ({ 
    filteredNotes,
    filter,
    isLoading,
    searchedNotes,
    deleteContact,
    editNote,
    onCheckboxChange,
    count,
    onFilterChange,
    onSearchChange,
    searchQuery,
    addNewToDo }) => (
    <>
        <CountStyled>{count} нотатки</CountStyled>
        <SelectStyled onChange={onFilterChange} value={filter}>
            <option value="All">Всі</option>
            <option value="Active">Активні</option>
            <option value="Completed">Завершені</option>
        </SelectStyled>
        <InputStyled onChange={onSearchChange} placeholder="Пошук" value={searchQuery} />
        {filteredNotes.length === 0 ? (
            <div>
                На даний момент завдання відсутні <br /><br />
                <StyledButtonLink onClick={addNewToDo}>add note</StyledButtonLink>
            </div>
        ) : null}
        <UlStyled>
            {isLoading ? (
                <LoadingStyled>
                    <Oval
                        visible={true}
                        height="50"
                        width="50"
                        color="#3498db"
                        secondaryColor="#d3e8fa"
                        ariaLabel="oval-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    />
                </LoadingStyled>
            ) : (
                searchedNotes?.map((toDos) => (
                    <TodosList
                        key={toDos.id}
                        id={toDos.id}
                        tittle={toDos.tittle}
                        description={toDos.description}
                        checked={toDos.checked}
                        creationDate={toDos.creationDate}
                        onDelete={deleteContact}
                        onEdit={editNote}
                        onCheckboxChange={(checked) => onCheckboxChange(toDos.id, checked)}
                    />
                ))
            )}
        </UlStyled>
    </>
);

export default TodosListComponent;
import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
    padding: 10px;
    border-bottom: 1px solid #3498db;
    outline: none;
    margin: auto;
    display: block;
    text-align: center;
    width: 500px;
    height: 20px;

    :focus {
        border-color: #2980b9;
    }

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

const TextareaStyled = styled.textarea`
    width: 90%;
    border-bottom: 1px solid #3498db;
    padding: 10px;
    margin-top: 10px;
    margin-left: 30px;
    margin-bottom: 10px;
    text-align: center;
    resize: vertical;

    :focus {
        border-color: #2980b9;
    }

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

const ErrorStyled = styled.div`
    color: red;
    margin-top: 5px;
`;


const InputComponent = ({input, setInput, textValue, setTextValue, onEnterPress, errorInput, inputRef}) => {
    const onChangeHandler = (e) => {
        const inputValue = e.target.value;
        setInput(inputValue);
    };

    const onChangeHandlerText = (e) => {
        setTextValue(e.target.value);
    };
    return(<>
        <InputStyled 
                onChange={onChangeHandler} 
                onKeyDown={onEnterPress}
                ref={inputRef} 
                value={input} 
                placeholder="tittle"/>
        {errorInput && <ErrorStyled>{errorInput}</ErrorStyled>}
        <TextareaStyled 
                value={textValue} 
                onChange={onChangeHandlerText}
                onKeyDown={onEnterPress}
                placeholder="description"
                rows="10" 
                cols="50">
        </TextareaStyled>
    </>);
}

export default InputComponent;
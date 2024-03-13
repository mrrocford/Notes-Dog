import React from "react";
import styled from "styled-components";
import {StyledButtonLink } from "../pages/RenderComponent";

const ItemStyled = styled.div`
    font-size: 16px;
    margin-bottom: 10px;
    color: ${props => props.checked ? '#777' : '#333'};
    text-decoration: ${props => props.checked ? 'line-through' : 'none'};
`;

const WrapperContainer = styled.div`
    display: flex;
`;

const ItemContainer = styled.div`
    margin-left: 30px;
`;

const TodosList = (props) => {
    
    const handleCheckboxChange = (event) => {
        const checkbox = event.target.checked;
        props.onCheckboxChange(checkbox);
    }

    return(
        <>
        <ItemStyled checked={props.checked}>
            <WrapperContainer>
                <input
                    onChange={handleCheckboxChange}
                    checked={props.checked}
                    type="checkbox"
                    name="checkbox" 
                    id="checkbox"
                />
                <ItemContainer>
                    <p>{props.tittle}</p> 
                    <p>{props.description}</p> 
                    <p>{props.creationDate}</p>
                </ItemContainer>
            </WrapperContainer>
        </ItemStyled>
        <StyledButtonLink to="/list" onClick={() => props.onDelete(props.id)}>delete</StyledButtonLink>
        <StyledButtonLink to={`/list/${props.id}`} onClick={() => props.onEdit(props.id)}>edit</StyledButtonLink>
        
        </>
    );
};
export default TodosList;
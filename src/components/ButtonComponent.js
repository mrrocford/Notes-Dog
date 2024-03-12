import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { ButtonStyled } from "../pages/RenderComponent";


const ButtonComponent = ({ isPostLoading, isEdit, handleClick }) => (
    <ButtonStyled disabled={isPostLoading && isEdit} onClick={handleClick}>
        {isPostLoading ? (
            <ThreeDots
                visible={true}
                height="20"
                width="25"
                color="#3498db"
                radius="100"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        ) : (
            isEdit ? "Save" : 'Add'
        )}
    </ButtonStyled>
);

export default ButtonComponent;
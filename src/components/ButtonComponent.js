import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { StyledButtonLink  } from "../pages/RenderComponent";


const ButtonComponent = ({ isPostLoading, isEdit, handleClick }) => (
    <StyledButtonLink  to={isPostLoading && isEdit} onClick={handleClick}>
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
    </StyledButtonLink>
);

export default ButtonComponent;
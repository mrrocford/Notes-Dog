
import styled from "styled-components";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import { useParams } from "react-router-dom";
import { useFetchNoteId} from "../components/hooks/useFetchNoteId";


const EditStyled = styled.div`
    width: 80%;
    margin: auto;
    height: 100vh;
`;
const WrapperStyled = styled.div`
    margin-top: 30px;
`;


const EditComponent = () => {
    const { id } = useParams();
    const { note, isLoading, error} = useFetchNoteId(id);

    console.log(note); 

    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }
    
    return(
        <EditStyled>
            <WrapperStyled>
                <InputComponent
                />
                <ButtonComponent
                />
            </WrapperStyled>    
        </EditStyled>
    );

}

export default EditComponent; 
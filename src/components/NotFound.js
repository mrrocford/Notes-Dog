import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundStyled = styled.div`
    width: 100%;
    height: 100vh;

`;


const NotFound = () => {

    return(
        <NotFoundStyled>
            <div>
                
                {/* Your editing form fields go here */}
                <Link to="/list" >
                    Not Found
                </Link>
                <button>Cancel</button>
            </div>
        </NotFoundStyled>
    );

}

export default NotFound; 
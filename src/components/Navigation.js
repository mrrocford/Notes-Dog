import {Routes, Route, Link} from "react-router-dom";
import styled from "styled-components";
import About from "../pages/About";
import Home from "../pages/Home";
import RenderComponent from "../pages/RenderComponent";
import EditComponent from "../pages/EditComponent";
import NotFound from "./NotFound";

const StyledHeader = styled.header`
    background-color: #3498db;
    color: #fff;
    padding: 10px;
    text-align: center;
`;

const StyledUl = styled.ul`
    display: inline-flex;
`;

const StyledLi = styled.li`
    text-decoration: none;
    list-style-type: none;
    padding: 5px;
    margin-left: 35px;
    
`;

const StyledLink =styled(Link)`
    text-decoration: none;
    color: #ffff;
    :hover{
        color: yellow;
    }
`;
const StyledFooter = styled.footer`
    background-color: #3498db;
    font-size: 12px;
    color: #fff;
    padding: 10px;
    text-align: center;
`;



const Navigation = () => {

    return(
            <div>
                <StyledHeader>
                    <nav>
                        <StyledUl>
                            <StyledLi>
                                <StyledLink to="/">Home</StyledLink>
                            </StyledLi>
                            <StyledLi>
                                <StyledLink to="/list">To do list</StyledLink>
                            </StyledLi>
                            <StyledLi>
                                <StyledLink to="/about">About</StyledLink>
                            </StyledLi>
                        </StyledUl>
                    </nav>
                </StyledHeader>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/list" element={<RenderComponent />}></Route>
                    <Route path="/list/:id" element={<EditComponent />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <StyledFooter>
                    &copy; 2024 Notes Dog. All rights reserved.
                </StyledFooter>
            </div>
    
    );

}


export default Navigation; 
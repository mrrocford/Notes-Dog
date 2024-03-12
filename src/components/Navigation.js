import {Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import About from "../pages/About";
import Home from "../pages/Home";
import RenderComponent from "../pages/RenderComponent";

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
                    <Route path="/" element={<Home/>} />
                    <Route path="/list" element={<RenderComponent/>} />
                    <Route path="/about" element={<About/>} />
                </Routes>
                <footer>
                    &copy; 2024 Notes Dog. All rights reserved.
                </footer>
            </div>
    
    );

}


export default Navigation; 
import './App.css'
import Header from "./components/Header.tsx";
import GlobalStyles from "./Globalstyles.ts";
import Nav from "./components/Nav.tsx";
import Footer from "./components/Footer.tsx";
import Article from "./components/Article.tsx";
import Article2 from "./components/Article2.tsx";
import {useState} from "react";
import styled from "styled-components";



function App() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);


    return (
        <>
            <GlobalStyles/>
            <Header/>
            <StyledDiv>
                {isLoggedIn ? <p>Willkommen zurück!</p> : <p>Bitte einloggen.</p>}
                <StyledButton onClick={() => setIsLoggedIn(!isLoggedIn)}>
                    {isLoggedIn ? 'Ausloggen' : 'Einloggen'}
                </StyledButton>
            </StyledDiv>
            <Nav/>
            <main>
                <Article/>
                <Article2/>
            </main>
            <Footer/>
        </>
    )
}

export default App


const StyledButton = styled.div`
    color: black;
    align-items: center;
    text-align: center;
    font-size: 1em;
    margin: 50px;
    width: 10%;
    padding: 10px;
    border: 2px solid #303030;
    border-radius: 3px;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`
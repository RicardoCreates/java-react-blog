import styled from 'styled-components';

export default function Header() {
    return (
        <HeaderStyled>
            <h1>Willkommen zu meinem Travel Blog</h1>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.div`
background-color: #3498db;
color: white;
padding: 1em;
text-align: center;
    `

import {characters} from "../assets/Characters.ts";
import styled from "styled-components";
import {Link} from "react-router-dom";

export default function Nav2(){

    return (
        <>
            <StyledDiv>
                {characters.map((character)=> (<div key={character.id}>
                    <StyledLink to={'/character/' + character.id}>{character.name}</StyledLink>
                </div>))}
            </StyledDiv>
        </>
    )
}

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    text-decoration: none;
    color: black;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #3498db;
    font-weight: bold;

    &:hover {
        color: #101010;
    }
`
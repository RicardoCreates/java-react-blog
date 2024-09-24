import {characters} from "../assets/Characters.ts";
import {useParams} from "react-router-dom";
import styled from "styled-components";

export default function Character() {

    const params = useParams()

    const id: string | undefined = params.id

    const foundCharacter = characters.find((character) => character.id == id)

    return (
        <>
            <StyledDiv>
            <h1>{foundCharacter.name}</h1>
            <img src={foundCharacter.image} alt={''}/>
            </StyledDiv>
        </>
    )
}

const StyledDiv = styled.div`
text-align: center;
`
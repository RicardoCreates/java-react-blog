import {characters} from "../assets/Characters.ts";
import {useParams} from "react-router-dom";
import styled from "styled-components";

export default function Character() {

    const params = useParams()

    const id: string = params.id ?? "1"

    const foundCharacter = characters.find((character) => character.id == Number(id))

    return (
        <>
            {foundCharacter ?
            <StyledDiv>
            <h1>{foundCharacter.name}</h1>
            <img src={foundCharacter.image} alt={''}/>
            </StyledDiv> : <h2>not found</h2>}
        </>
    )
}

const StyledDiv = styled.div`
text-align: center;
`
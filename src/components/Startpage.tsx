import {Link} from "react-router-dom";
import styled from "styled-components";

export default function Startpage() {
    return (
        <>
            <StyledDiv>
            <h1>Welcome to my blog</h1>
            <Link to={'/article'}>Article</Link>
            </StyledDiv>
        </>
    )
}

const StyledDiv = styled.div`
text-align: center;
`
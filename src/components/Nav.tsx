import styled from 'styled-components';
import {Link} from "react-router-dom";

export default function Nav(){
    return (
        <>
            <NavStyled>
                <Link to="/">Startseite</Link>
                <Link to="/about">Über mich</Link>
                <Link to="#">Reiseziele</Link>
                <Link to="#">Kontakt</Link>
            </NavStyled>

        </>
    )
}



const NavStyled = styled.div`
  text-align: center;
  margin: 20px;

  a {
    margin: 0 15px;
    text-decoration: none;
    color: #3498db;
    font-weight: bold;

    &:hover {
      color: #101010;
    }
  }
`;



import styled from 'styled-components';

export default function Nav(){
    return (
        <>
            <NavStyled>
                <a href="#">Startseite</a>
                <a href="#">Über mich</a>
                <a href="#">Reiseziele</a>
                <a href="#">Kontakt</a>
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

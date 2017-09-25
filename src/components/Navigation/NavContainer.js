import styled from 'styled-components';

const NavContainer = styled.ul`
  width:100%;
  text-align:center;
  background-color:Black;
  position:relative;
  display: inline-flex;
  justify-content: space-between;
  margin: auto;

  @media screen and (max-width: 700px){
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

`;

export default NavContainer

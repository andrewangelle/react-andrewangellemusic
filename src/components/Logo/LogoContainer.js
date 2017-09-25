import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  width: 100%;

  @media screen and (max-width: 500px){
    flex-direction: column;
  }
`

export default LogoContainer

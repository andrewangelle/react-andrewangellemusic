import styled from 'styled-components';

const Content = styled.div`
  font-family: "PT Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding-top: 10%;
  margin: auto;
  height: 50%;
  width: 50%;
  overflow: auto;

  @media screen and (max-width: 1170px){
    height:80%;
    width:80%;
    margin-top:auto;
    margin-left:auto;
    margin-right:auto;
    margin-bottom:auto;
  }
`;

export default Content

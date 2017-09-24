import styled from 'styled-components';

const LogoText = styled.h1`
  font-family: ${
    props => props.subheader ?
      "PT Sans" : "Mrs Saint Delafield"
    };
  font-size: ${
    props => props.subheader ?
      "16px" : "42px"
    };
  font-weight:200;
  text-shadow:3px 3px black;
  color: #FAFAD2;
  margin: auto;
  padding: 10px;
`
export default LogoText

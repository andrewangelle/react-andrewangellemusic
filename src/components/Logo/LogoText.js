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
  text-shadow: ${
    props => props.subheader ?
      "1.5px 1.5px #7a1f1f" : "2px 2px #7a1f1f"
    };
  font-weight: 200;
  color: #FAFAD2;
  margin: auto;
  padding: 10px;
`
export default LogoText

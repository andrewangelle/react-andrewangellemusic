import styled from 'styled-components';

const TextArea = styled.textarea.attrs({
  type: props => props.type,
  margin: props => props.size || '1em',
  padding: props => props.size || '1em'
})`
  font-family: "PT Sans", sans-serif;
  font-size: 1em;
  border: 2px solid #7a1f1f;
  border-radius: 3px;
  background-color: #FAFAD2;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`;

export default TextArea

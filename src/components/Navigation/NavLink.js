import styled from 'styled-components';

const NavLink = styled.li`
  font-family: "PT Sans", sans-serif;
  font-weight:500;
  color:#FAFAD2;
  background-color:rgba(122, 31, 31, 0.1);
  text-align:center;
  display:inline-block;
  border-right:1px solid #7a1f1f;
  border-left:1px solid #7a1f1f;
  padding:0px 50px 0px 50px;
  margin-left:auto;
  margin-right:auto;
  flex: auto;

  @media screen and (max-width: 500px){
    padding: 0px 12px 0px 12px;
    font-size: 14px;
  }

  @media screen and (max-width: 700px){
    padding: 0px 20px 0px 20px;
    font-size: 14px;
  }


  @media screen and (max-width: 900px){
    padding: 0px 30px 0px 30px;
    font-size: 16px;
  }
`;

export default NavLink

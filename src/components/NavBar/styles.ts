import styled from 'styled-components';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

export const Container = styled.div`  
width: 100%;
height: 4rem;
padding: 0 1.5rem;
position: fixed;
display: flex;
justify-content: space-between;
align-items: center;
background-color:#202833;
z-index: 999;

    .MyName{
      font-size: 2rem;
      font-weight: bold;
    }
  `;

export const Header = styled.div`
display: flex;
flex-direction: row;

   @media screen and (max-width: 769px){
        display: none;
    }
`;

export const OptionMenu = styled.div`
padding: 0 1.2rem;
font-size: 1rem;
color: white;

&:hover{
  
        color: red;
        text-decoration: 999;
        cursor: pointer;
    }
`;

export const Name = styled.div`
padding: 0 1.2rem;
font-size: 1rem;
 color: white;
  
`;


export const OpenMenu = styled(AiOutlineMenu)`
width: 25px;
height: 25px;
display: none;
color: white;
cursor: pointer;
@media screen and (max-width: 769px){
        display: block;
    }

`;

export const CloseMenu = styled(AiOutlineClose)`
  width: 25px;
  height: 25px;
  display: none;
  color: red;
  cursor: pointer;
    @media screen and (max-width: 769px){
        display: block;
    }
`;





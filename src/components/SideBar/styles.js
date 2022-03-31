import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Container = styled.aside`
 width: auto;
    height: auto;
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 4rem;
    width: 13rem;
    height: 13rem;
    display: none;
    background:#202833;
    @media screen and (max-width: 769px){
        display:${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    } 
`;

export const SideMenu= styled.div`
   width: 100%;
    display: flex;
    flex-direction: column;
`;

export const SideLink= styled( Link )`
    width: 100%;
    height: 100%;
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.1s ease-in;
    cursor: pointer;
    background:#202833;
    color: white;

    &:hover{
  
  color: red;
  text-decoration: 999;
  cursor: pointer;
}
 
`;




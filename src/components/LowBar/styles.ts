import styled from 'styled-components';

export const Container = styled.nav`
    width: 90%;
    height: 5rem;
    margin-top: 10rem;
    display: flex;
    align-items: center;
    justify-content:flex-end;
    opacity:1;
    background:#10141A;
    border-bottom: solid;
    width: auto;
    border-bottom-color:red;

   
 
  `;

export const Title = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
color: #E6E7F4;
opacity: 0.5;
font-size:1.3rem;

@media screen and (max-width: 659px){
    font-size:1rem;
    }


.lavinia{

  font-size:1rem;
  margin-left: 0.5rem;
  color: white;
  text-decoration: none;

  &:hover {
        filter:brightness(1);
        color: red;
        text-decoration: 999;
        cursor: pointer;

        
  }

  
}

  `;
  







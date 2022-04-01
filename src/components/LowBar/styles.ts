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

.lavinia{
  font-size:1.3rem;
  margin-left: 0.5rem;
  color: white;
  transition: 1s all ease;
  animation: go-back 1s infinite alternate;


  &:hover {
        filter:brightness(1);
        color: red;
        text-decoration: 999;
        cursor: pointer;

        
  }
  
}

@keyframes go-back {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateX(10px) scale(1.2);
  }
 

}



  `;
  







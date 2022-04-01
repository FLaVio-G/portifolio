import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  
  padding: 4.5rem 1.5rem;
  padding-top:6rem;


  `;

export const Information = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: left;
padding: 0px 1.5rem;


@media screen and (max-width: 1140px){
        justify-content: center;
        align-items: center;
    }
  `;

export const Description = styled.div`
width: 45rem;
color: #E6E7F4;
opacity: 0.5;
font-size:2.3rem;

@media screen and (max-width: 1120px){
        width: 100%;
    }

  `;

export const Formation = styled.div`
font-size:1.5rem;
color: red;
`;

export const Name = styled.div`
font-size:3.5rem;
color: white;
`;

export const Gbutton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 45px;
  color: white;
  text-decoration: none;
  font-size: 0.895em;
  margin: 30px 0;
  border: 2px solid #ff7675;
  transition: 1s all ease;
  margin-left: 1.5rem;
  animation: go-back 1s infinite alternate;

    
    
    
  


    &:hover {
        filter:brightness(1);
        color: red;
        text-decoration: 999;
        cursor: pointer;

        
    }
    @media screen and (max-width: 357px){
      width: 250px;
    }
  
}

@keyframes go-back {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateX(10px) scale(1.2);
  }
 
`;















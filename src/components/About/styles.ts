import { BsGithub } from 'react-icons/bs';
import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
padding: 4.5rem 1.5rem;
justify-content: space-evenly;
  `;

export const Wrapper = styled.div`
display: flex;
width: 85%;
@media screen and (max-width: 1079px){
       display: flex;
       flex-direction: column;
        
    }

 
  `;
export const ImageArea = styled.div`
margin-right: 1rem;
 
  `;
export const AreaInfo = styled.div`
 width: 100%;
  text-align: justify;
    letter-spacing: 1px;
 
  `;

export const Title = styled.div`
  display: flex;
  justify-content: start;
  color: white;
  font-size:  2rem;
  `;

export const Title2 = styled.div`
  color: white;
  margin-top: 1rem;
  font-size:1.5rem;
  `;


export const MoreInfo = styled.div`
  color: white;
  margin-top: 1.5rem;
  font-size:1rem;
  text-align: justify;
  letter-spacing: 0.1rem;
  opacity: 0.8;
  `;

export const InfoDetail = styled.div`
  color: white;
  margin-top: 1.5rem;
  font-size:1rem;
 
  `;

export const ImageF = styled.div`
display: flex;
justify-content: center;

`;
export const ImageUser = styled.img`
display: flex;
justify-content: center;
border-radius: 100%;
width: 500px;
height: 500px;
border-color: #202833;
outline: 0.3rem solid red;
border: 1rem outset #202833;

@media screen and (max-width: 1120px){
        width: 250px;
        height: 250px;
    }
    @media screen and (max-width: 1678px){
        width: 350px;
        height: 350px;
    }
    

  `;

export const BarDetail = styled.div`
  display: flex;
  justify-content: center;
  text-align: justify;
  letter-spacing: 1rem;
  opacity: 0.8;
  margin-top: 1.5rem;

  `;

export const SubDetail = styled.div`
color: white;
margin-left: 1rem;
margin-right:1rem;
font-size:1rem;
animation: go-back 1s infinite alternate;
}

@keyframes go-back {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateX(15px) scale(1.5);
  }

`;

export const MoreInfo2 = styled.div`
margin-top: 2rem;
display: flex;
font-size:2.5rem;
justify-content:center;
color: white;
`;

export const CaseIcon = styled.div`

`





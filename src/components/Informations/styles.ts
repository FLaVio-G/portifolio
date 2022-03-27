import styled from 'styled-components';

export const Container = styled.div`
width: 90%;
max-width: 980px;
height: 100vh;
display: flex;
align-items: center;
padding: 15rem 1.5rem;

  `;

export const Information = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: left;

@media screen and (max-width: 769px){
        width: 100%;
        padding:0 1.5rem;
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
  position: relative;
  width: 37%;
  display: block;
  color: white;
  font-size: 14px;
  text-decoration: none;
  margin: 30px 0;
  border: 2px solid #ff7675;
  padding: 14px 60px;
  text-transform: uppercase;
  overflow: hidden;
  transition: 1s all ease;


    &:hover {
        filter:brightness(0.9);

    }
 
`;












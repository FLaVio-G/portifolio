import styled from 'styled-components';

export const Container = styled.div` 
display: flex;
flex-direction: column;
width:100%;
justify-content:center;
align-items:center;
padding: 4.5rem 1.5rem;


  `
export const Wrapper = styled.div`
    margin-top:1rem;
    width: 55%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    
  /* max-width: 1120px; 
  margin:0 auto;
  padding: 2.5rem 1rem; */
  
  `;


export const SkillLane = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin:0 auto;
  padding: 2.5rem 1rem;
  `;

export const Title = styled.div`
    display: flex;
    font-size: 5rem;
    justify-content: center;
    align-items: center;
    color: white;

  @media screen and (max-width: 414px){
    font-size: 3.8rem;
  font-weight: bold;
    }
  `;


export const title2 = styled.div`
  color: white;
  margin-top: 1.5rem;
  font-size:1.5rem;
  text-align: justify;
  letter-spacing: 0.1rem;
  opacity: 0.8;
  `;









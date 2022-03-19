import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
padding:0 5rem;
  `;

export const Information = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: left;
margin: 10rem;

  `;

export const Description = styled.div`
width: 45rem;
color: #E6E7F4;

  `;

export const Formation = styled.div`
font-size:1rem;
color: red;
`;
export const Name = styled.div`
font-size:2rem;
color: white;
`;



export const Gbutton = styled.div`
    width: 11rem;
    padding: 0 1.5rem;
    height: 1.4rem;
    background: darkgoldenrod;
    color: #FFF;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    transition: filter 0.2s;
    margin-top: 1.5rem;
    align-items: center;

    &:hover {
        filter:brightness(0.9);

    }
`;










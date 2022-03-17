import styled from 'styled-components';

export const Container= styled.div`
  img {
      align-self: center;
      max-width: 100px;
    }

    .MyName{
      font-size: 23px;
      font-weight: bold;
    }
    .Description{
      font-size: 13px;
      font-weight: small;
    }

  `

export const Content= styled.div`
max-width: 1120px;
margin: 0 auto;

padding: 2 1rem  12rem;
display: flex;
align-items: center;
justify-content: space-between;

button { 
  font-size: 1rem;
  color: #ffff;
  background:blue;
  border: 0;
  padding: 0.2rem;
  border-radius:0.25rem;
  height: 3rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9)
  }
}

`






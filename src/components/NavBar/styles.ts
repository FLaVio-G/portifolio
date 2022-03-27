import styled from 'styled-components';

export const Container = styled.div`  
  width: 90%;
  height: 4rem;
  margin: 0 auto;
  padding: 0 1rem 10rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
  position: fixed;
  display: flex;
  z-index: 999;
  background:#202833;
  
    .MyName{
      font-size: 2rem;
      font-weight: bold;
    }
  `;

export const Header = styled.div`
display: flex;
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
  
`






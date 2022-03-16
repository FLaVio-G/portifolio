import { Container } from "./styles";
import flavio from "../../assets/flavio.jpg";

function Header() {
  return (

    <Container>
     
        <img src={flavio} />
        <p className="MyName">Olá, meu nome Flávio</p>
        <p className="Description">Construo aplicações Front end através de React, Styled components e Next js</p>
        <p className="Formation">Front-End Developer React js | Bachelor in Information Systems</p>
        <button>Entre em contato</button>

    </Container>




  );
}

export default Header;

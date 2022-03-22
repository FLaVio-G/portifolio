import { Container, Header, Link, Name, OptionMenu } from "./styles";
import flavio from "../../assets/flavio.jpg";

function NavBar() {
  return (

    <Container>
     
        <Name>
          <p className="MyName"> Flávio Viana </p>
        </Name>

        <Header>

        <Link>
            {/* <Link to='Technologies' smooth={true} duration={1000}> */}
            <OptionMenu>Home</OptionMenu>
          </Link>

          <Link>
            {/* <Link to='informations' smooth={true} duration={1000}> */}
            <OptionMenu>Sobre</OptionMenu>
          </Link>

          <Link>
            {/* <Link to='Experiences' smooth={true} duration={1000}> */}
            <OptionMenu>Habilidades</OptionMenu>
          </Link>

          <Link>
            {/* <Link to='Technologies' smooth={true} duration={1000}> */}
            <OptionMenu>Portifolio</OptionMenu>
          </Link>

        

        </Header>
  
    </Container>




  );
}

export default NavBar;

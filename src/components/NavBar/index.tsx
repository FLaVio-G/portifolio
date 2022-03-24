import { Container, Header, Name, OptionMenu } from "./styles";
import { Link, animateScroll as scroll } from "react-scroll";


function NavBar() {
  
  return (

    <Container>
     
        <Name>
          <p className="MyName"> Flávio Viana </p>
        </Name>

        <Header>

            <Link to='Projects' smooth={true} duration={1000}>
            <OptionMenu>Portifolio</OptionMenu>
          </Link>

        

        </Header>
  
    </Container>




  );
}

export default NavBar;

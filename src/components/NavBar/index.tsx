import { Container, Content, Link, OptionMenu } from "./styles";
import flavio from "../../assets/flavio.jpg";

function NavBar() {
  return (

    <Container>
     <Content>
      
        <p className="MyName"> Flávio Viana </p>
        
        <header>

        {/* <Link to='informations' smooth={true} duration={1000}> */}
        <OptionMenu>Perfil</OptionMenu>

        {/* <Link to='Experiences' smooth={true} duration={1000}> */}
        <OptionMenu>Formação</OptionMenu>

        {/* <Link to='Technologies' smooth={true} duration={1000}> */}
        <OptionMenu>Habilidades</OptionMenu>

        {/* <Link to='Projects' smooth={true} duration={1000}> */}
        <OptionMenu>Trabalhos</OptionMenu>


        </header>
        </Content>
    </Container>




  );
}

export default NavBar;

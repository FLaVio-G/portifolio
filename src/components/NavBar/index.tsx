import { CloseMenu, Container, Header, Name, OpenMenu, OptionMenu } from "./styles";
import React, { useState } from "react";
import { Link } from "react-scroll";
import SideBar from "../SideBar";



export function NavBar() {

  const[isOpen, setIsOpen] = useState(false);
  const[click, setClick] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
    setClick(!isOpen);
  }
  
  return (

    <Container>
      <SideBar  isOpen={isOpen} toggle={toggle} />
        <Name>
          <p className="MyName"> Flávio Viana </p>
        </Name>

        {!click ?
        <OpenMenu onClick={toggle} />
        :
        <CloseMenu onClick={toggle} />
      }

        <Header>

        <Link to='informations' smooth={true} duration={1000}>
            <OptionMenu>Início</OptionMenu>
          </Link>

          <Link to='About' smooth={true} duration={1000}>
            <OptionMenu>Sobre</OptionMenu>
          </Link>

          <Link to='skills' smooth={true} duration={1000}>
            <OptionMenu>Habilidades</OptionMenu>
          </Link>

            <Link to='projects' smooth={true} duration={1000}>
            <OptionMenu>Portifolio</OptionMenu>
          </Link>

        

        </Header>
  
    </Container>




  );
}

export default NavBar;

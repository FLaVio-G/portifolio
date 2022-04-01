import { AreaInfo, BarDetail, Container, ImageArea, ImageF, ImageUser, InfoDetail, MoreInfo, SubDetail, Title, Wrapper, Title2, MoreInfo2 } from "./styles";

import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineDribbble } from 'react-icons/ai';

import { Link } from "react-scroll";



const User = require("../../assets/flavio.jpg")

function About() {
  return (

    <Container  id='About'>

      <Wrapper>
        <ImageArea>
        
          <ImageF>
            <ImageUser src={User} />
          </ImageF>

          <MoreInfo2>Flávio Viana</MoreInfo2>

          <BarDetail>
            
          <a href="https://github.com/KaTSu113">
          <SubDetail > <BsGithub size={50} color="red"  /> </SubDetail>
          </a> 

          <a href="https://www.linkedin.com/in/fl%C3%A1vioviana113/">
          <SubDetail> <FaLinkedin size={50} color="red" /> </SubDetail>
          </a>

          <a href="https://dribbble.com/katsu113">
          <SubDetail> <AiOutlineDribbble size={50} color="red" /> </SubDetail>
          </a>


          </BarDetail>
          
        </ImageArea>
   

      <AreaInfo>
        <Title>
          Sobre
        </Title>
        <Title2>
          Conheça um pouco sobre a minha história
        </Title2>
        <MoreInfo>
          Olá meu nome é Flávio, sou apaixonado por tecnologia. Meu primeiro contato com esse mundo, foi quando
          meu avô comprou um computador para minha família, pórem não veio com sistema operacional instalado. A partir daí começou minha saga, sendo a primeira
          fase, instalar o windows XP!
          <br/>
          <br/>
          Atualmente sou formado em Sistemas de informação, estou estudando Front-end para desenvolvimento de projetos web.
          Através de projetos publicados no GitHub demonstro meu conhecimento em: ReactJS, NextJS e Frameworks para CSS, como Styled-Components.
          Espero como desenvolvedor ser além dos códigos, construir relações de cooperatividade no ambiente de trabalho, além de 
          sempre buscar novas formas de desenvolvimento, sendo a adaptabilidade uma das minhas principais metas!
        </MoreInfo>
        {/* <InfoDetail>
          <SubDetail>Flavio Gabriel de Andrade Viana </SubDetail>
          <SubDetail>Idade: 23 anos </SubDetail>
          <SubDetail>Contato: (93)981218330 / (93)988019961 </SubDetail>


        </InfoDetail> */}

      </AreaInfo>
      </Wrapper>
    </Container>




  );
}

export default About;

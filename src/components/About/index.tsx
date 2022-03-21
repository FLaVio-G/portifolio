import { AreaInfo, BarDetail, Container, ImageArea, ImageF, ImageUser, InfoDetail, MoreInfo, SubDetail, Title, Wrapper, Title2, MoreInfo2 } from "./styles";

import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi';



const User = require("../../assets/flavio.jpg")

function About() {
  return (

    <Container>

      <Wrapper>
        <ImageArea>
        
          <ImageF>
            <ImageUser src={User} />
          </ImageF>

          <MoreInfo2>Flávio Viana</MoreInfo2>

          <BarDetail>

          <SubDetail> <BsGithub size={50} color="red"  /> </SubDetail>
          <SubDetail> <FaLinkedin size={50} color="red" /> </SubDetail>
          <SubDetail> < HiOutlineMailOpen size={50} color="red" /> </SubDetail>

          </BarDetail>
          
        </ImageArea>
      </Wrapper>

      <AreaInfo>
        <Title>
          Sobre
        </Title>
        <Title2>
          Conheça um pouco sobre a minha história
        </Title2>
        <MoreInfo>
          Olá meu nome é Flávio, sou apaixonado por computação. Meu primeiro contato com esse mundo foi quando
          meu avô comprou um computador para minha família, pórem não veio com sistema operacional instalado, a partir daí começou essa saga, sendo o primeiro
          checkpoint Instalar o windows xp!
          <br/>
          <br/>
          Atualmente sou formado em Sistemas de informação, estou estudando desenvolvimento Front-end para desenvolvimento de projetos web.
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
    </Container>




  );
}

export default About;

import { AreaInfo, BarDetail, Container, ImageArea, ImageF, ImageUser, InfoDetail, MoreInfo, SubDetail, Title, Wrapper } from "./styles";

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
          <BarDetail>
          <SubDetail> <BsGithub /> </SubDetail>
          <SubDetail> <FaLinkedin /> </SubDetail>
          <SubDetail> < HiOutlineMailOpen /> </SubDetail>
          </BarDetail>
        </ImageArea>
      </Wrapper>

      <AreaInfo>
        <Title>
          Sobre
        </Title>
        <MoreInfo>
          Olá meu nome é Flávio, sou apaixonado por tecnologia. Meu primeiro contato com esse mundo foi quando
          meu Avô comprou um computador, pórem não tinha sistema operacional instalado, a partir daí começou essa saga, sendo o primeiro
          checkpoint "Instalar o windows xp!
        </MoreInfo>
        <InfoDetail>
          <SubDetail>Flavio Gabriel de Andrade Viana </SubDetail>
          <SubDetail>Idade: 23 anos </SubDetail>
          <SubDetail>Contato: (93)981218330 / (93)988019961 </SubDetail>


        </InfoDetail>

      </AreaInfo>
    </Container>




  );
}

export default About;

import { Container, Information, ImageF, ImageUser, Description, Gbutton, Formation, Name } from "./styles";
import User from '../../assets/flavio.jpg';

function Informations() {
  return (

    <Container>
      <Information >
        <Formation>Front-End Developer React js | Bachelor in Information Systems</Formation>
        <Name>Flávio Viana</Name>
        <Description>
          Sou profissional da área de Sistemas de informação,
          estou estudando desenvolvimento web. Tenho conhecimento em HTML/CSS,
          Javascript, Typescript. E também Frameworks Vue e React.
        </Description>
       
        <Gbutton>Entre em contato</Gbutton>
      </Information >
     
      {/* <ImageF>
            <ImageUser src={User}/>
            </ImageF> */}
    </Container>
    




  );
}

export default Informations;

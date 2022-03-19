import { Container, Information, ImageF, ImageUser } from "./styles";
import User from '../../assets/flavio.jpg';

function Informations() {
  return (

    <Container>
      <Information >
        <title>Front-End Developer React js | Bachelor in Information Systems</title>
        <p>Flávio Viana</p>
        Sou profissional da área de Sistemas de informação,
        estou estudando desenvolvimento web. Tenho conhecimento em HTML/CSS,
        Javascript, Typescript. E também Frameworks Vue e React.
        <button>Entre em contato</button>
        {/* <ImageF>
            <ImageUser src={User}/>
            </ImageF> */}
      </Information >

    </Container>




  );
}

export default Informations;

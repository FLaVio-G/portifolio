import { Container, Content } from "./styles";
import flavio from "../../assets/flavio.jpg";

function Profile() {
  return (

    <Container>
      <Content>
        <img src={flavio} />
        <p className="MyName">Flávio Gabriel de Andrade Viana</p>
        <p className="Formation">Front-End Developer React js | Bachelor in Information Systems</p>

      </Content>

    </Container>




  );
}

export default Profile;


import Educations from "./components/Educations";
import Experiences from "./components/Experiences";
import Informations from "./components/Informations";
import Profile from "./components/Profile";
import Technologies from "./components/Technologies";
import { Container } from "./styles/global";

function App() {
  return (
    <Container>
      <Profile />
      <Educations />
      <Informations />
      <Technologies />
      <Experiences />
    </Container>

  );
}

export default App;

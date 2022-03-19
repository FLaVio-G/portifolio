
import Educations from "./components/Projects";
import About from "./components/About";
import Informations from "./components/Informations";
import NavBar from "./components/NavBar";
import Technologies from "./components/Technologies";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <NavBar />
      <Informations />
      <About />
      <GlobalStyle />
    </>
  );
}

export default App;

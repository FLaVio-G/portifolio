

import About from "./components/About";
import Informations from "./components/Informations";
import NavBar from "./components/NavBar";

import { GlobalStyle } from "./styles/global";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <NavBar />
      <Informations />
      <About />
      <Skills />

      
      <GlobalStyle />
    </>
  );
}

export default App;

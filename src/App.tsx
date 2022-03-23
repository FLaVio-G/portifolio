

import About from "./components/About";
import Informations from "./components/Informations";
import NavBar from "./components/NavBar";

import { GlobalStyle } from "./styles/global";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import LowBar from "./components/LowBar";

function App() {
  return (
    <>
      <NavBar />
      <Informations />
      <About />
      <Skills />
      <Projects />
      <LowBar/>
    
      <GlobalStyle />
    </>
  );
}

export default App;

import { Title2 } from "../About/styles";
import { Container, Information, Description, Gbutton, Formation, Name } from "./styles";


function Informations() {
  return (

    <Container  id='informations'>
      <Information >
        <Formation> Desenvolvedor Front-end | Bacharel em Sistemas de Informação</Formation>
        <Description>
          Sou profissional da área de Sistemas de informação,
          com experiência em desenvolvimento web. 
        </Description>
       
      </Information >
      
      <a href="https://www.linkedin.com/in/fl%C3%A1vioviana113/">   
      <Gbutton>
     Entre em contato
       </Gbutton>
      </a>
    </Container>
    




  );
}

export default Informations;

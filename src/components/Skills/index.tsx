import { Container, SkillLane, Title, Wrapper } from "./styles";
import { FaHtml5 } from 'react-icons/fa';
import { DiCss3 } from 'react-icons/di';
import { SiStyledcomponents } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { DiSass } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { SiInkscape } from 'react-icons/si';
import { Title2 } from "../About/styles";

function Skills() {
  return (

    <Container  id='skills'>
      <Title>
        Habilidades
      </Title>
      <Wrapper>


        <SkillLane>

          <FaHtml5 size={100} color="red" />
          <Title2>Html</Title2>

        </SkillLane>

        <SkillLane>

          <DiCss3 size={100} color="red" />
          <Title2>Css</Title2>
        </SkillLane>

        <SkillLane>

          <SiStyledcomponents size={100} color="red" />
          <Title2>Styled components</Title2>
        </SkillLane>

        <SkillLane>

          <IoLogoJavascript size={100} color="red" />
          <Title2>Javascript</Title2>
        </SkillLane>

        <SkillLane>

          <DiSass size={100} color="red" />
          <Title2>Sass</Title2>
        </SkillLane>

        <SkillLane>

          <FaReact size={100} color="red" />
          <Title2>React js</Title2>
        </SkillLane>

        <SkillLane>

          <FiFigma size={100} color="red" />
          <Title2>Figma</Title2>
        </SkillLane>

        <SkillLane>

          <SiInkscape size={100} color="red" />
          <Title2>Inkscape</Title2>
        </SkillLane>


      </Wrapper>



    </Container>




  );
}

export default Skills;

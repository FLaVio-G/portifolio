import { Container, SkillLane, Title, Wrapper } from "./styles";
import { FaHtml5 } from 'react-icons/fa';
import { DiCss3 } from 'react-icons/di';
import { SiStyledcomponents } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { DiSass } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { SiInkscape } from 'react-icons/si';

function Skills() {
  return (

    <Container>
      <Title>
        Habilidades
      </Title>
      <Wrapper>


        <SkillLane>

          <FaHtml5 size={100} color="red" />

        </SkillLane>

        <SkillLane>

          <DiCss3 size={100} color="red" />

        </SkillLane>

        <SkillLane>

          <SiStyledcomponents size={100} color="red" />

        </SkillLane>

        <SkillLane>

          <IoLogoJavascript size={100} color="red" />

        </SkillLane>

        <SkillLane>

          <DiSass size={100} color="red" />

        </SkillLane>

        <SkillLane>

          <FaReact size={100} color="red" />

        </SkillLane>

        <SkillLane>

          <FiFigma size={100} color="red" />

        </SkillLane>

        <SkillLane>

          <SiInkscape size={100} color="red" />

        </SkillLane>


      </Wrapper>



    </Container>




  );
}

export default Skills;

import {
  Container,
  Desc,
  Image,
  List,
  SubTitle,
  Title,
  Vector,
  Wrapper,
} from "./technologies.styled";
import developer from "../../assets/developer.svg";
import designer from "../../assets/designer.svg";
import html from "../../assets/html-5-logo-svgrepo-com.svg";
import css from "../../assets/css-svgrepo-com.svg";
import js from "../../assets/js-official-svgrepo-com.svg";
import react from "../../assets/reactjs-svgrepo-com.svg";
import materialui from "../../assets/material-ui-svgrepo-com.svg";
import tailwindcss from "../../assets/tailwindcss-icon-svgrepo-com.svg";
import styledcomponents from "../../assets/styled-components-svgrepo-com.svg";
import reactquery from "../../assets/react-query-seeklogo.com.svg";
import reacthookform from "../../assets/react-hook-form.jpg";
import redux from "../../assets/redux-svgrepo-com.svg";
import nodejs from "../../assets/node-svgrepo-com.svg";
import mongodb from "../../assets/mongodb-svgrepo-com.svg";
import figma from "../../assets/figma-svgrepo-com.svg";
import illustrator from "../../assets/illustrator-svgrepo-com.svg";
import xd from "../../assets/adobe-xd-logo-svgrepo-com.svg";
import canva from "../../assets/canva-svgrepo-com.svg";

const Technologies = () => {
  return (
    <Wrapper>
      <Container>
        <Vector src={developer} alt="Designer vector" />
        <Title>Developer</Title>
        <Desc>
          I love building things from scratch and bringing concepts to life in
          the browser.
        </Desc>
        <SubTitle>Technologies I used:</SubTitle>
        <List>
          <li>
            <Image src={html} alt="html vector" />
            <span>HTML</span>
          </li>
          <li>
            <Image src={css} alt="css vector" />
            <span>CSS</span>
          </li>
          <li>
            <Image src={js} alt="js vector" />
            <span>Javascript</span>
          </li>
          <li>
            <Image src={react} alt="react vector" />
            <span>React</span>
          </li>
          <li>
            <Image src={materialui} alt="materialui vector" />
            <span>Material UI</span>
          </li>
          <li>
            <Image src={tailwindcss} alt="tailwindcss vector" />
            <span>Tailwind CSS</span>
          </li>
          <li>
            <Image src={styledcomponents} alt="styledcomponents  vector" />
            <span>Styled Components</span>
          </li>
          <li>
            <Image src={redux} alt="redux vector" />
            <span>Redux Toolkit</span>
          </li>
          <li>
            <Image src={reactquery} alt="reactquery vector" />
            <span>React Query</span>
          </li>
          <li>
            <Image src={reacthookform} alt="reacthookform vector" />
            <span>React Hook Form</span>
          </li>
          <li>
            <Image src={nodejs} alt="nodejs vector" />
            <span>Node JS</span>
          </li>
          <li>
            <Image src={mongodb} alt="mongodb vector" />
            <span>MongoDB</span>
          </li>
        </List>
      </Container>
      <Container>
        <Vector src={designer} alt="Designer vector" />
        <Title>Designer</Title>
        <Desc>
          Simple content structure, tidy design patterns, and thoughtful
          interactions are all things I value.
        </Desc>
        <SubTitle>Design resources</SubTitle>
        <List>
          <li>
            <Image src={figma} alt="figma vector" />
            <span>Figma</span>
          </li>
          <li>
            <Image src={xd} alt="xd vector" />
            <span>Adobe XD</span>
          </li>
          <li>
            <Image src={illustrator} alt="illustrator vector" />
            <span>Adobe Illustrator</span>
          </li>
          <li>
            <Image src={canva} alt="canva vector" />
            <span>Canva</span>
          </li>
        </List>
      </Container>
    </Wrapper>
  );
};

export default Technologies;

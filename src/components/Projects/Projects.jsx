import {
  Box,
  Button,
  Card,
  CardDetails,
  Clip,
  Container,
  Desc,
  Detail,
  Image,
  Title,
  Wrapper,
} from "./projects.styled";
import captured from "../../assets/captured.gif";
import zenofilms from "../../assets/zenofilms.gif";
import blogr from "../../assets/blogr.JPG";
import manage from "../../assets/manage.gif";
import easybank from "../../assets/easybank.JPG";
import sunnyagency from "../../assets/sunnyagency.JPG";

const Projects = () => {
  return (
    <Wrapper id="projects">
      <Clip />
      <Box>
        <Title>My Recent Projects</Title>
        <Desc>
          Here are a couple of the recent design projects on which I've worked.
          Are you curious to see more? I'd like to hear from you.{" "}
          <strong>Email Me</strong>
        </Desc>
      </Box>
      <Container>
        <Card>
          <Image src={captured} alt="Captured snap" />
          <CardDetails className="card-details">
            <Detail>
              <h5>Social Media App</h5>
              <strong>Tech used:</strong>
              <p>
                React, Typescript, Material UI, React Query, React Hook Form,
                Apollo Server, MongoDB
              </p>
            </Detail>
            <a
              href="https://captured-merng.herokuapp.com/"
              rel="noreferrer"
              target="_blank"
            >
              <Button>Visit Website</Button>
            </a>
          </CardDetails>
        </Card>
        <Card>
          <Image src={zenofilms} alt="Zeno Films snap" />
          <CardDetails className="card-details">
            <Detail>
              <h5>Movie App</h5>
              <strong>Tech used:</strong>
              <p>React, Firebase, Redux, TailwindCSS, SWR</p>
            </Detail>
            <a
              href="https://zenofilms.vercel.app/"
              rel="noreferrer"
              target="_blank"
            >
              <Button>Visit Website</Button>
            </a>
          </CardDetails>
        </Card>
        <Card>
          <Image src={sunnyagency} alt="Sunny Agency snap" />
          <CardDetails className="card-details">
            <Detail>
              <h5>Sunny Agency Landing Page</h5>
              <strong>Tech used:</strong>
              <p>React, Tailwind CSS, Framer Motion</p>
            </Detail>
            <a
              href="https://sunnyagencyworks.vercel.app/"
              rel="noreferrer"
              target="_blank"
            >
              <Button>Visit Website</Button>
            </a>
          </CardDetails>
        </Card>
        <Card>
          <Image src={easybank} alt="Easy Bank snap" />
          <CardDetails className="card-details">
            <Detail>
              <h5>Easy Bank Landing Page</h5>
              <strong>Tech used:</strong>
              <p>React, Styled Components</p>
            </Detail>
            <a
              href="https://easybankpage.vercel.app/"
              rel="noreferrer"
              target="_blank"
            >
              <Button>Visit Website</Button>
            </a>
          </CardDetails>
        </Card>
        <Card>
          <Image src={manage} alt="Manage snap" />
          <CardDetails className="card-details">
            <Detail>
              <h5>Manage Landing Page</h5>
              <strong>Tech used:</strong>
              <p>HTML, CSS, Materialize, Vanilla Javascript</p>
            </Detail>
            <a
              href="https://donlinoxd.github.io/manage/"
              rel="noreferrer"
              target="_blank"
            >
              <Button>Visit Website</Button>
            </a>
          </CardDetails>
        </Card>
        <Card>
          <Image src={blogr} alt="Blogr snap" />
          <CardDetails className="card-details">
            <Detail>
              <h5>Blogr Landing Page</h5>
              <strong>Tech used:</strong>
              <p>HTML, CSS, Vanilla Javascript</p>
            </Detail>
            <a
              href="https://donlinoxd.github.io/blogr/"
              rel="noreferrer"
              target="_blank"
            >
              <Button>Visit Website</Button>
            </a>
          </CardDetails>
        </Card>
      </Container>
    </Wrapper>
  );
};

export default Projects;

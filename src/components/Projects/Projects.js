import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Engel & Völkers"
              description="Online presence of Engel & Völkers, a leading global real estate company specializing in premium and luxury properties. The site offers a comprehensive platform for buying, selling, and renting residential and commercial real estate, yachts, and boats worldwide."
              demoLink="https://www.engelvoelkers.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Premium online jewelry marketplace"
              description="Offers a seamless and beautifully designed shopping experience for jewelry enthusiasts. The website features a curated selection of exquisite, high-quality jewelry from around the world, emphasizing luxury, authenticity, and craftsmanship"
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://myjewlex.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Rank Eats"
              description="It allows users to search for the best food options in a chosen area, vote for their favorite restaurants, and write reviews based on their experiences. The website also provides marketing tools for eatery partners to engage with customers and grow their businesses effectively."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://chefmade.dk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Introduction"
              description="This is Next.js web site to introduce personal restaurant more user-friendly. Use MERN and Tailwind CSS and based on Client's requirement, more flexible, scalable and amazing website is built"
              demoLink="https://onegreenteam.com"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Online language-learning platform"
              description="online language-learning platform focused on helping users master grammar, spelling, and syntax in the languages they are learning through direct feedback on their writing from fluent native speakers. The website offers a simple 3-step registration process to match users with appropriate native speakers who provide constructive corrections and comments on users' writing."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://chefmade.dk"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

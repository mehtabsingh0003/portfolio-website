import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/readme-img.png";
import chatify from "../../Assets/Projects/codeEditor.png";
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
              title="Music streaming"
              description="  Discover new tunes with Music Describer! Upload any track, and we'll analyze its genre, mood, and key characteristics in seconds. Perfect for finding similar songs or understanding a song's vibe before diving in."
              ghLink="https://github.com/mehtabsingh0003/project-iwp.git"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="portfolio-website"
              description="My portfolio showcases my web development skills through projects using React, Node.js, and responsive design. Each project highlights my ability to integrate APIs and create user-centric applications. It includes links to my GitHub, live demos, and my resume, reflecting my readiness for impactful development roles."
              ghLink="https://github.com/mehtabsingh0003/portfolio-website.git"             
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

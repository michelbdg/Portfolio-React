import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import artflow from "../../Assets/Projects/art-flow.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import bnb from "../../Assets/Projects/bnb.png"
import filrouge from "../../Assets/Projects/filrouge.png"
import bear from "../../Assets/Projects/bear.png"
import countrix from "../../Assets/Projects/countrix.png"

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
              imgPath={artflow}
              isBlog={false}
              title="Art-Flow"
              description="Artflow est un projet réalisé en groupe lors de la formation CDA chez Prep avenir. Cette application est une galerie d'images qui permet de voir, partager, télécharger et commenter des images."
              ghLink="https://github.com/JohanYindou/ArtFlow"
              //demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Ce portfolio a été réalisée pour une élève étudiante en école de commerce."
              ghLink="https://github.com/michelbdg/portfolio_marjory"
              //demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bnb}
              isBlog={false}
              title="BnB"
              description="Ce projet est une plateforme de réservation de chambres en BnB."
              ghLink="https://github.com/michelbdg/BnB"
              //demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={filrouge}
              isBlog={false}
              title="Filrouge"
              description="Cette réalisation constitue le projet central élaboré dans le cadre de l'évaluation DWWM en vue de l'obtention du titre professionnel de développeur web et web mobile. Il s'agit d'un site e-commerce électronique dédié à un restaurant avec un système de commande en ligne (click and collect)."
              ghLink="https://github.com/michelbdg/filRouge2"
              //demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={countrix}
              isBlog={false}
              title="Countrix"
              description="Ce projet a été conçu pendant une session de formation. Il s'agit d'une plateforme permettant de rechercher des informations sur différents pays, développé en utilisant la bibliothèque React et interagissant avec une API appelée Rest Countries."
              ghLink="https://github.com/michelbdg/countrix"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bear}
              isBlog={false}
              title="Bear Note"
              description="Ce défi de groupe implique la création d'une application de prise de notes en JavaScript sur une période de trois jours."
              ghLink="https://github.com/michelbdg/DefiCode-JS"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

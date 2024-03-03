import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut à tous, Je suis <span className="purple">Bondonga Michel-Marie </span>
            je viens de <span className="purple"> Paris, France.</span>
            <br />
              En tant que jeune développeur passionné, j'applique ma créativité et mes compétences techniques pour concevoir des solutions web novatrices.
            <br />
              Bénéficiant d'une formation solide et animé d'une volonté constante d'apprentissage,
            <br />
            <br />
              je suis prêt à contribuer activement à des projets stimulants et à évoluer au sein d'une équipe dynamique.
            <br />
              En dehors du codage, j'aime aussi faire d'autres activités ! 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Les mangas, animation japonaise
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

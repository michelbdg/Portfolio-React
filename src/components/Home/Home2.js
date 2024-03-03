import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              JE ME <span className="purple"> PRESENTE </span> 
            </h1>
            <p className="home-about-body">
            La programmation a conquis mon cœur, et j'ai acquis au moins une leçon, je crois... 🧑‍💻
              <br />
              <br />Je maîtrise les langages 
              <i>
                <b className="purple"> Javascript et Php. </b>
              </i>
              <br />
              <br />
              Mon domaine d’intérêt est la construction de nouvelles &nbsp;
              <i>
                <b className="purple">technologies et produits Web.</b>
              </i>
              <br />
              <br />
              Je suis constamment en phase d'apprentissage de nouveaux langages tels que <b className="purple">NodeJs et Laravel.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>retrouvez-moi sur</h1>
            <p>
              N’hésitez pas à  <span className="purple">communiquer </span>avec moi
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/michelbdg"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/michel-bondonga"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/michelbndg/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

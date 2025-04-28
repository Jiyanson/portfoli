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
      PERMETTEZ-MOI DE ME <span className="purple">PRÉSENTER</span>
    </h1>
    <p className="home-about-body">
      Étudiant en ingénierie logicielle passionné par le développement logiciel, le cloud computing et l'architecture des systèmes. ☁️
      <br />
      <br />
      Je maîtrise les technologies et concepts clés comme
      <i>
        <b className="purple"> Docker, Kubernetes, AWS, et les architectures microservices. </b>
      </i>
      <br />
      <br />
      Mes compétences s'articulent autour de &nbsp;
      <i>
        <b className="purple">l'automatisation des déploiements </b> et
        la conception d'infrastructures{" "}
        <b className="purple">
          scalables et sécurisées.
        </b>
      </i>
      <br />
      <br />
      Je développe également des applications
      avec <b className="purple">React et Node.js</b> tout en
      <i>
        <b className="purple">
          {" "}
          m'appuyant sur les bonnes pratiques DevOps
        </b>
      </i>
      &nbsp; comme
      <i>
        <b className="purple"> CI/CD, monitoring et infrastructure as code</b>
      </i>
      <br />
      <br />
      Curieux, rigoureux et engagé, je m'investis pleinement dans mes projets académiques et personnels. 
      Mon objectif est de contribuer à des environnements innovants où je pourrai développer mes compétences 
      techniques et évoluer vers des rôles à responsabilité.
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
            <h1>RETROUVEZ-MOI SUR</h1>
            <p>
              N'hésitez pas à me <span className="purple">contacter</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Jiyanson"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/ayoubakour"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ayoub-akour-6934a32b8/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ayoubakour"
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
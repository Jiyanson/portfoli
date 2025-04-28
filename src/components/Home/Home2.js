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
              Passionné par le DevOps et le Cloud Computing, j'ai acquis au fil des années une solide expertise dans ces domaines... ☁️
              <br />
              <br />Je maîtrise les langages et technologies comme
              <i>
                <b className="purple"> Python, Bash, Terraform, Docker et Kubernetes. </b>
              </i>
              <br />
              <br />
              Mes domaines de prédilection incluent le développement de &nbsp;
              <i>
                <b className="purple">Solutions Cloud Scalables </b> ainsi que
                l'implémentation de{" "}
                <b className="purple">
                  pipelines CI/CD automatisés.
                </b>
              </i>
              <br />
              <br />
              Je m'applique également à concevoir des architectures
              avec <b className="purple">AWS</b> et
              <i>
                <b className="purple">
                  {" "}
                  des outils d'infrastructure as code
                </b>
              </i>
              &nbsp; comme
              <i>
                <b className="purple"> Ansible et Terraform</b>
              </i>
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
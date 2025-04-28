import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je m'appelle <span className="purple">AKOUR Ayoub</span>
             je viens de <span className="purple">Ait Amira, Maroc.</span>
            <br />
            <br />
            Je suis actuellement étudiant en ingénierie informatique avec une spécialisation en DevOps et Cloud Computing.
            <br />
            <br />
            En dehors du codage, voici quelques activités que j'aime pratiquer :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Développer des projets open source
            </li>
            <li className="about-activity">
              <ImPointRight /> Apprendre de nouvelles technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager et découvrir de nouvelles cultures
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "L'innovation est la clé pour créer un impact durable !"{" "}
          </p>
          <footer className="blockquote-footer">AKOUR Ayoub</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
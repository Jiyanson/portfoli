import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import reservation from "../../Assets/Projects/reservation.png";
import gestionCours from "../../Assets/Projects/gestion-cours.png";
import geospatial from "../../Assets/Projects/geospatial.png";
import compilateur from "../../Assets/Projects/compilateur.png";
import universite from "../../Assets/Projects/universite.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets Récents</strong>
        </h1>
        <p style={{ color: "white" }}>
          Découvrez une sélection de mes réalisations techniques.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reservation}
              isBlog={false}
              title="Plateforme de Réservation en Ligne"
              description="Conception et développement d'une plateforme permettant aux utilisateurs de réserver des consultations en ligne avec des experts. Technos : React, Node.js, MongoDB. Features : calendrier interactif, paiement en ligne, notifications."
              ghLink="https://github.com/Jiyanson"
              demoLink="https://demo-consultations.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gestionCours}
              isBlog={false}
              title="Gestion de Cours en Présentiel"
              description="Plateforme complète de gestion de cours avec React frontend, API Laravel et base MySQL. Fonctionnalités : planning des cours, gestion des inscriptions, suivi pédagogique, et interface administrateur avancée."
              ghLink="https://github.com/Jiyanson"
              demoLink="https://demo-gestion-cours.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={geospatial}
              isBlog={false}
              title="Système Géospatial"
              description="Développement backend avec Spring Boot et OAuth2 pour un système d'analyse géospatiale. Intégration avec Google Earth Engine pour le traitement de données satellites et stockage dans PostgreSQL avec PostGIS."
              ghLink="https://github.com/Jiyanson"
              demoLink="https://demo-geospatial.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={compilateur}
              isBlog={false}
              title="Compilateur Pascal"
              description="Développement d'un compilateur pour le langage Pascal avec analyse lexicale et syntaxique, génération de code intermédiaire et optimisation. Réalisé en Java avec ANTLR pour l'analyse grammaticale."
              ghLink="https://github.com/Jiyanson"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={universite}
              isBlog={false}
              title="Gestion Universitaire"
              description="Application complète de gestion d'université avec modules pour les étudiants, professeurs et administration. Features : inscriptions, notes, emplois du temps, ressources pédagogiques. Développé avec React et Spring Boot."
              ghLink="https://github.com/Jiyanson"
              // demoLink="" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import cvImage from "../../Assets/cv.jpg"; // Make sure this path is correct
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Row className="justify-content-center my-3">
        <Button
          variant="primary"
          href={cvImage}
          download="AKOUR_Ayoub_CV.jpg"
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      <Row className="justify-content-center">
        <img 
          src={cvImage} 
          alt="AKOUR Ayoub Resume" 
          style={{ 
            maxWidth: width > 786 ? "70%" : "100%",
            height: "auto",
            border: "1px solid #ddd",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)"
          }} 
        />
      </Row>

      <Row className="justify-content-center my-3">
        <Button
          variant="primary"
          href={cvImage}
          download="AKOUR_Ayoub_CV.jpg"
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default ResumeNew;
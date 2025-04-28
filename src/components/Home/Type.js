import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Ingénieur DevOps / Cloud Engineer",
          "Développeur Full Stack",
          "Architecte Logiciel",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 70,
      }}
    />
  );
}

export default Type;

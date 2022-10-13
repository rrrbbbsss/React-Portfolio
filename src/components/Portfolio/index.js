import React from "react";
import Project from "../Project";
import imgQuiz from "../../assets/images/quiz.png";

function Portfolio() {
  const projects = [
    {
      name: "Simple Quiz",
      description:
        "A simple and humble coding quiz that tests basic javascript knowledge.",
      photo: imgQuiz,
      link: "https://github.com/rrrbbbsss/simple-quiz",
    },
  ];
  return (
    <div>
      {projects.map((x) => (
        <Project data={x} key={x.name}></Project>
      ))}
    </div>
  );
}

export default Portfolio;

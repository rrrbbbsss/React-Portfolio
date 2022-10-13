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
    {
      name: "Simple Quiz",
      description:
        "A simple and humble coding quiz that tests basic javascript knowledge.",
      photo: imgQuiz,
      link: "https://github.com/rrrbbbsss/simple-quiz",
    },
    {
      name: "Simple Quiz",
      description:
        "A simple and humble coding quiz that tests basic javascript knowledge.",
      photo: imgQuiz,
      link: "https://github.com/rrrbbbsss/simple-quiz",
    },
    {
      name: "Simple Quiz",
      description:
        "A simple and humble coding quiz that tests basic javascript knowledge.",
      photo: imgQuiz,
      link: "https://github.com/rrrbbbsss/simple-quiz",
    },
    {
      name: "Simple Quiz",
      description:
        "A simple and humble coding quiz that tests basic javascript knowledge.",
      photo: imgQuiz,
      link: "https://github.com/rrrbbbsss/simple-quiz",
    },
    {
      name: "Simple Quiz",
      description:
        "A simple and humble coding quiz that tests basic javascript knowledge.",
      photo: imgQuiz,
      link: "https://github.com/rrrbbbsss/simple-quiz",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-10">
      {projects.map((x) => (
        <Project data={x} key={x.name}></Project>
      ))}
    </div>
  );
}

export default Portfolio;

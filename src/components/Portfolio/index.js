import React from "react";
import Project from "../Project";
import imgQuiz from "../../assets/images/quiz.png";
import imgFeeder from "../../assets/images/feeder.png";
import imgDrunken from "../../assets/images/drunkenrfc.png";
import imgScheduler from "../../assets/images/scheduler.png";
import imgWeather from "../../assets/images/scheduler.png";
import imgBlog from "../../assets/images/blog.png";

function Portfolio() {
  const projects = [
    {
      name: "Little Feeder",
      description:
        "A barebones rss/atom feed reader. Allows you to add rss/atom feeds to track and lets you view the articles.",
      photo: imgFeeder,
      link: "https://github.com/rrrbbbsss/Little-Feeder",
    },
    {
      name: "Drunken RFC",
      description:
        "A simple and humble coding quiz that tests basic javascript knowledge.",
      photo: imgDrunken,
      link: "https://github.com/rrrbbbsss/DrunkenRFC",
    },
    {
      name: "Naive-Tech-Blog",
      description:
        "A naive tech blog that allows you to create posts and comment on them.",
      photo: imgBlog,
      link: "https://github.com/rrrbbbsss/Naive-Tech-Blog",
    },
    {
      name: "Work Day Scheduler",
      description: "A simple and humble work day scheduler.",
      photo: imgScheduler,
      link: "https://github.com/rrrbbbsss/work-day-scheduler",
    },
    {
      name: "Weather Dashboard",
      description: "A simple and humble weather dashboard.",
      photo: imgWeather,
      link: "https://github.com/rrrbbbsss/weather-dashboard",
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

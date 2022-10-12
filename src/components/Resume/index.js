import React from "react";

function Resume() {
  return (
    <div className="flex flex-col justify-center items-center">
      <article className="p-2 m-2">
        <h2 className="border m-2 p-1 text-center">Resume</h2>
        <a
          className="hover:text-amber-300"
          href="/resume.txt"
          target="_blank"
          download
        >
          Download my resume
        </a>
      </article>
      <article className="p-2 m-2">
        <h2 className="border m-2 p-1 text-center">Proficiencies</h2>
        <ul className="list-disc list-inside">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequlize</li>
          <li>MongoDB, Mongoose</li>
        </ul>
      </article>
    </div>
  );
}

export default Resume;

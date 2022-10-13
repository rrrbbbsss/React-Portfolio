import React from "react";

function Project({ data }) {
  const { name, description, photo, link } = data;
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="border flex flex-col justify-center items-center max-w-sm group hover:border-amber-300"
    >
      <img
        src={photo}
        alt={name}
        class="w-full brightness-75 group-hover:brightness-100"
      ></img>
      <h2 className="border w-full text-center group-hover:border-amber-300 group-hover:text-amber-300">
        {name}
      </h2>
      <p className="p-2 group-hover:text-amber-300">{description}</p>
    </a>
  );
}

export default Project;

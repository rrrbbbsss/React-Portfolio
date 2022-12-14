import React from "react";
import avatar from "../../assets/images/avatar.png";

function About() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={avatar} alt="avatar" width="100px" />
      <p className="m-auto max-w-md border p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nemo
        nostrum consequatur praesentium beatae. Fugit vitae quam repellendus
        quas veniam. Atque adipisci eveniet veritatis aspernatur, provident
        ratione id aut laudantium.
      </p>
    </div>
  );
}

export default About;

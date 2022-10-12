import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
function Contact() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formState);
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full max-w-xl">
        <h2 className="p-2 m-2 text-center">Contact Me</h2>
        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="border w-full"
        >
          <div className="p-2 m-2">
            <label htmlFor="name" className="block">
              Name:
            </label>
            <input
              type="text"
              name="name"
              className="text-black p-1 w-full"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div className="p-2 m-2">
            <label htmlFor="email" className="block">
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="text-black p-1 w-full"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div className="p-2 m-2">
            <label htmlFor="message" className="block">
              Message:
            </label>
            <textarea
              name="message"
              rows="3"
              className="text-black p-1 w-full"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          <div className="flex flex-col justify-center">
            <button
              className="p-2 mx-4 border hover:text-amber-300 hover:border-amber-300"
              type="submit"
            >
              Submit
            </button>
          </div>
          <div>
            <p className="text-rose-300 p-2 m-2">{errorMessage || <br></br>}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

import React from "react";

function Footer() {
  return (
    <footer className="flex bg-sky-700 text-white h-10 justify-center items-center">
      {/*dummy links*/}
      <a className="px-2 hover:text-amber-300" href="https://github.com">
        GitHub
      </a>
      <a className="px-2 hover:text-amber-300" href="https://linkedin.com">
        LinkedIn
      </a>
      <a className="px-2 hover:text-amber-300" href="https://twitter.com">
        Twitter
      </a>
    </footer>
  );
}

export default Footer;

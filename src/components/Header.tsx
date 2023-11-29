import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { RxVercelLogo } from "react-icons/rx";

const Header = () => {
  return (
    <div>
      <div className="nav-container">
        <span className="first-page-icon double-icons">
          <a
            href="https://github.com/elosis?tab=repositories"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {" "}
            <AiFillGithub />
          </a>
          <a
            href="https://vercel.com/elosis"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {" "}
            <RxVercelLogo />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Header;

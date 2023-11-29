import React from "react";

const Section = () => {
  return (
    <div className="section-overview">
      <div className="main-message">
        <div>
          <h1 className="header-section">Welcome</h1>
        </div>
        <div className="paragraph">
          <p>
            I'm Omer Elaldi who frontend developer and have been passionate
            about web development for the past year. Despite not having formal
            work experience in the field, I have dedicated myself to acquiring a
            robust skill set and hands-on expertise. My journey into web
            development began with a focus on HTML, CSS, JavaScript, where I
            developed React apps to learn this framework environment.
          </p>
        </div>
      </div>
      <div className="main-projects">
        <div>
          <h1>Projects</h1>
        </div>
        <div className="project-inner">
          <a
            href="https://vercel.com/elosis/todo-app-ts"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <p>Todo App</p>
          </a>
          <a
            href="https://vercel.com/elosis/passaport"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <p>Passaport</p>
          </a>
          <a
            href="https://vercel.com/elosis/pokemon-ts"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <p>Pokemon</p>
          </a>
          <a
            href="https://vercel.com/elosis/pokedex"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <p>Pokedex</p>
          </a>
          <a
            href="https://vercel.com/elosis/routing-ts"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {" "}
            <p>Ticketless</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section;

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
            href="https://todo-app-ts-bice.vercel.app/"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <p>Todo App</p>
          </a>
          <a
            href="https://passaport.vercel.app/"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <p>Passaport</p>
          </a>
          <a
            href="https://pokemon-ts-beige.vercel.app/"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <p>Pokemon</p>
          </a>
          <a
            href="https://pokedex-eight-green-23.vercel.app/"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <p>Pokedex</p>
          </a>
          <a
            href="https://routing-ts.vercel.app/"
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

import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects-section">
      <h1>My Projects</h1>
      <p>
        Here you can find some of my recent front-end projects, showcasing my
        work with React, CSS, and modern UI frameworks.
      </p>

      <div className="projects-grid">
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            A personal portfolio built with React and styled with CSS
            animations.
          </p>
        </div>

        <div className="project-card">
          <h3>Weather App</h3>
          <p>
            An interactive weather app using JavaScript and API integration.
          </p>
        </div>

        <div className="project-card">
          <h3>Landing Page</h3>
          <p>
            A responsive landing page built with Bootstrap and smooth scroll
            effects.
          </p>
        </div>
      </div>
    </section>
  );
}

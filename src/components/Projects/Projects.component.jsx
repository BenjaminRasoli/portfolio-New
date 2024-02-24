import React, { useEffect, useState } from "react";
import { S } from "./Project.styled";

function Projects() {
  const [projects, setProjects] = useState([]);

  async function fetchProjects() {
    const url = "https://back-end-server-node-js-5awn.vercel.app/projects";

    const respone = await fetch(url);
    const allProjects = await respone.json();
    console.log(allProjects);
    setProjects(allProjects);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <S.MainProjectsWrapper id="projects">
      <S.MainProjects>
        <p> MY WORK</p>
        <h2> Projects.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          suscipit, minus cumque eveniet asperiores, labore provident laudantium
          repudiandae ducimus iste delectus fugiat enim, vel ipsa. Delectus
          aperiam illo iure saepe? Minima culpa magnam mollitia quam alias?
          Veniam est earum inventore accusantium dignissimos. Perferendis,
          suscipit voluptas sint libero vitae eius, nesciunt
        </p>
        <S.ProjectsWrapper projects={projects}>
          {projects.map((project) => (
            <div key={project.id}>
              <S.MainImageWrapper>
                <img src={project.image} alt={project.name} />
                <a href={project.link} target="_blank">
                  <S.ImageButtonText>
                    View <br /> Project
                  </S.ImageButtonText>
                </a>
              </S.MainImageWrapper>
            </div>
          ))}
        </S.ProjectsWrapper>
      </S.MainProjects>
    </S.MainProjectsWrapper>
  );
}

export default Projects;

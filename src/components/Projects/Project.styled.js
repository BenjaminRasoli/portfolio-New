import styled from "styled-components";

const MainProjectsWrapper = styled.div`
  background-color: var(--Navy);
  padding-top: 8em;
`;

const MainProjects = styled.div`
  max-width: 1300px;
  margin: auto;

  @media (max-width: 1499px) {
    max-width: 850px;
  }

  @media (max-width: 984px) {
    max-width: 470px;
  }

  @media (max-width: 500px) {
    max-width: 350px;
  }
`;

const ProjectsWrapper = styled.div`
  margin-top: 3em;
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: ${(props) => {
    const numProjects = props.projects ? props.projects.length : 0;

    if (numProjects >= 5 && (numProjects - 5) % 3 === 0) {
      return "center";
    } else {
      return "space-between";
    }
  }};

  @media (max-width: 984px) {
    justify-content: center;
  }
`;

const ImageButtonText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--Navy);
  padding: 1.3em;
  border-radius: 3em;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease-in;
  color: var(--Teal);
`;

const MainImageWrapper = styled.div`
  position: relative;
  margin-bottom: 3em;

  img {
    width: 25em;
    border: 0.3em solid var(--Navy);
    filter: brightness(60%);
    transition: 0.3s ease-in-out;
  }

  @media (max-width: 500px) {
    img {
      width: 21em;
    }
  }

  &:hover img {
    scale: 1.05;
    filter: brightness(120%);
  }

  &:hover ${ImageButtonText} {
    opacity: 1;
  }
`;

export const S = {
  MainProjectsWrapper,
  MainProjects,
  ProjectsWrapper,
  ImageButtonText,
  MainImageWrapper,
};

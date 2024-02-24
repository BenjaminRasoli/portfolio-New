import styled from "styled-components";

const MainIntroductionWrapper = styled.div`
  background-color: var(--Navy);
  padding-top: 8em;
`;

const MainIntroduction = styled.div`
  max-width: 1300px;
  margin: auto;
  color: var(--White);

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

const TextModelWrapper = styled.div`
  height: 8em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1499px) {
    flex-direction: column;
    height: auto;
  }
`;

const TextModel = styled.div`
  text-align: center;
  padding-top: 5em;
`;

const TiltMainWrapper = styled.div`
  padding-top: 8em;
  padding-bottom: 5em;
`;

const TiltCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1499px) {
    gap: 5em;
    justify-content: space-between;
  }

  @media (max-width: 984px) {
    justify-content: center;
  }
`;

const TiltCard = styled.div`
  color: var(--White);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--Teal);
  width: 18em;
  height: 20em;
  box-shadow: 0 0 1em rgba(255, 255, 255, 0.5);
  border: 0.2em solid var(--Navy);
  border-radius: 2em;
  border-image-slice: 1;

  @media (max-width: 1499px) {
    width: 20em;
  }

  img {
    width: 5em;
  }
`;

export const S = {
  MainIntroductionWrapper,
  MainIntroduction,
  TextModelWrapper,
  TextModel,
  TiltMainWrapper,
  TiltCardContainer,
  TiltCard,
};

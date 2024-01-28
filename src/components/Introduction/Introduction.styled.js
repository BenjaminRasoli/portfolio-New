import styled from "styled-components";

const MainIntroductionWrapper = styled.div`
  background-color: var(--Navy);
  padding-top: 10em;
  padding-bottom: 10em;
`;

const MainIntroduction = styled.div`
  max-width: 1500px;
  margin: auto;
  color: var(--White);

  h1 {
    font-size: 3em;
    color: var(--Teal);
  }

  h3 {
    max-width: 55em;
    padding-top: 2em;
  }

  @media (max-width: 1499px) {
    max-width: 985px;
  }

  @media (max-width: 984px) {
    max-width: 470px;
  }

  @media (max-width: 500px) {
    max-width: 350px;
  }
`;

const TextModelWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1499px) {
    flex-direction: column;
  }
`;

const TextModel = styled.div`
  text-align: center;

  @media (max-width: 1499px) {
    padding-top: 3em;
  }

  h2 {
    color: var(--Teal);
  }
`;

const TiltMainWrapper = styled.div`
  padding-top: 10em;
  padding-bottom: 5em;
`;

const TiltCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1499px) {
    justify-content: center;
    gap: 5em;
  }
`;

const TiltCard = styled.div`
  color: var(--White);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--Teal);
  width: 20em;
  height: 20em;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  border: 2px solid var(--Navy);
  border-radius: 2em;
  border-image-slice: 1;

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

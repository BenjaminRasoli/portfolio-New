import styled from "styled-components";

const MainWorkWrapper = styled.div`
  background-color: var(--Navy);
  padding-top: 8em;
`;

const MainWork = styled.div`
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

const TimeLine = styled.div`
  padding-top: 5em;
`;

export const S = {
  MainWorkWrapper,
  MainWork,
  TimeLine,
};

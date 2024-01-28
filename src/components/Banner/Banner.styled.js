import styled from "styled-components";

const MainBannerWrapper = styled.div`
  background-color: var(--Teal);
  position: relative;

  z-index: -2;
`;

const MainBanner = styled.div`
  max-width: 1500px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 5em;
  padding-bottom: 5em;
  color: var(--White);

  @media (max-width: 1499px) {
    max-width: 985px;
  }

  @media (max-width: 984px) {
    max-width: 470px;
    flex-direction: column;
  }

  @media (max-width: 500px) {
    max-width: 350px;
  }
`;

const BannerMainTextWrapper = styled.div``;

const BannerMainText = styled.h1`
  color: var(--Navy);
`;

const BannerSecondText = styled.h3`
  padding-top: 0.5em;
  max-width: 30em;
  font-size: 25px;

  @media (max-width: 1499px) {
    padding-top: 4em;
  }
`;

const BannerImage = styled.div`
  img {
    width: 400px;
    border: 10px solid var(--Navy);
    border-radius: 50%;
  }

  @media (max-width: 984px) {
    img {
      width: 300px;
      margin-top: 3em;
    }
  }
`;

export const S = {
  MainBannerWrapper,
  MainBanner,
  BannerMainTextWrapper,
  BannerMainText,
  BannerSecondText,
  BannerImage,
};

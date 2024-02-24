import styled from "styled-components";

const MainBannerWrapper = styled.div`
  background-color: var(--Teal);
  position: relative;

  z-index: -2;
`;

const MainBanner = styled.div`
  max-width: 1300px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 7em;
  padding-bottom: 7em;
  color: var(--White);

  @media (max-width: 1499px) {
    max-width: 850px;
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

const BannerMainText = styled.div`
  @media (max-width: 1499px) {
    padding-top: 5.1em;
  }
`;

const BannerImage = styled.div`
  img {
    width: 20em;
    border: 0.7em solid var(--Navy);
    border-radius: 50%;
  }

  @media (max-width: 984px) {
    img {
      width: 15em;
      margin-top: 3em;
    }
  }
`;

export const S = {
  MainBannerWrapper,
  MainBanner,
  BannerMainTextWrapper,
  BannerMainText,
  BannerImage,
};

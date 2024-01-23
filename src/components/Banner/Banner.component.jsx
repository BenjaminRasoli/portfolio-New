import React from "react";
import TextTransition, { presets } from "react-text-transition";
import { S } from "./Banner.styled";
import Placeholder from "./Placeholder-Man.jpg";
import BannerBackground from "../BannerBackground/BannerBackground.component";

const TEXTS = ["Frontend Developer", "Web Developer"];

function Banner() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <S.MainBannerWrapper>
      <S.MainBanner>
        <S.BannerMainTextWrapper>
          <h1>
            Hello my name is Benjamin. I'am
            <TextTransition springConfig={presets.default}>
              <S.BannerMainText>{TEXTS[index % TEXTS.length]}</S.BannerMainText>
            </TextTransition>
          </h1>
          <S.BannerSecondText>
            I specialize in creating robust and scalable frontend solutions that
            deliver exceptional user experiences
          </S.BannerSecondText>
        </S.BannerMainTextWrapper>
        <S.BannerImage>
          <img src={Placeholder} alt="Place holder man" />
        </S.BannerImage>
      </S.MainBanner>
      <BannerBackground />
    </S.MainBannerWrapper>
  );
}

export default Banner;

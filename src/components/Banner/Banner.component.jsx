import React from "react";
import TextTransition, { presets } from "react-text-transition";
import Placeholder from "../../assets/Placeholder-Man.jpg";
import BannerBackground from "./BannerBackground/BannerBackground.component";
import { S } from "./Banner.styled";

const TEXTS = ["Frontend Developer", "Backend Developer"];

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
          <h3>Hello my name is Benjamin. I'am a</h3>
          <TextTransition springConfig={presets.default}>
            <h1>{TEXTS[index % TEXTS.length]}</h1>
          </TextTransition>
          <S.BannerMainText>
            <h3>
              I specialize in creating robust and scalable frontend solutions
              that deliver exceptional user experiences
            </h3>
          </S.BannerMainText>
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

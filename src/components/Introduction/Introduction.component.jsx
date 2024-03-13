import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import Model from "../Canvas/Canvas.component";
import { characteristics } from "../../constans";
import { S } from "./Introduction.styled";
import "aos/dist/aos.css";
import AOS from "aos";

function Introduction() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window);
    AOS.init();
  }, []);

  return (
    <S.MainIntroductionWrapper id="about">
      <S.MainIntroduction>
        <p> INTRODUCTION</p>
        <h2> Overview.</h2>

        <S.TextModelWrapper>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            suscipit, minus cumque eveniet asperiores, labore provident
            laudantium repudiandae ducimus iste delectus fugiat enim, vel ipsa.
            Delectus aperiam illo iure saepe? Minima culpa magnam mollitia quam
            alias? Veniam est earum inventore accusantium dignissimos.
            Perferendis, suscipit voluptas sint libero vitae eius, nesciunt
          </p>
          <S.TextModel>
            <Model />
            <h2> Spin me</h2>
          </S.TextModel>
        </S.TextModelWrapper>
        {isTouchDevice ? (
          <S.TiltMainWrapper>
            <S.TiltCardContainer>
              {characteristics.map((characteristic) => (
                <S.TiltCard key={characteristic.id}>
                  <img src={characteristic.image} alt="web-development" />
                  <h4>{characteristic.title}</h4>
                </S.TiltCard>
              ))}
            </S.TiltCardContainer>
          </S.TiltMainWrapper>
        ) : (
          <S.TiltMainWrapper>
            <S.TiltCardContainer>
              {characteristics.map((characteristic) => (
                <Tilt key={characteristic.id}>
                  <S.TiltCard
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-duration="1000"
                    data-aos-once="true"
                  >
                    <img src={characteristic.image} alt="web-development" />
                    <h4>{characteristic.title}</h4>
                  </S.TiltCard>
                </Tilt>
              ))}
            </S.TiltCardContainer>
          </S.TiltMainWrapper>
        )}
      </S.MainIntroduction>
    </S.MainIntroductionWrapper>
  );
}

export default Introduction;

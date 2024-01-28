import React, { useEffect, useState } from "react";
import { S } from "./Introduction.styled";
import { Tilt } from "react-tilt";
import { characteristics } from "../../constans";
import Model from "../Canvas/Canvas.component";

function Introduction() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window);
  }, []);

  return (
    <S.MainIntroductionWrapper id="about">
      <S.MainIntroduction>
        <h2> INTRODUCTION</h2>
        <h1> Overview.</h1>

        <S.TextModelWrapper>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            suscipit, minus cumque eveniet asperiores, labore provident
            laudantium repudiandae ducimus iste delectus fugiat enim, vel ipsa.
            Delectus aperiam illo iure saepe? Minima culpa magnam mollitia quam
            alias? Veniam est earum inventore accusantium dignissimos.
            Perferendis, suscipit voluptas sint libero vitae eius, nesciunt
          </h3>
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
                  <h2>{characteristic.title}</h2>
                </S.TiltCard>
              ))}
            </S.TiltCardContainer>
          </S.TiltMainWrapper>
        ) : (
          <S.TiltMainWrapper>
            <S.TiltCardContainer>
              {characteristics.map((characteristic, index) => (
                <Tilt key={index}>
                  <S.TiltCard>
                    <img src={characteristic.image} alt="web-development" />
                    <h2>{characteristic.title}</h2>
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

import React, { useEffect, useState } from "react";
import { S } from "./Works.styled";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Works({ work }) {
  return (
    <>
      <VerticalTimelineElement
        contentStyle={{ background: "var(--Teal)", color: "var(--White)" }}
        contentArrowStyle={{ borderRight: "7px solid var(--Teal)" }}
        date={work.date}
        iconStyle={{ background: "var(--Teal)", color: "#fff" }}
        icon={
          <img
            src={work.image}
            alt={work.title}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "2em",
            }}
          />
        }
      >
        <h3>{work.title}</h3>
        <h4>{work.location} </h4>
        <p>{work.summary}</p>
      </VerticalTimelineElement>
    </>
  );
}

function Experience() {
  const [works, setWorks] = useState([]);

  async function fetchWorks() {
    const url = `${process.env.REACT_APP_WORKSAPI}`;

    try {
      const response = await fetch(url);
      const allWorks = await response.json();
      setWorks(allWorks);
    } catch (error) {
      console.error("Error fetching works:", error);
    }
  }

  useEffect(() => {
    fetchWorks();
  }, []);

  return (
    <>
      <S.MainWorkWrapper id="work">
        <S.MainWork>
          <p>Work & Education</p>
          <h2>MY JOURNEY</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            suscipit, minus cumque eveniet asperiores, labore provident
            laudantium repudiandae ducimus iste delectus fugiat enim, vel ipsa.
            Delectus aperiam illo iure saepe? Minima culpa magnam mollitia quam
            alias? Veniam est earum inventore accusantium dignissimos.
            Perferendis, suscipit voluptas sint libero vitae eius, nesciunt
          </p>
          <S.TimeLine>
            <VerticalTimeline lineColor={"var(--White)"}>
              {works.map((work) => (
                <Works key={work.id} work={work} />
              ))}
            </VerticalTimeline>
          </S.TimeLine>
        </S.MainWork>
      </S.MainWorkWrapper>
    </>
  );
}

export default Experience;

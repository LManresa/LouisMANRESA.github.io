import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Louis Manresa</span>{" "}
            from <span className="purple">Nice, France</span>.
            <br />
            I’m currently a{" "}
            <span className="purple">Student</span> at{" "}
            <span className="purple">Lancaster University Leipzig</span>.
            <br />I hold an BA (Hons) in{" "}
            <span className="purple">Business Management and Languages & Cultures</span> from{" "}
            <span className="purple">the University of Sheffield</span>.
            <br />
            <br />
            My centres of interest are:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning languages 🗣️
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Programing 🧑‍🎓
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling around the World 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> Climbing 🧗‍♂️
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A computer would deserve to be called intelligent if it could deceive a human into believing that it was human."{" "}
          </p>
          <footer className="blockquote-footer">Alan Turing</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

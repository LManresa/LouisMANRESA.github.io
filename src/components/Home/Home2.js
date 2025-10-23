import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Driven software developer and current computer science student, passionate about crafting reliable and efficient solutions to real-world problems. Experienced in C, Python, Java, and Assembly (MARS), with hands-on experience contributing to international teams at Air France and across multiple independent and team-based projects. Known for strong analytical skills, adaptability, and a proactive approach to learning new technologies.
My background combines technical excellence with a truly global mindset—shaped by studying and working in five countries and fluent in more than six languages. Notable projects include developing a full 2D game in assembly language and optimising cross-functional workflows for large organisations. My experiences in both business and engineering help me bridge the gap between user needs and technical solutions.
Currently seeking software development opportunities where I can contribute to impactful projects, learn from talented teams, and continue growing as a developer. Open to connecting with professionals and organisations aligned with innovation and global collaboration.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  C, Python, and Java{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  Cybersecurity, Networking, and AI.{" "}
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

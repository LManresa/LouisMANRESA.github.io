import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Windows from "../../Assets/TechIcons/Windows.png";
import Debian from "../../Assets/TechIcons/Debian.png";
import Ubuntu from "../../Assets/TechIcons/Ubuntu.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Mac Os</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={Windows} alt="Windows" className="tech-icon-images" />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Debian} alt="Debian" className="tech-icon-images" />
        <div className="tech-icons-text">Debian</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={Ubuntu} alt="Ubuntu" className="tech-icon-images" />
        <div className="tech-icons-text">Ubuntu</div>
      </Col>
    </Row>
  );
}

export default Toolstack;

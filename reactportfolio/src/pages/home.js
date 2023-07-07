import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import html5img from "../assets/images/html5.png";
import cssimg from "../assets/images/css.png";
import javascriptimg from "../assets/images/javascript.png";
import dadJokesimg from "../assets/images/image_720.png";
import vibeTribeimg from "../assets/images/vibetribe.png";
import selfie from '../assets/images/selfie.png';
import reactimg from '../assets/images/pngwing.com.png';

const Home = () => {
  return (
    <Container>
      <div className="about-me">Hi, I'm Jacob and this is my portfolio</div>
      <div className="myself">
          <img src={selfie} alt="This is where my selfie would be!" />
      </div>

      <h3>Current skills</h3>
      <Container>
        <Row>
          <Col xs={6} md={3}>
            <Card>
              Html
              <br />
              <img src={html5img} alt="HTML5" />
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card>
              Css
              <br />
              <img src={cssimg} alt="CSS" />
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card>
              Javascript
              <br />
              <img src={javascriptimg} alt="Javascript" />
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card>
              React
              <br />
              <img src={reactimg} alt="React" />
            </Card>
          </Col>
        </Row>
      </Container>

      <h1 className="text-center">My projects</h1>
      <Row>
        <Col xs={12} md={6}>
          <Card className="title">
            <strong> DadJokes</strong>
            <br />
            <Link to="https://jacobrubino.github.io/DadJokes/" target="_blank">
              <img src={dadJokesimg} alt="DADJOKES" />
            </Link>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card className="title">
            <strong> VibeTribe</strong>
            <br />
            <Link to="https://cryptic-basin-19014.herokuapp.com" target="_blank">
              <img src={vibeTribeimg} alt="VIBETRIBE" />
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
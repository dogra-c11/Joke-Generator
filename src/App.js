import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import JokeGenerator from "./JokeGenerator";

function App() {
  return (
    <Container>
      <Row className="text-center">
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Jokes</h1>
          <Jumbotron className="jb">
            <JokeGenerator></JokeGenerator>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

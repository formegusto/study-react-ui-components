import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ColPropsComponent() {
  return (
    <>
      <Container>
        <Row>
          <Col xs>First, but unordered</Col>
          <Col xs={{ order: 12 }}>Second, but last</Col>
          <Col xs={{ order: 1 }}>Third, but second</Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={{ order: "last" }}>First, but last</Col>
          <Col xs>Second, but unordered</Col>
          <Col xs={{ order: "first" }}>Third, but first</Col>
        </Row>
      </Container>
    </>
  );
}

export default ColPropsComponent;

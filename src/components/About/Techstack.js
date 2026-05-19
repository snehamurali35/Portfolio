import React from "react";
import { Col, Row } from "react-bootstrap";


function Techstack() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
        gap: "12px",
      }}
    >
      {[
        "Java",
        "JavaScript",
        "TypeScript",
        "Python",
        "React",
        "Node.js",
        "SQL",
        "AWS",
        "DynamoDB",
        "Firebase",
        "Git",
        "Dart",
        "Flutter",
        "Pandas",
        "Scikit-learn",
        "C",
        "C++",
      ].map((skill, index) => (
        <Col
          key={index}
          xs={4}
          md={2}
          className="tech-icons"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="tech-icons-text">{skill}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;

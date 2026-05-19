import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Sneha Murali </span>{" "}
            from <span className="purple">Seattle, Washington</span>.
            <br />
            I’m currently a junior at Univeristy of Washington
            {/* <span className="purple">Software Developer</span> at{" "} */}
            {/* <span className="purple">Juspay</span>. */}
            <br />studying computer science!
            {/* <span className="purple">Mathematics and Computing</span> from{" "} */}
            {/* <span className="purple">BIT Mesra</span>. */}
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Going on walks 
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling 
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Stephen King Novels!
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that uplift the community around you!"{" "}
          </p>
          <footer className="blockquote-footer">Sneha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

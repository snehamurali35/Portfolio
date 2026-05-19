import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
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
            I’m a Computer Science student at the University of Washington with a minor in Data Science, passionate about building software that solves meaningful, real-world problems. My interests span research, full-stack development, and feature engineering, with a focus on building impactful products and translating ideas into scalable, user-centered solutions. I enjoy working across both technical depth and product implementation — from developing backend systems and user-facing features to using data and computational methods to support research and discovery.              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Java, Python, JavaScript{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  building scalable systems, solving challenging technical problems, and creating technology that makes a meaningful impact.{" "}
                </b>
              </i>
              <br />
              <br />
              {/* Whenever possible, I love building projects with */}
              {/* <b className="purple"> Node.js </b> and modern frameworks like{" "} */}
              {/* <i> */}
                {/* <b className="purple">React.js</b> and{" "} */}
                {/* <b className="purple">Next.js</b>. */}
              {/* </i> */}
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

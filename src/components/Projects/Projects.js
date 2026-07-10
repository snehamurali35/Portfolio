import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="NG911 SMS Provisioning Database Migration - Comtech Intern"
              description="Transferred and validated SMS provisioning database schemas from MySQL to PostgreSQL for a Next Generation 911 system. Used DBeaver and SQL scripting to migrate provisioning tables, verify primary keys, foreign keys, indexes, and schema compatibility, and support modernization of mission-critical emergency communications software."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="NG911 PSAP and ESInet UI Feature - Comtech Intern"
              description="After hearing end users describe difficulties identifying PSAPs and ESInets during a stakeholder meeting, I independently proposed and implemented a full-stack solution to improve the NG911 SMS provisioning interface. Added backend query support and API changes to retrieve PSAP names and ESInet display names, integrated the new data into Angular frontend components, and worked with my manager and engineering team to review, test, and validate the feature before deployment."            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="PSAP Contact Export Tool - Comtech Intern"
              description="Worked on export tool logic to fetch PSAP contact list data from Splunk Cloud and store the results into the WTP database. Supported backend data retrieval, transformation, and persistence workflows for emergency communications system data."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="FridgeFinder"
              description="Contributed to backend infrastructure for a production community fridge platform serving NYC. Built scalable AWS Lambda APIs and DynamoDB-backed systems to aggregate and classify real-time fridge status reports. Designed a user rewards system with concurrency-safe updates, validation logic, and robust testing using Moto."
              ghLink="https://github.com/FridgeFinder/CFM_User_Rewards"
              demoLink="https://fridgefinder.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="UW School of Medicine Service Learning Platform"
              description="Developed and maintained Firebase/Firestore-backed features for the UW School of Medicine Service Learning website, including volunteer sign-up workflows, attendee tracking, and admin dashboards. Built role-based authorization systems and backend functionality to aggregate and display participant attendance data for admin-facing tools."
              ghLink="https://github.com/slweb-uw/volunteer-site"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Buckley Lab Biodiversity Research"
              description="Built Python-based research pipelines to retrieve butterfly specimen images and metadata from museum biodiversity APIs including iDigBio, GBIF, Smithsonian Open Access, and CKAN datasets. Developed automated workflows for metadata parsing, image downloading, and large-scale biological image analysis."
              ghLink="https://github.com/trenchproject/wing-trait-full-pipeline"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
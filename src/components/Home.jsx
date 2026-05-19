import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeatureCard from "./FeatureCard";

const features = [
  { title: "Analog Clock", path: "/analog-clock" },
  { title: "Data Table", path: "/data-table" },
  { title: "File System", path: "/file-system" },
  { title: "Modal", path: "/modal" },
  { title: "Hierarchical Checkbox", path: "/checkbox" },
  { title: "Progress Bar", path: "/progress-bar" },
  { title: "Star Rating", path: "/star-rating" },
  { title: "Traffic Light", path: "/traffic-light" },
  { title: "Job Board", path: "/jobBoard" },
  { title: "Stop Watch", path: "/stop-watch" },
  { title: "Tic Tac Toe", path: "/tictac" },
  { title: "Whack A Mole", path: "/whackAMole" },
  { title: "Transfer List", path: "/transferList" },
  { title: "Auto Complete", path: "/autoComplete" },
  { title: "Todo List", path: "/todoList" },
  { title: "Image Carousel", path: "/imageCarousel" },
  { title: "Counter With History", path: "/counter" },
];

const Home = () => {
  return (
    <Container fluid className="py-5 px-4">
      <h2 className="mb-4 fw-bold">Frontend Components Playground</h2>

      <Row className="g-4">
        {features.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <FeatureCard title={item.title} path={item.path} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
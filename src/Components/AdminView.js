import React from "react";
import { Container } from "react-bootstrap";

export default function AdminView() {
  return (
    <Container
      className="d-flex align-items-center"
      align="center"
      style={{
        background: "white",
        minHeight: "100vh",
        backgroundImage: 'url("ramadan-background.avif")',
      }}
    >
      this the reservations page.
    </Container>
  );
}

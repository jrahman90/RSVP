import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div align="center" style={{ minHeight: "100vh", color: "white" }}>
      <img src="duck.gif" alt="" />
      <div>You're wandering off....</div>
      <Link to={"/"}>Return Home</Link>
    </div>
  );
}

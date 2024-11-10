import React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.querySelector(".app"));
root.render(
  <>
    <Heading />
  </>
);

function Heading() {
  const styles = {
    color: "red",
    fontweight: "normal",
  };

  return (
    <div>
      <h1 style={styles}>hi</h1>
      <h3> Today's date is {new Date().toLocaleDateString()}</h3>
    </div>
  );
}

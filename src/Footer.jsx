import { useState } from "react";
import Navigation from "./Navigation";

export default function Footer(props) {
  const [showLinks, setShowLinks] = useState(false);
  const [count, setCount] = useState(0);

  const copyrightText = "©Copyright 2023. All rights reserved by Batman.";
  return (
    <footer>
      <button onClick={() => setShowLinks((prevState) => !prevState)}>
        Toggle links
      </button>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount((prevState) => prevState + 1);
        }}>
        +
      </button>
      <p>{copyrightText}</p>
      {showLinks ? <Navigation links={props.links}></Navigation> : null}
    </footer>
  );
}

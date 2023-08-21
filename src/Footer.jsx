import Navigation from "./Navigation";

export default function Footer(props) {
  const copyrightText = "©Copyright 2023. All rights reserved by Batman.";
  return (
    <footer>
      <p>{copyrightText}</p>
      <Navigation links={props.links}></Navigation>
    </footer>
  );
}

import { useState } from "react";
import "./App.css";
import Header from "./Header";
import MainComponent from "./MainComponent";
import Footer from "./Footer";
import Navigation from "./Navigation";

function App() {
  let navLinks = [
    { name: "Home", url: "home" },
    { name: "About", url: "about" },
    { name: "Contact", url: "contact" },
  ];

  return (
    <>
      <Navigation links={navLinks}></Navigation>
      <Header></Header>
      <MainComponent></MainComponent>
      <Footer links={navLinks}></Footer>
    </>
  );
}

export default App;

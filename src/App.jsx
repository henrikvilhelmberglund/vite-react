import { useState } from "react";
import "./App.css";
import Header from "./Header";
import MainComponent from "./MainComponent";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Profile from "./components/Profile";

function App() {
  // const darkMode = false;
  const [darkMode, setDarkMode] = useState(false);
  const [showProfiles, setShowProfiles] = useState(true);

  let navLinks = [
    { name: "Home", url: "home" },
    { name: "About", url: "about" },
    { name: "Contact", url: "contact" },
  ];

  const persons = [
    {
      firstName: "Henrik",
      lastName: "Berglund",
      age: "35",
      hobby: "Playing guitar",
    },
    {
      firstName: "Bat",
      lastName: "Man",
      age: "45",
      hobby: "Being a super hero",
    },
    {
      firstName: "Super",
      lastName: "Man",
      age: "25",
      hobby: "Feeling super",
    },
    {
      firstName: "Mr",
      lastName: "Duck",
      age: "20",
      hobby: "Eating bread",
    },
    {
      firstName: "Java",
      lastName: "Script",
      age: "50",
      hobby: "Programming",
    },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        // inline styling
        style={{ border: "2px solid black" }}
        className="dark:bg-black dark:text-white">
        <Navigation links={navLinks}></Navigation>
        <Header></Header>
        <MainComponent></MainComponent>
        <Footer links={navLinks}></Footer>

        {/* short circuit && */}
        {showProfiles &&
          persons.map((person) => (
            // pass object as prop
            // <Profile profile={person}></Profile>

            // spread props
            <Profile {...person}></Profile>
          ))}
        <button onClick={() => setDarkMode((prevState) => !prevState)}>
          Toggle dark mode
        </button>
        <button onClick={() => setShowProfiles((prevState) => !prevState)}>
          {showProfiles ? "Hide profiles" : "Show profiles"}
        </button>
      </div>
    </div>
  );
}

export default App;

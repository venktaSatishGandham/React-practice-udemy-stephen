import "./App.css";

import { useState } from "react";
import ShowImage from "./components/ShowImage";

function getRandomAnimals() {
  const animals1 = ["cat", "dog", "cow", "bird", "horse"];
  const index = Math.floor(Math.random() * animals1.length);
  return animals1[index];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimals()]);
  };

  const renderList = animals.map((eachAnimal, index) => (
    <ShowImage type={eachAnimal} key={index} />
  ));

  return (
    <div className="app-container">
      <button type="button" className="app-button" onClick={handleClick}>
        Add Animal
      </button>
      <div className="animals-list">{renderList}</div>
    </div>
  );
}

export default App;

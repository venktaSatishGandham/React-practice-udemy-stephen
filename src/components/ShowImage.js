import React, { useState } from "react";
import "./ShowImage.css";
import cat from "../svg/cat.svg";
import dog from "../svg/dog.svg";
import cow from "../svg/cow.svg";
import bird from "../svg/bird.svg";
import horse from "../svg/horse.svg";
import heart from "../svg/heart.svg";

const svgMap = { cat, dog, cow, horse, bird };
export default function ShowImage({ type }) {
  const [clicks, setClicks] = useState(0);
  const handleClickLove = () => {
    console.count("hi");
    setClicks((prev) => prev + 1);
  };
  return (
    <div className="animal-show" onClick={handleClickLove}>
      <img
        alt="animals"
        className="animal"
        src={svgMap[type]}
        style={{ height: "160px", width: "100px" }}
      />
      <img
        className="heart"
        alt="Heart"
        src={heart}
        style={{ width: 30 + 10 * clicks + "px" }}
      />
    </div>
  );
}

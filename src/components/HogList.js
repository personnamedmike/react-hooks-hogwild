import React from "react";
import App from "./App";
import HogCard from "./HogCard";

function HogList({ hogs, isGreased }) {
  const filteredPigs = () => {
    if (isGreased) {
      return hogs.filter((hog) => hog.greased);
    } else {
      return hogs;
    }
    console.log(filteredPigs);
  };

  return (
    <ul className="cards">
      {filteredPigs().map((hog) => (
        <HogCard key={hog.id} hog={hog} />
      ))}
    </ul>
  );
}

export default HogList;

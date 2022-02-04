import React, { useState } from "react";

function HogCard({ hog }) {
  //   console.log(hog.name);
  const [clicked, setClicked] = useState(false);

  function toggleSetClicked() {
    return setClicked(!clicked);
  }

  return (
    <li className="card">
      <img src={hog.image} alt={"hog image"} />
      <h4 onClick={toggleSetClicked}> {hog.name}</h4>
      <h4>{clicked ? hog.specialty : null}</h4>
      <h4>{clicked ? hog.weight : null}</h4>
      <h4>{clicked ? hog.greased : null}</h4>
      <h4>{clicked ? hog["highest medal achieved"] : null}</h4>
    </li>
  );
}

export default HogCard;

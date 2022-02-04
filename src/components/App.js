import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";

function App() {
  const [isGreased, setIsGreased] = useState(false);
  const [sortBy, setSortBy] = useState("none");

  function toggleSetIsGreased(e) {
    setIsGreased(e.target.checked);
  }

  function chooseSetSortBy(e) {
    setSortBy(e.target.value);
  }

  return (
    <div className="App">
      <Nav />
      <span>Search for greased? </span>
      <input
        onChange={toggleSetIsGreased}
        type="checkbox"
        checked={isGreased}
      />
      <div>
        <span>Sort in ascending order by: </span>

        <select onChange={chooseSetSortBy}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>

      <HogList isGreased={isGreased} hogs={hogs} />
    </div>
  );
}

export default App;

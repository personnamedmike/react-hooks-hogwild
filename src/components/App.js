import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";

function App() {
  const [isGreased, setIsGreased] = useState(false);

  function toggleSetIsGreased(e) {
    setIsGreased(e.target.checked);
    console.log(isGreased);
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
      <HogList isGreased={isGreased} hogs={hogs} />
    </div>
  );
}

export default App;

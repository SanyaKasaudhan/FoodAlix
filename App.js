import React from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./src/components/Body/Restaurant";
import RestauratCardShimmer from "./src/components/Body/RestauratCardShimmer";
import Navbar from "./src/components/Header/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <RestauratCardShimmer />
      <Restaurant/>

    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App

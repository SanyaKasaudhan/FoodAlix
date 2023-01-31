import React from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./src/components/Header/Body/Restaurant";
import Restaurants from "./src/components/Header/Body/Restaurants";
import RestauratCardShimmer from "./src/components/Header/Body/RestauratCardShimmer";
import Navbar from "./src/components/Header/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Restaurants /> */}
      <Restaurant/>
      <RestauratCardShimmer />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App

import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="text-5xl">
      Hiii
      <Navbar />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App

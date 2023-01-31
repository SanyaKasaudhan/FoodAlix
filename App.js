import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App

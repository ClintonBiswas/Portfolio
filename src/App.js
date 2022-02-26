import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainComponent from "./Component/MainComponent";
import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  useEffect(() => {
    document.title = "Clinton-Portfolio";
  }, []);
  return (
    <div className="App">
      <MainComponent />
    </div>
  );
}

export default App;

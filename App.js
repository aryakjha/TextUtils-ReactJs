// import logo from "./logo.svg";
// import { useState } from "react";
import "./App.css";
// import Alert from "./components/textUtils/Alert";
import About from "./components/textUtils/About";
import NavBar from "./components/textUtils/NavBar";
import TextForm from "./components/textUtils/TextForm";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // const [theme, setTheme] = useState("light");
  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type) => {
  //   setAlert({
  //     message: message,
  //     type: type,
  //   });
  // };

  // const themetogller = () => {
  //   setTheme(
  //     (curr) =>
  //       curr === "light"
  //         ? "dark" &&
  //           (showAlert("Dark Mode Enabled", "success"),
  //           (document.body.style.backgroundColor = "#3b3939"))
  //         : "light" && showAlert("light Mode Enabled", "success")
  //     // (document.style.backgroundColor = "white")
  //   );
  // };
  return (
    <>
      <Router>
        <NavBar title="TextUtils" about="Hello" />

        <div className="container">
          <Routes>
            <Route path="/about" element={<About />} />

            <Route path="/" element={<TextForm heading="Enter your Text" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here ");

  const handleClick = () => {
    console.log("Upper case button was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const lowerCaseclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("Handel On Change");
    setText(event.target.value);
  };

  const clearBox = () => {
    // let newText = "";

    setText("");
  };

  const copyBox = () => {
    let newText = document.getElementById("exampleFormControlTextarea1");
    newText.select();
    navigator.clipboard.writeText(newText.value);

    alert("Copied");
  };

  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-4" onClick={handleClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-success mx-4" onClick={lowerCaseclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger mx-4" onClick={clearBox}>
          Clear
        </button>
        <button className="btn btn-danger mx-4" onClick={copyBox}>
          Copy
        </button>
      </div>
      <div className="container my-4">
        <h1>Your Text Summary :</h1>
        <p>
          {text.split(" ").length} words , {text.length} characters
        </p>

        <h3>Preview</h3>
        <p>{text}</p>

        <p>{0.008 * text.split(" ").length} minutes to read this.</p>
      </div>
    </>
  );
}

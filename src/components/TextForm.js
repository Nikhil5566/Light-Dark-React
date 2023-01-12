//rfc

import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was Clicked ");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("Uppercase was Clicked ");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange} //used because if we dont use it we will npt be able to change the values in the textarea
            id="myBox"
            rows="10"
            placeholder="Enter text here...."
          ></textarea>
        </div>
        <button className="btn btn-danger mx-1 " onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 " onClick={handleLoClick}>
          Convert to lowerCase
        </button>
      </div>
      <div className="container my-5">
        <h1>Text</h1>
        <p>
          Text Words: {text.split(" ").length} & {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").length} Minutes it will take to read this.
        </p>
      </div>
    </>
  );
}

import React, { useState } from "react";

export default function TextForms(props) {
  const [text, setText] = useState("");

  const clickUpHandler = () => {
    setText(text.toUpperCase());
    props.showAlert("Text changed to uppercase.", "success");
  };

  const clickLoHandler = () => {
    setText(text.toLowerCase());
    props.showAlert("Text changed to lowercase.", "success");
  };

  const clickClHandler = () => {
    setText("");
    props.showAlert("Text cleared.", "success");
  };

  const changeHandler = (event) => {
    setText(event.target.value);
  };

  // const showWords = () => {
  //   const wordsArray = text.split(" ");
  //   let count = 0;
  //   wordsArray.forEach((element) => {
  //     if (element !== "") count++;
  //   });
  //   return count;
  // };

  return (
    <div
      className="container my-3"
      data-bs-theme={`${props.mode === "light" ? "light" : "dark"}`}
    >
      <h1>{props.heading}</h1>
      <textarea
        className="form-control"
        style={{
          background: props.mode === "light" ? "white" : "#4a5b6c",
          color: props.mode === "light" ? "grey" : "white",
        }}
        id="exampleFormControlTextarea1"
        rows="8"
        value={text}
        onChange={changeHandler}
        placeholder="Enter text here..."
      ></textarea>
      <button disabled={text.length===0} className="btn btn-primary my-2 me-3" onClick={clickUpHandler}>
        UpperCase
      </button>
      <button disabled={text.length===0} className="btn btn-primary my-2 me-3" onClick={clickLoHandler}>
        LowerCase
      </button>
      <button disabled={text.length===0} className="btn btn-primary my-2 " onClick={clickClHandler}>
        Clear
      </button>
      <h2>Text Summary</h2>
      <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
        {/* {showWords()} words and {text.length} letters */}
        {text.split(" ").filter(element => element.length !== 0 ).length} words and {text.length} letters
      </p>
    </div>
  );
}

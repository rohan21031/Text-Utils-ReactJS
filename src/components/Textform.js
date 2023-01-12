import React, { useState } from 'react'

export default function Textform(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
  }

  const handleLoClick = ()=>{
    // console.log("Lowercase was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
  }

  const clearText = ()=>{
    // console.log("cleartext was clicked");
    let newtext = ("");
    setText(newtext);
  }

  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }

  const [text,setText]=useState('');

  return (
    <>
    <div>
      <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} id="myBox" onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-primary my-3" onClick={handleUpClick} data-bs-toggle="button">Convert to Uppercase</button>
        <button type="button" className="btn btn-primary mx-3 my-3" onClick={handleLoClick} data-bs-toggle="button">Convert to Lowercase</button>
        <button type="button" className="btn btn-primary mx-3 my-3" onClick={clearText} data-bs-toggle="button">Clear Text</button>
  </div>
  <div className='container'>
    <h3>Your Text Summary</h3>
    <p>{text.split(" ").length} words and {text.length} charcters</p>
    <p>{0.008 * text.split(" ").length} minutes to read</p>
    <h4>Preview</h4>
    <p>{text.length>0?text:'Enter Something to preview it here'}</p>
  </div>
  </>
  );
}


import React, { useState } from "react";


export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpCLick = ()=>{
   // console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoCLick =()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick =()=>{
    setText('')
  }
   const handleOnChange =(event)=>{
    //console.log("On change")
    setText(event.target.value)
  }

  const handleCopy = ()=> {
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  return (
    <>
    <div className='container'>
       <h1>{props.heading}</h1>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
    </div>
      <button className="btn btn-primary" onClick={handleUpCLick}>convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoCLick}>convert to LowerCase</button>
      <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>

    </div>
    <div className='container'>
      <h1>Your text summary
      </h1>
    <p>{text.split(" ").length}words,{text.length} charaters</p>      
    <p>{0.008 * text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>   
    </div>
    </>
  )
}

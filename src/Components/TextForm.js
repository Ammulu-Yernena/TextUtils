import React, { useState } from 'react';

export default function TextForm(props) {
  const [text,setText] = useState("Enter text here");
  // setText("new text");

  const handleUpClick = ()=>{
    // console.log("Uppercase button is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  }

  const handleLoClick = ()=>{
    // console.log("Lowercase button is clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  }

  const handleclearClick = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Text is Cleared", "success");
  }

  const speak = ()=>{
    let msg = new SpeechSynthesisUtterance();
    msg.text=text;
    window.speechSynthesis.speak(msg);
  }

  const handleCopy=()=>{
    // let newtext = document.getElementById("mybox");
    // newtext.select();
    // navigator.clipboard.writeText(newtext.value);
    // document.getSelection().removeAllRanges();
    // props.showAlert("Copied to clipboard", "success");

    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  }

  const handleExtraSpaces=()=>{
    let newtext = text.split(/[ ]*/);
    setText(newtext.join(" "));
    props.showAlert("Extra spaces are removed", "success");
  }

  const handleOnChange = (event)=>{ 
    setText(event.target.value); 
  } 

  return (
    <> 
    <div className = "container" style={{color: props.mode==='dark'?'white':'black'}}> 
        <h2 className = "mb-4">{props.heading}</h2> 
        {/* <h5>{props.own}</h5>  */}
        <div className="mb-3"> 
            <textarea className="form-control" id="mybox" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} value={text} rows="5"></textarea>  
        </div> 
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to upperCase letters</button> 
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowerCase letters</button> 
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear</button> 
        <button disabled = {text.length===0} className="btn btn-warning mx-1 my-1" onClick={speak}>Speak</button> 
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy the text</button> 
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button> 
    </div> 

    <div className = "container my-4z5it6ttg3" style={{color: props.mode==='dark'?'white':'#042743'}}> 
      <h3>Your text summary</h3> 
      {/* On fixing the error, we use the following code */}
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p> 

      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p> 
      <h3>Preview</h3> 
      <p>{text.length>0?text:"Nothing to preview"}</p> 
    </div> 
    </> 
  ) 
} 

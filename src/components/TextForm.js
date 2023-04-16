import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () =>{
  //console.log("uppercase wasclicked" + text);
  let newText = text.toUpperCase();
  setText(newText);
  }
  const handlelowerClick = () =>{
    //console.log("lowercase wasclicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    }
    const handleclearClick = () =>{
      //console.log("lowercase wasclicked" + text);
      let newText = '';
      setText(newText);
      }
  const handleOnChange= (event) =>{
    //console.log("on changed");
setText(event.target.value);
  }
  
  //Declare a new state variable
const[text,setText] = useState(' ');
//setText("new text"); //correct way to define state
  return (
    <>
    <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'black':'white'}} id="mybox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handlelowerClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear</button>
    </div>
    <div className="conatiner mb-3">
      <h1>Your word summary</h1>
      <p>{text.split(" ").length} words, and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}  Minutes</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

import React,{useState} from 'react'


export default function TextForm(props) {
   
    const handleUpClick = () =>{
        console.log("Uppercase was clicked");
       let temp=text.toUpperCase();
        setText(temp);
      //  console.log(temp);
    }

    const handleLoClick = () =>{
        console.log("Lowercase was clicked");
       let temp=text.toLowerCase();
        setText(temp);
      //  console.log(temp);
    }

     const handleUpChange = (event) =>{
       // console.log("On change triggered");
        setText(event.target.value);
    }


    const [text,setText] = useState('Enter text here11'); //hooks
        
  return (
    <>
    <div className="container">
   <h1>{props.heading} </h1>
 
  <div className="form-group">
   
    <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleUpChange}></textarea>

  </div>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>

    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p> {text.trim() ? text.trim().split(" ").length : 0} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minute read</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>

    </>
  )
}

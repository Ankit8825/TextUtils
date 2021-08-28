import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Upper case was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case","success");
    }

    const handleLoClick=()=>{
        console.log("Lower case was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case","success");
    }

    const handleclearClick=()=>{
        console.log("Clear text was clicked" + text);
        let newText="";
        setText(newText)
        props.showAlert("Text cleared","success");
    }

    const handlesubstrClick=()=>{
        console.log("Substring was clicked" + text);
        let newText=text.substring(0,4);
        setText(newText)
        props.showAlert("Sunstring formed","success");
    }

    const handleCopy=() =>{
        console.log("I am copy");
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    }

    const handleExtraSpaces=() =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space removed","success");
    }

    

    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    } 


    const [text, setText] = useState("");
    //text="New text";    //Wrong way to set the text
    //setText("Mew text");   //Correct way to set the text

    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}  </h1>
           <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
           </div>
           <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
           <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
           <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear Text</button>
           <button className="btn btn-primary mx-1" onClick={handlesubstrClick}>Substring</button>
           <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
           <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>Time required to read the above sentence :{0.008*text.split(" ").length}</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview here"}</p>
        </div>
        </>
    )
}

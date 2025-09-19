import React, {useState} from 'react'

export default function TextForm(props) {
const handleUpperClick=()=>{
    // console.log("Upper Case was clicked: " +text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","success")
}
const handleLowerClick=()=>{
    // console.log("Upper Case was clicked: " +text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success")
}
const handleClearClick=()=>{
    // console.log("Upper Case was clicked: " +text);
    let newText=" ";
    setText(newText);
    props.showAlert("Text has been cleared!","success")
}
const handleReverseClick=()=>{
    // console.log("Upper Case was clicked: " +text);
    let newText=text.split('').reverse().join('');
    setText(newText);
    props.showAlert("The text has been reversed!","success")
}
const handleExtraSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space has been handled","success")
}

const handleOnChange=(event)=>{
    // console.log("On change");
    setText(event.target.value)
};


    const [text,setText]=useState('');
    // text="Enter text here";
    // setText("new text...");

    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1"  onClick={handleUpperClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLowerClick} >Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear text</button>
<button className="btn btn-primary mx-1" onClick={handleReverseClick} >Reverse text</button>
<button className="btn btn-primary mx-1" onClick={handleExtraSpace} >Remove extra space</button>
        </div>

        <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters </p>
            <p>{0.008 *text.split(" ").length} minutes to read </p>
            <h2> Preview</h2>
            <p>{text.length>0?text:"Enter something in the text box above to preview it"}</p>
        </div>

        </>
    )
}



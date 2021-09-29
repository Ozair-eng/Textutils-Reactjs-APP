import React, {useState} from 'react'

export default function TextForm(props) {

    // const cap = (word) =>{
    //          const lower = word.toLowerCase();
    //          return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
    const handleupclick= ()=> {
        let newText = text.toUpperCase();
        setText(newText);
        // props.showAlert(cap,'text converted',"success");
        props.showAlert('text converted to Uppercase', "success");
    }
    const handlelowclick= ()=> {
        let lowcase = text.toLowerCase();
        setText(lowcase);
        
        
        props.showAlert('text converted to Lowercase', "success");
    }   
    
    const clear= ()=> {
        let cleartxt = "";
        setText(cleartxt);
        props.showAlert('field cleared', "success");
    
    }   
    const handleonChange= (event)=> {
        setText(event.target.value);
        
    }
   
    const handleCopy = () => {
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
//        navigator.clipboard.writeText(text.value);

        props.showAlert('text copied to clipboard', "success");
    }

    const handleExtraSpaces= ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))

        props.showAlert('Extra spaces removed', "success");
        
    
    }
    

    const [text ,setText] = useState('')
    //setText("new text");

    return (
    <div className="container my-5" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'#36061b':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary my-3" onClick={handleupclick}>Convert To Uppercase</button>
        <button className="btn btn-primary my-3 m-1" onClick={handlelowclick}>Convert To Lowercase</button>
        <button className="btn btn-primary my-3 m-1" onClick={clear}>Clear Field</button>
        <button className="btn btn-primary my-3 m-1" onClick={handleCopy}>CopyText</button>
        <button className="btn btn-primary my-3 m-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    
    </div>
    <div className="container">
        <h1>Your Text Summary</h1>
        <p>{text.length>0 ? text.trim().split(" ").length : 0} Words And {text.length} Characters</p>
        <p>{0.008*text.split(" ").length } Minutes To Read This</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter your text to preview here"}</p>
    
    </div>
        </div>
    ) 
}

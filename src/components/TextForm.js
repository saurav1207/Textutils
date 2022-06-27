import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log(" " + text);
        let newText = text.toUpperCase();
        setText(newText)     
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLowClick = ()=>{
        console.log(" " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }
    const handleCamelClick = ()=>{
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Converted to camelcase!","success");
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copy to clipboard!","success");
    }
    const handleClearClick = ()=>{
        let newText ='';
        setText(newText)
        props.showAlert("Text clear!","success");
    }
    const handleExtraSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed", "success");
        
    }
    // const handleLightTheme = ()=>{
    //         document.querySelector('body').style.backgroundColor = "white"
    //         document.querySelector('body').style.color = "#042743" 
    // }
    // const handleDarkTheme = ()=>{
    //         document.querySelector('body').style.backgroundColor = "#042743"
    //         document.querySelector('body').style.color = "white"   
    // }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }          

    const [text, setText] = useState('');
    // text = "new text"; // Wrong way to change the state
    // setText = ("new text"); // Correct way to change the state


    return (
        <>
        <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1 className='mb-3'>{props.heading}</h1>
            <div className="mb-3 my-1212">
                <textarea className="form-control "placeholder='Start typing...'  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" ></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" style={{color: props.mode==='dark'?'white':'#042743'}} onClick={handleLowClick}>Lowercase</button>
            <button disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" style={{color: props.mode==='dark'?'white':'#042743'}} onClick={handleCamelClick}>Camelcase</button>
            <button disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" style={{color: props.mode==='dark'?'white':'#042743'}} onClick={handleUpClick}>Uppercase</button>
            <button disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" style={{color: props.mode==='dark'?'white':'#042743'}} onClick={handleExtraSpace}>Remove Space</button>
            <button disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" style={{color: props.mode==='dark'?'white':'#042743'}} onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-outline-primary mx-1 my-1" style={{color: props.mode==='dark'?'white':'#042743'}} onClick={handleClearClick}>Clear Text</button>
            {/* <button className="btn btn-outline-primary mx-1" style={{color: props.mode==='dark'?'white':'#042743'}} onClick={handleLightTheme}>Light Theme</button>
            <button className="btn btn-outline-primary mx-1" style={{color: props.mode==='dark'?'white':'#042743'}} onClick={handleDarkTheme}>Dark Theme</button> */}
        </div>
        <div className="continer my-3 mx-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>  Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview!"}</p>
        </div>

        </>
    )
}

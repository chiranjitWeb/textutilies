import React, {useState} from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [dtext, setDText] = useState("");
    const [ptext, setPText] = useState("");
    //const [count, setCount] = useState(0);

    const handleUpClick = ()=> {
        //console.log("uperisclicked" + text)
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upercase","success")
        //setText("New set text here");
      //setCount(count + 1);
    }
  const handlelowerpClick=()=>{
    let newtexttolower=text.toLowerCase();
    setText(newtexttolower);
    props.showAlert("Converted to lowercase","success")
  }
    function handleOnChange(event){
        setText(event.target.value);
       // console.log("onchange");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const handleClearClick = () =>{
        setText("");
        props.showAlert("Cleared text","success")
        
    }
    // const setCount2=()=>{
    //     setCount(count + 1);
    // }

    const handleDuplicateClick = () =>{
        
            let wordCount = {};
            let duplicates = [];
           
            let words = text.split(/\s+/);
            
            words.forEach(word => {
                let lowerWord = word.toLowerCase();
                if (wordCount[lowerWord]) {
                    wordCount[lowerWord]++;
                    if (wordCount[lowerWord] === 2) {
                        duplicates.push(lowerWord);
                    }
                } else {
                    wordCount[lowerWord] = 1;
                }
            });
            //console.log(duplicates);
            let duplicatevalues=duplicates.length > 0 ? duplicates.join(', ') : 'None';
            //console.log(duplicatevalues);
            setDText(duplicatevalues);
    }

    // const handleLightTheme = () => {
    //     document.querySelector('.container').style.backgroundColor = "white";
    //   }
    
      // const handleDarkTheme = () => {
      //   document.querySelector('.container').style.backgroundColor = "black";
      //   document.querySelector('.container').style.color = "white";
        
      // }

      // const  pallindromechecker = () =>{
      //   let rstring = "";
      //   for (let i = text.length - 1; i >= 0; i--) { 
      //       rstring += text[i]; // or rstring = rstring + text[i];
      //   }
      //   if(text.length===0){
      //     return 'pallindromic checker'
      //   }
      //   else if(rstring===text){

      //       setPText('Yes');
          
      //   }
      //   else{
      //       setPText('No');
      //   }
      // }

      const Reverse = () => {
        let givenText=text;
        let arr=givenText.split(" ");
    
        let reverse_array=arr.reverse();
    
        let original_string_comma=reverse_array.join(" "); //comma separetaed string return garxa
    
        let newReverserText=original_string_comma.toString();
        
        // console.log(newReverserText)
    
         setText(newReverserText)  ;
    
      };

      const handleExpress = () =>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Removed extra spaces","success")
      }
      // function countWords(str) {
      //   // const arr = str.split(" ");
      //   // return arr.filter(word => word !== "").length;
       
      //   }
  return (
    <>
    <div className='container'  style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
            <textarea className="form-control" value={text} onChange={ handleOnChange } style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white',
                color:props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="10"></textarea>
        </div>
       <button className="btn btn-primary mx-2 my-2"  onClick={handleUpClick}>Convert to Upercase</button>
       <button className="btn  btn-primary mx-2 my-2"  onClick={handlelowerpClick}>Convert to Lowercase</button>
       <button className="btn btn-primary mx-2 my-2"  onClick={handleDuplicateClick}>Duplicate check</button>
       <button className="btn btn-primary mx-2 my-2"  onClick={handleExpress}>Remove Extra Spaces</button>
       {/* <button className="btn btn-primary mx-2 my-2"  onClick={handleLightTheme}>LightTheme</button> */}
       {/* <button className="btn  btn-info mx-2"  onClick={handleDarkTheme}>DarkTheme</button> */}
      {/* <button className="btn  btn-primary mx-1 my-1"  onClick={pallindromechecker}>CheckPallindrome</button>*/}
       <button className="btn btn-primary mx-2 my-2"  onClick={Reverse}>RverseOrder</button>
       <button className="btn  btn-primary mx-2 my-2" onClick={speak}>Speak</button>
       <button className="btn btn-warning mx-2  my-2"  onClick={handleClearClick}>Clear</button>
       
       {/* <button onClick={() => setCount2()}>
        Click me{count}
      </button> */}
    </div>
    <div className="container my-2"  style={{backgroundColor:props.mode === 'dark' ? '#042743' : 'white',
                color:props.mode === 'dark' ? 'white' : '#042743'}} >
        <h1>Your text summary</h1>
        {/* <p>{countWords(text)}<b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p> */}
        {/* <p><b>{text.split(/\s+/).length - 1}</b> words</p>  */}
        <p> <b>{text.split(" ").filter((elm)=>{return elm.length!==0}).length}</b> words  <b>{text.length-text.split(" ").length+1}</b> characters</p>
        {/* <p>{text.split(" ").length-1 } words and {1000-text.length-1} characters</p> */}
        <p><b>{0.008 * text.split(" ").length}</b> Minutes read</p>
        <h2>Preview</h2>
        <div>
        <p>{text.length>0 ? text : "Enter the text in Textbox to preview the result"}</p>
        </div>
        <div>
        <p>Duplicate words: <span id="duplicateWords">{dtext}</span></p>
        </div>
        <div>
        <p>Pallindrome:</p>{ptext}
        </div>
        
    </div>
    </>
  )
}

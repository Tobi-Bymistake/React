import React,{useState} from 'react'
                                                                                        // import React from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
            console.log("Uppercase was clicked  "+text);
            let newText = text.toUpperCase();
            setText(newText)
            props.showAlert("COnverted to upper case","Success");

    }
    const handleLoClick = () =>{
                                                                                          // console.log("Uppercase was clicked  "+text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("COnverted to lower case","Success");

}
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
       
      }

      const cleartext = ()=>{
        let cleartext ='';
        setText(cleartext);
      }

      const split = () => {
        let splitText = text.split(" ");
        let boldText = splitText.map((word, index) => (
          <strong key={index}>{word} </strong>
        ));
        setText(boldText);
      };
      
        
        const [text,setText] = useState('Enter ur no.');

                                                                                   // text = "new text"  -- this is wrong way
                                                                                   // setText("new text");  --this is correct way
    
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black' }} >
        <h1> {props.heading}</h1>
      <div class="mb-3">
                                                                                            {/* <label for="myBox" class="form-label">Example Textarea</label> */}

     <textarea class="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'   }}id="myBox" rows="8"></textarea>
     </div>
     <button className='btn btn-primary mx-1'onClick={handleUpClick}>convert to uppercase </button>
     <button className='btn btn-primary mx-1'onClick={handleLoClick}>convert to Lowercase </button>

     <button className='btn btn-primary mx-1'onClick={cleartext}>Clear Text</button>
     <button className='btn btn-primary mx-1'onClick={split}>split</button>

    </div>
    <div className='container my-3'  style={{color:props.mode==='dark'?'white':'black' }} >
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length}characters</p>
      <p>{0.008 * text.split(" ").length} minutes</p>
      <h2>Preview</h2>
      <p>{text .lenght >0?text:"Enter something in box to preview it here"}</p>
    </div>
    </>
  )
}


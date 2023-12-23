import React, {useState} from 'react';

export default function About()  {
    
    const [myStyle, setMyStyle ] = useState({                    //style, is our current state. 
                                                                 //  setMyStyler, is the function that is used to update our state.
        color:'black',                                           //useState("  ")= whatever we write in this useState it is our current state like if their is style present then it will black or white 
        backgroundColor:'white'                                     //another ex. if const [mycolour, setMyColour ] = useState("Red")
    })


    const [btntext, setBtnText] = useState("Enable dark mode")
 const toggleStyle = () => {
    if(myStyle.color === 'black'){
        setMyStyle({
            color:'white',
            backgroundColor:'black',
            border : '1px solid white'
        })
        setBtnText("Enable light mode")
    }
    else{
        setMyStyle({
            color:'black',
            backgroundColor:'white'
        })
        setBtnText("Enable dark mode");
    }
}

  return (
    <div className="container" style={myStyle}>
        <h1 className='my-3'>Hemlo bro</h1>
      <h2>About Us</h2>
      <p>
        Welcome to our website! We are a team of passionate individuals dedicated to providing
        high-quality products/services.
      </p>
      <p>
        Our mission is to make a positive impact on the world by delivering innovative solutions
        and exceptional experiences.
      </p>
      <p>
        Feel free to explore our website and learn more about what we do. If you have any
        questions, don't hesitate to contact us.
      </p>
      <div className='container my-3'>
      <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
      </div>
    </div>
  )
}




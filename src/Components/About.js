import React,{useState} from 'react'

export default function About(props) {
     let myStyle = {
      color: props.mode === 'dark'? 'white' : '#042743',
      backgroundColor: props.mode === 'dark'? 'rgb(36, 74, 104)' : 'white',
      border: '2px solid',
      borderColor: props.mode === 'dark'? 'white' : '#042743'
     }
    


    //  To automatically enable dark mode for this about.js, by clicking the enable dark mode in navbar.js . We are commenting this . 
    //  But if we want to dependent on the button and about.js only to change the modes, then we use the following codes.

    // Passing an object in useState hook . 
    // const [myStyle,setMyStyle] = useState({
    //   color:"black",
    //   backgroundColor:"white"
    // });
    // const [btntext,setBtnText] = useState("Enable dark mode");

    // const toggleStyle=()=>{
    //   if(myStyle.color === "black"){
    //     setMyStyle({
    //       color:"white",
    //       backgroundColor:"black"
    //     })
    //     setBtnText("Enable light mode");
    //   }
    //   else{
    //     setMyStyle({
    //       color:"black",
    //       backgroundColor:"white"
    //     })
    //     setBtnText("Enable dark mode");
    //   }
    // }

  return( 
       <div className = "container" style={myStyle}>
        <h2 className = "my-3" style = {{color: props.mode === 'dark'?'white': '#042743'}}>About Us</h2>
        <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
           TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count or character count.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils is a free character counter tool that provides instant charcter count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser Compatible </strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
        </div>
        </div>
        </div>
        </div>
        {/* <div className='container my-3'>
        <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btntext}</button>
        </div> */}
    </div>
  )
}

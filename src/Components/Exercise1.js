import React, {useState} from 'react';
// import propTypes from 'prop-types'

export default function Exercise1(props) {

    const [text,setText] = useState("Enter text here");
    // const [col,setColor] = useState({
    //     color:"green"
    // });
    //     const changeColor =()=> setColor({
    //         color:"red"
    // })
    const handleOnChange = (event)=>{
        setText(event.target.value);
      }
    return(
       <>
            <div className="mb-3"> 
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="5"></textarea>
            </div> 
           <button className='btn btn-primary' onClick={props.mode}>Change color</button> 
           <div class="form-check form-switch"> 
                <input class="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/> 
                <label class="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: props.mode==='white'?'black':'white'}}>Enable Dark Mode</label>   
           </div> 
       </>
    //    {backgroundColor:'black'}     ,onClick={{backgroundColor:"white"?'grey':'white'}}
    )
}


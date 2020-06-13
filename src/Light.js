import './Light.css';
import React, { useState } from 'react';

let temp=22;
function calTemp(x) 
{
    if(x===true)
    {
        return temp++;
    }
    else if(x===false)
    {
        return temp--;
    }
    else 
    {
        return temp;
    }
}
function Light() {
    let [isLit, setLit] = useState(null);
   
return(
  <div className={`room ${isLit ? "lit" : "dark"}`}>
      <div className="data-con">

      </div>
       <div className="app-con">
            <h1>The Room is {isLit ? "Lit" : "Dark"}</h1>
             <h1>The Room Tempratue is {isLit  ? calTemp() : "0"}</h1>
            <br />
            <button className="btn" onClick={() => setLit(true)}>
            ON 
            </button>
            <button className="btn" onClick={() => setLit(false)}>
            OFF
            </button>
            <button className="btn" onClick={() => calTemp(true)}>
            +
            </button>
            <button className="btn" onClick={() => calTemp(false)}>
            -
            </button>
        </div>
 </div>
    
    
  
    
);
}

export default Light;
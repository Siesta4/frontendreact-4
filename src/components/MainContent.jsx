import Number from "./Number";
import Buttons from "./Buttons";
import refresh from '../img/refresh.png'
import { useState } from "react";

function MainContent() {

    let [counter, setCounter] = useState(0)

    function plus(){
        setCounter(counter + 1)
    }

    function minus(){
        setCounter(counter - 1)
    }

    function reset(){
        setCounter(0)
    }


    return (
      <div className="maincontent">
        <div>
            <span className="number">{counter}</span>
        </div>
        <div className="buttons">
            <button className='button__plus' onClick={plus}>+</button>
            <button className='button__refresh' onClick={reset}><img src={refresh} alt="" className='refresh'/></button>
            <button className='button__minus' onClick={minus}>-</button>
        </div>
      </div>
    );
  }
  
  export default MainContent;
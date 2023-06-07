import { useState } from "react";
import "./Calculator.css"
function Calculator(){
    const [number,setNumber] =useState("0");
    const update_number = (new_number:string) => {
        if( number == "0"){
            setNumber(new_number)
        }else{
            setNumber(number+new_number)
        }
    }
    const evalute_update = ()=>{
        let final_value = eval(number);
        console.log(`evaluted value is : ${final_value}`)
        setNumber(final_value);
    }
    return(<>
    <h1>Calculator coming here ;)</h1>
    <div className="grid-container">
    <label className="item-header">{number}</label>
    <button className="grid-ac" onClick={()=>{setNumber("0")}}>AC</button>
    <button className="grid-item" onClick={()=>{update_number("1")}}>1</button>
    <button className="grid-item" onClick={()=>{update_number("2")}}>2</button>
    <button className="grid-item" onClick={()=>{update_number("3")}}>3</button>
    <button className="grid-op" onClick={()=>{update_number("+")}}>+</button>
    <button className="grid-item" onClick={()=>{update_number("4")}}>4</button>
    <button className="grid-item" onClick={()=>{update_number("5")}}>5</button>
    <button className="grid-item" onClick={()=>{update_number("6")}}>6</button>
    <button className="grid-op" onClick={()=>{update_number("-")}}>-</button>
    <button className="grid-item" onClick={()=>{update_number("7")}}>7</button>
    <button className="grid-item" onClick={()=>{update_number("8")}}>8</button>
    <button className="grid-item" onClick={()=>{update_number("9")}}>9</button>
    <button className="grid-op" onClick={()=>{update_number("*")}}>x</button>
    <button className="grid-zero" onClick={()=>{update_number("0")}}>0</button>    
    <button className="grid-item" onClick={()=>{evalute_update()}}>=</button>
    <button className="grid-op" onClick={()=>{update_number("/")}}>/</button>
    
    </div>
    </>)
}

export default Calculator;
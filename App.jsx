import React,{useState} from 'react';
import './App.css'
//import './Caluclator/Outline.css' ;
//import 'C:/Users/Lavanya/OneDrive/Documents/ReactJs/projects/src/Caluclator/Outline.css'
function App(){

const [values,setValues]=useState("");

let prevValues="";
const update=(event) =>{
     let val = event.target.value;
     setValues((prevValues) => prevValues + val)
};
const show=() =>{
        let val=eval(values);
        setValues(val);
}

const clear= () =>{
     //   document.getElementById("input").value="";
     setValues("");
        
}

const del= () =>{
        setValues(values.slice(0,-1));
}
return(<div className='outline'>
<div className='display row'>
    <input type='text' value={values} id="input" readOnly style={{height:'40px',borderCollapse:'collapse'}}  />
</div>



<div className='row r1'>
        <button value="C" className="b o" onClick={clear}>C</button>
        <button value="del" className='b o' onClick={del}>DEL</button>
        <button value="%" className="b o" onClick={update}>%</button>
        <button value="/" className="b o" onClick={update}>/</button>

</div>

<div className='row r2'>
<button value="7" className="b b5" onClick={update}>7</button>
        <button value="8" className="b b6" onClick={update}>8</button>
        <button value="9" className="b b7" onClick={update}>9</button>
        <button value="*" className="b o" onClick={update} >*</button>

</div>
<div className='row r3'>

<button value="4" className="b b9" onClick={update}>4</button>
        <button value="5" className="b b10" onClick={update}>5</button>
        <button value="6" className="b b11" onClick={update}>6</button>
        <button value="-" className="b o" onClick={update}>-</button>


</div>




<div className='row r4'>

<button value="1" className="b b13" onClick={update}>1</button>
        <button value="2" className="b b14" onClick={update}>2</button>
        <button value="3" className="b b15" onClick={update}>3</button>
        <button value="+" className="b o" onClick={update}>+</button>
</div>


<div className='row r5'>
<button value="00" className="b b20" onClick={update}>00</button>
        <button value="0" className="b b17" onClick={update}>0</button>
        <button value="." className="b o" onClick={update}>.</button>
        <button value="=" className="b o" onClick={show}>=</button>
    
</div>














</div>) 
}
export default App;
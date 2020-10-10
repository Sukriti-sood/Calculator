import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buttons from "./Buttons";
function App() {

const[text,setText]=useState("0");
const[ans,setAns]=useState(0);
const[prevop,setprev]=useState(null);

function setNumber(value){
  if(text.length>20)
  {
    setText(" !!Max Limit Exceed!! ")
   
  }
  
  else{
  if(text.length==1&&text=="0")
  {
    setText(value.toString());
  }
  else
  setText(`${text}${value}`);
}
}
function setoperator(value){
  if(text.length>20)
  {
    setText(" !!Max Limit Exceed!! ")
   
  }
  
  else
  setText(`${text}${value}`);
  
  if(prevop==null)
  setprev(value);
  const ansv=parseInt(text.slice(0));
  setAns(ansv);
  

}
function acclick(){
  setText("0");
  setAns(0);
  setprev(null);
}
function result(){
  switch(prevop)
    {
      case "/":
        {
          var index=text.indexOf('/');
          var num=parseInt(text.slice(index+1));
          var ansr=ans/num;
            setAns(ansr);
            setText(ansr);
            setprev(null);
        }
        break;
        case "+":
          {
            var index=text.indexOf('+');
            var num=parseInt(text.slice(index+1));
          var ansr=ans+num;
            setAns(ansr);
            setText(ansr);
            setprev(null);
          }
          break;
          case "x":
            {
              var index=text.indexOf('x');
              var num=parseInt(text.slice(index+1));
          var ansr=ans*num;
            setAns(ansr);
            setText(ansr);
            setprev(null);
            }
            break;
            case "-":{
              var index=text.indexOf('-');
              var num=parseInt(text.slice(index+1));
          var ansr=ans-num;
            setAns(ansr);
            setText(ansr);
            setprev(null);
            }
            break;
    }
}

  return (
    <div className="App">

    <div className="text-center row front align-items-center">
    
  <div className="main text-center justify-content-center">
    <div className="row text"> 
    <div className="display">{text}</div>
    </div>
    <Buttons setNum={setNumber} onClickAC={acclick}
      setOp={setoperator}
      result={result}
    />
   
    </div>
  </div>
    </div>
   
  );
}

export default App;

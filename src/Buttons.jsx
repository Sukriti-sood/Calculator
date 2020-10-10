import React from "react";

function Buttons(props){
    return(
        <div className="bts">
        <div className="row sec">
          <div className="coli   ac col-6" onClick={()=>props.onClickAC()} >
          <p>AC</p>
          </div>
          <div className=" coli c text-center col-3" onClick={()=>props.setOp("/")}>
          <p>/</p>
          </div>
          <div className=" coli c text-center col-3" onClick={()=>props.setOp("x")}>
          <p>x</p>
          </div>
        </div>
        <div className="row third">
        
          <div className=" coli text-center col-3" onClick={()=>props.setNum(7)} >
          <p>7</p>
          </div>
          <div className=" coli text-center col-3" onClick={()=>props.setNum(8)}>
          <p>8</p>
          </div>
          <div className=" coli text-center col-3" onClick={()=>props.setNum(9)}>
          <p>9</p>
          </div>
          <div className=" coli text-center c col-3" onClick={()=>props.setOp("-")}>
          <p>-</p>
          </div>
          </div>
          <div className="row third">
        
        <div className=" coli text-center col-3" onClick={()=>props.setNum(4)}>
        <p>4</p>
        </div>
        <div className=" coli text-center col-3" onClick={()=>props.setNum(5)}>
        <p>5</p>
        </div>
        <div className=" coli text-center col-3" onClick={()=>props.setNum(6)}>
        <p>6</p>
        </div>
        <div className=" coli c text-center col-3" onClick={()=>props.setOp("+")}>
        <p>+</p>
        </div>
        </div>
        <div className="row fourth">
        <div className="colu col-9">
        <div className="row f">
        <div className=" coli text-center col-4" onClick={()=>props.setNum(1)}>
        <p>1</p>
        </div>
        <div className=" coli text-center col-4" onClick={()=>props.setNum(2)}>
        <p>2</p>
        </div>
        <div className=" coli text-center col-4" onClick={()=>props.setNum(3)}>
        <p>3</p>
        </div>
        </div>
        <div className="row f">
        <div className=" coli text-center col-6" onClick={()=>props.setNum(0)}>
        <p>0</p>
        </div>
        <div className=" coli text-center col-6" onClick={()=>props.setOp(".")}>
        <p>.</p>
        </div>
    
        </div>
    
        </div>
        <div className="coli text-center eq col-3" onClick={()=>props.result()}>
        <p>=</p>
        </div>
        </div>
        </div>
    )
}

export default Buttons;
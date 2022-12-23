import React from "react";
import Comp1 from "../c1.2"
import "./style.css"

function All(){
    return(
        <div className="issue">
            <div className="first-issue">
         <Comp1 />
         <Comp1 />
         </div>
         <div className="second-issue">
         <Comp1 />
         <Comp1 />
         </div>
         
         


         </div>

    );
}

export default All;
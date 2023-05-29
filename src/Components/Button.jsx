import React from "react";

function Button(props){
    return(
        <>
        <div className="bg-yellow-400 text-Black text-2xl font-bold rounded  py-2 px-12 hover:bg-yellow-200 duration-100">
            {props.children}
        </div>
        </>
    );
}export default Button;
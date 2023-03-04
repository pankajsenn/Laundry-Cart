import React from "react";
import './Sidebar.css'
function Sidebar(){
return (
    <>
    <div id="sidebar-container">
     <div className="icons"> 
        <img src="./home.svg"/>
     </div>
     <div className="icons" id="more"> 
        <img src="more.svg"/>
     </div>
     <div className="icons"> 
        <img src="list.svg"/>
     </div>
    </div>
    </>
)
}
export default Sidebar;
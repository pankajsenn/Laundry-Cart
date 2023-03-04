import React from "react";
import './Navbar.css';
function Navbar(){
return (
    <>
    <div id="navbar-container">
     <div id="laundry">
       LAUNDRY
     </div>
     <div id="innerAnduser-container">
     <div id="inner-container">
     <div id="pricing">
       Pricing
     </div>
     <div id="career">
       Career
     </div>
     </div>
     <div id="user">
       <img src="https://images.unsplash.com/photo-1573640076354-ddcbf94b9b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBsaXBzfGVufDB8fDB8fA%3D%3D&w=1000&q=80" id="user-img"/>
       <div id="user-name">User Name</div>
     </div>
     </div>
     
    </div>
    </>
)
}
export default Navbar;
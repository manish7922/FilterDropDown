import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import React, {Component} from "react";
import {Link} from "react-router-dom"
class Navbar extends Component {


    render(){
 
  
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light text-black">
    <Link className="navbar-brand"  to="/">Billing System</Link>
    <div className="" id="navbarSupportedContent">
    <ul className="navbar-nav">
    <li className="nav-item">
        <a className="nav-link" href="/products">
          New Bill
         
        </a>
    </li>

    </ul>
    </div>
        </nav>
)
    }
}
export default Navbar;
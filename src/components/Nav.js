import React from 'react';
import { NavLink } from 'react-router-dom'

function Nav() {

    return (<nav className="nav">
        <ul className="nav-links">
            <NavLink to="/Meme" activeStyle={{ color: "black", fontSize: 25 }}><li>Meme</li></NavLink>
            <NavLink to="/Shop" activeStyle={{ color: "black", fontSize: 25 }}><li>ShoppingApp</li></NavLink>
            <NavLink to="/Todo" activeStyle={{ color: "black", fontSize: 25 }}><li>Todo</li></NavLink>
            <NavLink to="/Travel" activeStyle={{ color: "black", fontSize: 25 }}><li>TravelForm</li></NavLink>
            <NavLink to="/Color" activeStyle={{ color: "black", fontSize: 25 }}><li>Color</li></NavLink>
            <NavLink to="/HelloWorld" activeStyle={{ color: "black", fontSize: 25 }}><li>HelloWorld</li></NavLink>
            <NavLink to="/Place" activeStyle={{ color: "black", fontSize: 25 }}><li>Place</li></NavLink>
            <NavLink to="/Login" activeStyle={{ color: "black", fontSize: 25 }}><li>Login</li></NavLink>
        </ul>
    </nav>);
}


export default Nav;
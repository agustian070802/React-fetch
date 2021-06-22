import React from 'react';
import './sidemenu.css';
import { NavLink } from 'react-router-dom';

export default function SideMenu(){

    return(
        <aside className="sidemenu">
            <NavLink to="/home" activeClassName="sm_item_active">
                <span className="sm_item" >
                    home
                </span>
            </NavLink>
            <NavLink to="/blog" activeClassName="sm_item_active">
                <span className="sm_item" >
                    blog
                </span>
            </NavLink>
            <NavLink to="/about" activeClassName="sm_item_active">
                <span className="sm_item">
                    about
                </span>
            </NavLink>
            <NavLink to="/contact" activeClassName="sm_item_active">
                <span className="sm_item">
                    contact
                </span>
            </NavLink>
        </aside>
    )
}
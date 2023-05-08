import { NavLink } from 'react-router-dom';
import React from 'react';

export const Navigation = () => {
    return(
        <nav>
            <NavLink to="/"> 
                <button>
                Home
                </button>
            </NavLink>
            <NavLink to="/tweets"> 
                <button>
               tweets
                </button>
            </NavLink>
        </nav>
    )
}
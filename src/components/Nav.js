import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink,
} from 'react-router-dom';
import Home from '../pages/Home.js';
import Profile from '../pages/Profile.js';
import Cart from '../pages/Cart.js';
import Products from '../pages/Products.js';

class Nav extends Component {

    render() {

        return (
            <Router>
                <div>
                    <nav className="d-flex flex-row justify-content-between px-3 py-3">
                        <div className="align-items-center">
                            <NavLink className="mr-3" to='/'>MINEZY</NavLink>
                            <input type="text" placeholder="search" />
                        </div>
                        <div className="align-items-center">
                            <NavLink className="mx-2 btn-white" to='/Profile'>Profile</NavLink>
                            <NavLink className="mx-2 btn-white" to='/Cart'>Cart</NavLink>
                        </div>
                    </nav>
                    <div>
                        <Route exact path='/' component={Home} />
                        <Route path='/Profile' component={Profile} />
                        <Route path='/Cart' component={Cart} />
                        <Route path="/Products" component={Products} />                    
                    </div>
                </div>
            </Router>
        );
    }
}

export default Nav;


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    render(){
        return(
            <div className='nav'>
                <div>
                    <Link to='/' className='homeLink'>
                        <h1>Home</h1>
                    </Link>
                </div>
                <div id='reduxLink'>
                    <Link to='/redux'>
                        <h1>Redux</h1>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Nav;
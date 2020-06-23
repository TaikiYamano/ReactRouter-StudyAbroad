import React from 'react';
import {
    BrowserRouter,
    Link,
} from 'react-router-dom';
import '../../App.css';

function Header(){
    return(
        <header className="header_wrapper">
            <nav>
                <BrowserRouter>
                    <ul className="header_menu">
                        <li><Link to="/">Top</Link></li>
                        <li><Link to="/study">Study</Link></li>
                        <li><Link to="/trip">Trip</Link></li>
                        <li><Link to="/dance">Dance</Link></li>
                    </ul>
                </BrowserRouter>
            </nav>
            <div className="header_title_img">
                <h1 className="header_title">My Life In The U.S</h1>
            </div>
        </header>
    )
}

export default Header;


import React from 'react';
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom';
import Top from './components/Top/Top';
import Study from './components/Study/Study';
import Dance from './components/Dance/Dance';
import Trip from './components/Trip/Trip';
import '../src/Page.css';

function Page(){
    return(
        <header className="header_wrapper">
            <HashRouter basename={process.env.PUBLIC_URL}>
                <nav>
                    <ul className="header_menu">
                        <li><Link to="">Top</Link></li>
                        <li><Link to="study">Study</Link></li>
                        <li><Link to="dance">Dance</Link></li>
                        <li><Link to="trip">Trip</Link></li>
                    </ul>
                </nav>
                <div className="header_title_img">
                    <h1 className="header_title">My Life In The U.S</h1>
                </div>
                <Route path="/" exact component={Top} />
                <Route path="/study" exact component={Study} />
                <Route path="/dance" exact component={Dance} />
                <Route path="/trip" exact component={Trip} />
            </HashRouter>
        </header>
    )
}

export default Page;


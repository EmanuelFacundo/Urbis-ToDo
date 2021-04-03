import React from 'react';
import Header from './Header';
import Login from './Login';
import Logo from './Logo';

const Menu = props => {

    return (
        <div className="bg-urbis">
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                    <Logo />
                    <Header />
                    <Login />
                </header>
            </div>

            </div>
    )
}

export default Menu
import './header.css';
import React from 'react';
function Header() {
    return (
        <React.Fragment>
            <div className="Header-nav">
                <div className="logo">Header Logo</div>
                <div className="link">
                    <div>header link one</div>
                    <div>header link two</div>
                    <div>header link three</div>
                </div>
            </div>
            <div className="Header-container">
                <div className="hero">
                    <div>This website is awesome</div>
                    <p>
                        This website has some subtext that goes here under the main title.
                        It's a smaller font and the color is lower contrast
                    </p>
                    <button>Sign up</button>
                </div>
                <div className="image">
                    this is a placeholder for an image
                </div>
            </div>
        </React.Fragment>
    )
};

export default Header;

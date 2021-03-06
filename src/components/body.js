import './body.css';
import React from 'react';

function Content() {
    return (
        <React.Fragment>
            <div className="info">
                <div className="info-head">
                    Some random information.
                </div>
                <div className="info-body">
                    <div className='info-body-container'>
                        <div className="frame"></div>
                        <p className='subtxt'>this is some subtext under an illustration or image</p>
                    </div>
                    <div className='info-body-container'>
                        <div className="frame"></div>
                        <p className='subtxt'>this is some subtext under an illustration or image</p>
                    </div>
                    <div className='info-body-container'>
                        <div className="frame"></div>
                        <p className='subtxt'>this is some subtext under an illustration or image</p>
                    </div>
                    <div className='info-body-container'>
                        <div className="frame"></div>
                        <p className='subtxt'>this is some subtext under an illustration or image</p>
                    </div>
                </div>
            </div>
            <div className="quote">
                <p>
                    This is an inspiring quote, or a testimonial from a customer.
                    Maybe it's just filling up space, or maybe people will actually read it.
                    Who knows? All I know is that it looks nice.
                </p>
                <div>-Thor, God of Thunder</div>
            </div>
            <div className="call-to-action">
                <div className='call-to-action-container'>
                    <div className='cta-content'>
                        <div className='cta-content-text'>
                            <p><h2>Call to action! It's time!</h2></p>
                            <p>Sign up for our product by clicking that button right over there!</p>
                        </div>
                        <button>Sign up</button>
                    </div>
                </div>
                <div className='copyright'>Copyright ?? The Odin Project 2021</div>
            </div>
        </React.Fragment>
    )
};

export default Content;
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
            <div className="quote"></div>
            <div className="call-to-action"></div>
        </React.Fragment>
    )
};

export default Content;
import React from 'react'
import "./footer.css"
const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='topsection'><span>India</span></div>
            <div className='bottomSection'>
                <div className='leftSection'>
                    <span>About</span>
                    <span>Advertising</span>
                    <span>Business</span>
                    <span>How Search Works</span>
                </div>
                <div className='rightSection'>
                    <span>Privacy</span>
                    <span>Terms</span>
                    <span>Settings</span>
                </div>
            </div>

        </div>
    )
}

export default Footer
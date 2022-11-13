import React from 'react'
import './header.css'
const Header = () => {
    return (
        <div className='headerContainer'>
            <div className='gmailText'>Gmail</div>
            <div className='imagesText'>Images</div>
            <div className='ninedotsdiv'><img src={require("../../assets/googleappslogo.png")} alt="icn" className='ninedots' /></div>
            <div className='signInButton'>Sign in</div>
        </div>
    )
}

export default Header
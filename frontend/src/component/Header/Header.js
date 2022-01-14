import React from 'react'
import Navigation from './Navigation'
import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
            <header>
                <h1>E-commerce</h1>
                <Navigation/>
            </header>
        </div>
    )
}

export default Header

import React, { useState }from 'react'
import { Link } from "react-router-dom";
import "./Nav.css"

function Nav() {
    const [isClicked, setIsClicked] = useState(false)


    const handleClick = () => {
        setIsClicked((oldValue) => {
            return (
                !oldValue
            )
        })
    }

    const closeMobileMenu = () => {
        setIsClicked(false)
    }
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    {/* Logo to link to Home */}
                    <Link to='/' className='navbar-logo'  onClick={closeMobileMenu}>
                        EatWell <i className="fa-regular fa-pot-food"/>
                    </Link>

                    {/* menu icon */}
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={isClicked ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>


                    <ul className={isClicked ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link 
                            to='/about' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                            About
                            </Link>

                        </li>
                    </ul>
                </div>
            </nav>


        </>
    )
}

export default Nav

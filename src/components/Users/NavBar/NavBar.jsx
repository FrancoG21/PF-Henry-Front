import React, { useEffect, useState } from "react";
import { FaSun, FaRegMoon, FaTimes, FaBars } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";
import { Nav, NavContainer, NavLogo, NavIcon, DarkMode, MobileIcon, NavMenu, NavItem, NavAcces, MinText, NavButton, NavButtonLink, Button } from "./StyledNavBar";
import { IconContext } from 'react-icons/lib';

export default function NavBar({theme, setTheme}) {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)

    const handleTheme = () => {
        if(theme === 'dark'){
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton)

    const iconTheme = theme === 'dark' ? (<FaSun/>) : (<FaRegMoon/>)

    return(
        <IconContext.Provider value={{color: 'fff'}}>
            <Nav>
                <NavContainer>
                    <NavLogo to='/'>
                        <NavIcon/>
                        TITLE
                    <DarkMode onClick={handleTheme}>{iconTheme}</DarkMode>
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavAcces to='/'>Home</NavAcces>
                        </NavItem>
                        <NavItem>
                            <NavAcces to='/adopt'>Pets</NavAcces>
                        </NavItem>
                        <NavItem>
                            <NavAcces to='/'>Donation</NavAcces>
                        </NavItem>
                        <NavItem>
                            <NavAcces to='/about'>About Us</NavAcces>
                        </NavItem>
                        {/* <NavButton>
                            {
                                button ? (
                                    <NavButtonLink to='/'>
                                        <Button primary>Sign Up</Button>
                                    </NavButtonLink>
                                ) : (
                                    <NavButtonLink to='/'>
                                    <Button fontBig primary>Sign Up</Button>
                                </NavButtonLink>
                                )
                            }
                        </NavButton> */}
                    {/* </NavMenu>
                    <NavMenu> */}
                        <NavItem>
                            <NavAcces to='/'>Login</NavAcces>
                        </NavItem>
                        {/* <MinText>|</MinText> */}
                        <NavItem>
                            <NavAcces to='/'>Register</NavAcces>
                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </IconContext.Provider>

    )
}
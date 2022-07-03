import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux';
import { FaSun, FaRegMoon, FaTimes, FaBars } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";
import { Nav, NavContainer, NavLogo, NavIcon, DarkMode, MobileIcon, NavMenu, NavItem, NavAcces, MinText, NavButton, NavButtonLink, Button } from "./StyledNavBar";
import { IconContext } from 'react-icons/lib';
import Logout from "../Logout/Logout";

export default function NavBar({theme, setTheme}) {

    const userInfo = useSelector((state) => state.usuario)

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

    useEffect(() => {

    }, [userInfo])

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)

    const iconTheme = theme === 'dark' ? (<FaSun/>) : (<FaRegMoon/>)

    return(
        <IconContext.Provider value={{color: 'fff'}}>
            <Nav>
                <NavContainer>
                    <NavLogo to='/'>
                        <NavIcon/>
                        AdoptA
                    </NavLogo>
                    <DarkMode onClick={handleTheme}>{iconTheme}</DarkMode>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </MobileIcon>

                    {
                        userInfo && userInfo ? (
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
                                <NavItem>
                                    <Logout />
                                </NavItem>
                                <NavItem>
                                    <NavAcces to='/userprofile'>Profile</NavAcces>
                                </NavItem>
                            </NavMenu>
                        ) : (
                            <NavMenu>
                                <NavItem>
                                    <NavAcces to='/'>Home</NavAcces>
                                </NavItem>
                                <NavItem>
                                    <NavAcces to='/adopt'>Pets</NavAcces>
                                </NavItem>
                                <NavItem>
                                    <NavAcces to='/about'>About Us</NavAcces>
                                </NavItem>  
                                <NavItem>
                                    <NavAcces to='/login'>Login</NavAcces>
                                </NavItem>
                                <NavItem>
                                    <NavAcces to='/register'>Register</NavAcces>
                                </NavItem>
                            </NavMenu>
                        )
                    }

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
                        {/* <MinText>|</MinText> */}

                        {/* {
                            userInfo && userInfo ?(
                            :
                        } */}
                </NavContainer>
            </Nav>
        </IconContext.Provider>

    )
}
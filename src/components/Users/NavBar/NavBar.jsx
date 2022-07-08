import React, { useEffect, useState } from "react";
import {useSelector} from 'react-redux';
import { FaSun, FaRegMoon, FaTimes, FaBars } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";
import { Nav, NavContainer, NavLogo, NavIcon, DarkMode, MobileIcon, NavMenu, NavItem, NavAcces, ContainerLogo, MinText, NavButton, NavButtonLink, Button } from "./StyledNavBar";
import { IconContext } from 'react-icons/lib';
import Logout from "../Logout/Logout";
import axios from 'axios'
import s from './Nav.module.css'


export default function NavBar({theme, setTheme}) {

    const userInfo = useSelector((state) => state.usuario)

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    const [user, setUser] = useState(null)

    const handleClick = () => setClick(!click)

    const handleTheme = () => {
        if(theme === 'dark'){
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    useEffect(() => {
        axios.get('/user/' + JSON.parse(localStorage.getItem("userInfo"))).then(r=>{
            setUser(r.data)
          
        }, error => {
            console.log(error)
        })

    }, [userInfo])

    console.log('este es el usuario --->',user)

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
                    <ContainerLogo>
                        <NavLogo to='/'>
                            <NavIcon/>
                            AdoptA
                        </NavLogo>
                        <DarkMode onClick={handleTheme}>{iconTheme}</DarkMode>
                    </ContainerLogo>

                    
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </MobileIcon>

                    {
                        userInfo && userInfo ? (
                            <NavMenu onClick={handleClick} click={click}>
                                <NavItem>
                                    <NavAcces to='/'>Hogar</NavAcces>
                                </NavItem>
                                <NavItem>
                                    <NavAcces to='/adopt'>Mascotas</NavAcces>
                                </NavItem>
                                <NavItem>
                                    <NavAcces to='/donation'>Donación</NavAcces>
                                </NavItem>
                                <NavItem>
                                    <NavAcces to='/about'>Sobre Nosotros</NavAcces>
                                </NavItem>                       
                                <NavItem>
                                    <Logout />
                                </NavItem>
                                {user && user? (
                                  <NavAcces to='/userprofile'>{
                                    <ul className={s.list}> 
                                          <li className={s.listItem}>
                                               <img src= {user.picture? user.picture: 'https://p16-va-default.akamaized.net/img/musically-maliva-obj/1665282759496710~c5_720x720.jpeg'} alt='User Profile' className={s.avatar} />
                                               
                                           </li>
                                             <li className={s.listItem}>{user.name}</li>
                                        </ul>}
                                        </NavAcces>

                                    
                                        
                                ): 
                                <NavItem>
                                <NavAcces to='/userprofile'>Perfil</NavAcces>
                            </NavItem>}
                                
                            
                              
                            </NavMenu>
                        ) : (
                            <NavMenu>
                                <NavItem>
                                    <NavAcces to='/'>Hogar</NavAcces>
                                </NavItem>
                                <NavItem>
                                    <NavAcces to='/adopt'>Mascotas</NavAcces>
                                </NavItem>
                                <NavItem>
                                    <NavAcces to='/about'>Sobre Nosotros</NavAcces>
                                </NavItem>  
                                <NavItem>
                                    <NavAcces to='/login'>Iniciar Sesión</NavAcces>
                                </NavItem>
                                <NavItem>
                                    <NavAcces to='/register'>Registrar</NavAcces>
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
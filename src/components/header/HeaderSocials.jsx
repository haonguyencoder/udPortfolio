import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaBlogger} from 'react-icons/fa'
import { themeContext } from '../../Context'
import { useContext } from 'react';
const HeaderSocials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/hao-nguyen-b01134244/" className='header-icon-social-1' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a style={{color : darkMode? 'white': ''}} href="https://github.com/RuddyDL" className='header-icon-social-2' target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://ruddydl.blogspot.com/" className='header-icon-social-5' target="_blank" rel="noreferrer"><FaBlogger /></a>
    </div>
  )
}

export default HeaderSocials
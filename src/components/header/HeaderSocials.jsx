import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import { themeContext } from '../../Context'
import { useContext } from 'react';
const HeaderSocials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/honghaonguyen/" className='header-icon-social-1' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a style={{color : darkMode? 'white': ''}} href="https://github.com/RuddyDL" className='header-icon-social-2' target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/ruddyng_99/" className='header-icon-social-5' target="_blank" rel="noreferrer"><AiOutlineInstagram /></a>
    </div>
  )
}

export default HeaderSocials
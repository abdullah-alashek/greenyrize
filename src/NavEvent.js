import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo2 from './images/logo2.svg'
import Vector from './images/Vector.svg'
import shape from './images/home.svg'
import shape1 from './images/shape1.svg'
import shape2 from './images/shape2.svg'
import shape3 from './images/shape3.svg'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import { color } from 'framer-motion'
import { useNavigate} from 'react-router-dom';


function NavEvent () {
    const [screenWidth, setScreenWidth] = useState();

    const navigate = useNavigate();

    const gotohome = () => {  
      navigate("/");
    }
    const gotoevent = () => {  
      navigate("/Event");
    }
    const gotojoin = () => {  
      navigate("/Join");
    }
    const gotocontact = () => {  
      navigate("/contact");
    }
    const gotoprofile = () => {  
      navigate("/profile");
    }
    const gotoblog = () => {  
      navigate("/blog");
    }
    useEffect(() => {
      handleResize();
      const links = document.querySelectorAll('.page');
      links.forEach(item => {
        item.addEventListener("click",()=>{
          let ele = document.getElementById(item.getAttribute('data-link'));
          ele.scrollIntoView({behavior:"smooth",block:"start" })
        })
      });
      window.addEventListener("resize", handleResize);
      if(screenWidth < 900)
      {
        document.getElementById('collapss').classList.add('active');
        document.getElementById('menu').classList.add('activemenu');
        handleResize();

      }
      else {
        document.getElementById('collapss').classList.remove('active');
        document.getElementById('menu').classList.remove('activemenu');
      } 
      return () => window.removeEventListener("resize", handleResize);
    });
    
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    const showmenu = () => {
      document.getElementById('show-menu').classList.toggle('active');
    };



    
  return (
    <>
      <div className='navevent'>
      <div className='nav-bar'>
        <div className='logo'><img src={logo2}></img></div>
        <div className='menu' id='menu'>
          <button onClick={() => { showmenu() }}><i style={{color:'black'}} className="fas fa-solid fa-bars"></i></button>
        </div>
        <div className='collaps' id='collapss'>
          <div className='pages'>
            <ul>
              <button onClick={gotohome}><li>Home</li></button>
              <button onClick={gotoevent}><li>Event</li></button>
              <button onClick={gotoprofile}><li>Profile</li></button>
              <button onClick={gotoblog}><li>Blog</li></button>
              <button onClick={gotojoin}><li>Join Us</li></button>
              <button onClick={gotocontact}><li>contact</li></button>
            </ul>
          </div>
          <div className='lang'>
            <button>Ar</button>
            <span></span>
            <button>En</button>
          </div>
        </div>
          <div className='show-menu' id='show-menu'>
            <div className='exit-menu' id='exit'>
              <button onClick={() => { showmenu() }}>&times;</button>
            </div>
            <div className='pagesmenu'>
            <ul>
              <li onClick={gotohome} ><img src={shape}></img> Home</li>
              <li onClick={gotojoin} ><img src={shape3}></img> Join Us</li>
              <li onClick={gotoevent} ><img src={shape2}></img> Events</li>
              <li onClick={gotoprofile}><img src={shape2}></img> Profile</li>
              <li onClick={gotoblog}><img src={shape2}></img> Blog</li>
              <li onClick={gotocontact} ><img src={shape1}></img> Contact Us</li>
            </ul>
          </div>
          </div>
      </div>
      </div>
    </>
  )
}

export default NavEvent


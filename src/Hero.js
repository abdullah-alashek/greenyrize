import React from 'react'
import { motion } from 'framer-motion';
import NavHome from './NavHome.js';
import NavEvent from './NavEvent.js';
import x from './images/x.svg'
import Vector1 from './images/Group2.svg'
import Vector2 from './images/Vector (2).svg'
import Vector3 from './images/Vector (3).svg'
import event1 from './images/image 17.png'
import event2 from './images/image 18.png'
import event3 from './images/image 19.png'
import event4 from './images/image 20.png'
import event5 from './images/image 21.png'
import google from './images/google.svg'
import facebook from './images/facebook.svg'
import gmail from './images/gmail.svg'
import phone from './images/phone.svg'
import logo2 from './images/logo2.svg'


const Hero = () => {

  return (
        // initial={{x:"-100%"}}
        // animate={{x:"0",transition: {duration:1}}}
        // exit={{x:"-100%",transition: {duration:1}}} 
    <div className='site'>          
      <section className='home' id='home'>
        <NavHome/>
        <section className='section-hero'>
          <div className='main'>
            <div className='text'>
              <p>
                Reduce <br/>
                Reuse <br/>
                Recycle
              </p>
            </div>
            <div className='articl'>
              <h1>
                Take Small<br/>
                <span>Action</span>
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit
              </p>
              <button>Learn more</button>
            </div>
          </div>
          <div className='soc'>
            <span></span>
            <a href='#'><img src={Vector3} alt='l'/></a>
            <a href='#'><img src={Vector1} alt='l'/></a>
            <a href='#'><img src={Vector2} alt='l'/></a>
          </div>
        </section>
      </section>
      </div>
  );
}

export default Hero

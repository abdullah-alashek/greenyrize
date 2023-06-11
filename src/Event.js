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
import email from './images/email.svg'
import call from './images/call.svg'


const Event = () => {


  return (
  <section className='event' id='event'>
    <NavEvent/>
    <section className='section-event'>
      <div className='slid-images'>  
        <div className='img'><img src={event1} alt='l'/></div>
        <div className='content'>
          <h1>Event name</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, deleniti ex voluptate amet sit labore volupt atibus exercit ationem eaque nihil expedita repudi andae nisi quis. Temporibus deleniti aut corrupti obcaecati vitae accusantium.</p>
          <button>learn more</button>
        </div>
        <div className='back'></div>
      </div>
      <div className='event-art'>  
        <div className='content'>
          <h1>Event name</h1>
          <p>Lorem ipsum dolor sit amet consectetur . Interdum accumsan ipsum ut amet aliquet non odio tempor . Proin ut est orci et amet tincidunt turpis nulla . Lorem gravida feugiat integer quis at ut . Cras interdum sed a lacus ut condimentum ut.interdum sed a lacus ut condimentum ut.interdum sed a lacus ut condimentum ut.</p>
        </div>
        <div className='img'><img src={event2} alt='l'/></div>
      </div>

      <div className='event-images'>
        <div className=' back3'></div>
        <div className=' img img3'><img src={event3} alt='l'/></div>
        <div className='img img4'><img src={event4} alt='l'/></div>
        <div className='img img5'><img src={event5} alt='l'/></div>
        <div className='back5'></div>
      </div>

      <div className='event-art2'>  
        <div className='content'>
          <h1>second header</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Interdum accumsan ipsum ut amet aliquet non odio tempor. Proin ut est orci et amet tincidunt turpis nulla. Lorem gravida feugiat integer quis at ut. Cras interdum sed a lacus ut condimentum ut.interdum sed a lacus ut condimentum ut.interdum sed a lacus ut condimentum ut.Lorem ipsum dolor sit amet consectetur. Interdum accumsan ipsum ut amet aliquet non odio tempor. Proin ut est orci et amet tincidunt turpis nulla. Lorem gravida feugiat integer quis at ut. Cras interdum sed a lacus ut condimentum ut.interdum sed a lacus ut condimentum ut.interdum sed a lacus ut condimentum ut.</p>
        </div>
      </div>

      <div className='footer'>
        <div className='about'>
          <h1>About us</h1>
          <p>A community initiative to create and then build and spread a culture of environmental conservation locally and globally that calls for uniting the efforts of all stakeholders and individuals in the region to avoid climate change risks and mitigate and adapt to them.
          It also encourages everyone to cooperate, set ambitious goals, and take the necessary awareness-raising measures.
          </p>
        </div>
        <div className='contus'>
          <h1>Contact Us</h1>
          <p className='first'><img src={call}></img> +1012 3456 789</p>
          <p><img src={email}></img> demo@gmail.com</p>

        </div>
        <div className='support'>
          <h1>Support Servicesus</h1>
          <p>contact us</p>
        </div>
      </div>



    </section>
  </section>
  );
}

export default Event

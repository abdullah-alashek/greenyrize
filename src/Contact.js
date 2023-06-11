import React from 'react'
import { motion } from 'framer-motion';
import NavHome from './NavHome.js';
import NavEvent from './NavEvent.js';
import cont from './images/contact.svg';


const Contact = () => {

  return (
    <div className='site'>          
      <section className='contact'>
        <NavEvent/>
        <section className='section-contact'>
          <div className='main'>
            <form>
              <h1>Let’s Talk</h1>
              <label for="text">Name</label>
              <input type="text" name="" id="" placeholder="Your Name"></input>
              <label for="email">Email</label>
              <input type="email" name="" id="email" placeholder="Your Email"></input>
              <label for="message">Your massge</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              <button>Send</button>
          </form>
        </div>
        <div className='img'>
            <img src={cont}></img>
            <h1>Let’s Talk</h1>
        </div>

        </section>
      </section>
      </div>
  );
}

export default Contact

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
import { useNavigate } from 'react-router-dom';


const Sign = () => {

  const navigate = useNavigate();

  const gotohome = () => {  
    navigate("/");
  }
  const gotologin = () => {  
    navigate("/login");
  }

  return (
    <div className='site'>          

    <section className='section-join join-signup' id='join'>
        <NavHome/>
        <div className='join'>
          <div className='card'>
            <div onClick={gotohome} className='img'>
              <img src={x}></img>
            </div>
            <div className='form'>
              <form action="#">
                <label for="email">Email</label>
                <input type="email" name="" id="email" placeholder="Your email"></input>
                <label for="password">Creat password</label>
                <input type="password" name="" id="password" placeholder="Your password"></input>
              </form>
            </div>
            <div className='btne'>
              <button>Sign Up</button>
            </div>
            <div className='or'><span></span>OR<span></span></div>
            <div className='btn-lin'>
              <button><img src={google}></img> Sign in with Google</button>
              <button><img src={facebook}></img> Sign in with facebook</button>
            </div>
            <div className='tologin'> have an account ? <a onClick={gotologin}>LOG IN</a></div>
          </div>
        </div>
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

export default Sign

import React from 'react'
import { motion } from 'framer-motion';
import { useNavigate} from 'react-router-dom';
import Slid from './Slid';


const Hero2 = () =>{

  const navigate = useNavigate();

  const  atical_dis = () => {
    document.getElementById("pop1").classList.toggle('active');

    // navigate("/artical");
  }
  return(
    <>
    <motion.div className="hero2"
      initial={{x:"100%"}}
      animate={{x:"0",transition: {duration:1}}}
      exit={{x:"100%" ,transition: {duration:1}}}
      >
    <section className="section-hero">
    <div className="main">
      <div className="text">
        <p>Lorem ipsum dolor sit dolor amet consectetur dolor dolor sit dolor sit adipisicing dolorelit. Quae commodi animi,quasi dolor accusantium aut, corrupti dolor</p>
        <button>Action</button>
      </div>
      <div className="articl">
        <div className='imgs'>
          <button onClick={() => { atical_dis() }}>
          <div className='img1'>
            <img src='https://fastly.picsum.photos/id/198/800/400.jpg?hmac=tmUdEvfT43R4m-IEEsoB2i5uI-odB_Ud5ks-8pFwZwg'/>
          </div>
          </button>
          <button onClick={() => { atical_dis() }}>
          <div className='img2'>
            <img src='https://fastly.picsum.photos/id/198/800/400.jpg?hmac=tmUdEvfT43R4m-IEEsoB2i5uI-odB_Ud5ks-8pFwZwg'/>
          </div>
          </button>
          <button onClick={() => { atical_dis() }}>
          <div className='img3'>
            <img src='https://fastly.picsum.photos/id/198/800/400.jpg?hmac=tmUdEvfT43R4m-IEEsoB2i5uI-odB_Ud5ks-8pFwZwg'/>
          </div>
          </button>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum reprehenderit odio architecto tempore aperiam</p>
      </div>
    </div>
    <div className="soc">
    <img alt="l" style={{width: '50px'}}/>
    <img  alt="l" style={{width: '50px'}}/>
    <img  alt="l" style={{width: '50px'}}/> 
    </div>

  </section>
    </motion.div>

    <div className='pop' id='pop1'>
      <button onClick={() => { atical_dis() }}>&times;</button>

      <div className='content'>
        <h1>HELLO</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum reprehenderit odio architecto tempore aperiam</p>
      </div>
    </div>
    </>

  );
}

export default Hero2;
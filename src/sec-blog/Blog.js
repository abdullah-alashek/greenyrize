import React from 'react'
import { motion } from 'framer-motion';
import NavEvent from '../NavEvent.js';
import photo1 from './img/1920-globe-glass-on-grass-with-sunshine-environment-concept 1.svg'
import photo2 from "./img/Group.svg"
import photo3 from './img/jeroen-van-de-water-aQOzmgcT6sI-unsplash 1.svg'
import photo4 from "./img/volumetric-drop-with-ecosystem-inside-generative-ai 2.svg"
import photo5 from "./img/janschwalde-power-plant-germany 2.svg"
import './greenyrize.css'


const Blog = () => {
// const { SplitButton } = require("react-bootstrap");

let slides= document.querySelectorAll('.slide-container')

let index=0


//next function 

function next(){

    slides[index].classList.remove('active')

    index=(index + 1) % slides.length;

    slides[index].classList.add('active')
}




//previous function 

function prev(){

    slides[index].classList.remove('active')

    index=(index - 1 + slides.length) % slides.length;

    slides[index].classList.add('active')
}



//autoplay

// setInterval(next,4000);//slides change every 4s




  return (
  <div className='blog'>
    <NavEvent/>
    <section className=''>
    <div  class="container">

<div class="slide-container active">

      <div class="slide-1">

        <div class="content-1">
              <div class="photo">
                <img
                src={photo1}
                alt="photo"
              />

              </div>
          
      
        </div>

      </div>

</div>


<div class="slide-container ">

  <div class="slide">

      <div class="content">

          <h1>non-renewable resources </h1>
          <p>Since the begging of time humans impact on nature has been accumulating and effecting our surroundings, mainly negatively.The bad news is that Humans are about to destroy the environment due to the excessive use of ...</p>

          <button>Read More 

            <img src={photo2}/>
          </button>

      </div>


            <div class="image">
              <img
                src={photo3}
                alt="photo"
              />
            </div>

          </div>



    </div>




<div class="slide-container">

  <div class="slide">

    <div class="content">

          <h1>zero waste lifestylezero  </h1>
          <p>waste lifestyle a way of life that aims to reducing the amount of material we throw awaymajority of us believe that it is a near impossible task and a luxury that only few can afford t’s important ...</p>

          <button>Read More

            <img src={photo2}></img>
          </button>

  </div>

            <div class="image">
            <img
            src={photo4}
            alt="photo"
          />

            </div>
          </div>



    </div>





<div class="slide-container">

  <div class="slide">

    <div class="content">

          <h1>non-renewable resources  </h1>
          <p>Since the begging of time humans impact on nature has been accumulating and effecting our surroundings, mainly negatively.The bad news is that Humans are about to destroy the environment due to the excessive use of ...</p>

          <button>Read More 
              <img src={photo2}></img>
          </button>

    </div>


            <div class="image">
            <img
            src={photo5}
            alt="photo"
          >
          </img>


            </div>
          </div>



    </div>






    <div id="prev" onclick="prev()"> h </div>


    <div id="next" onclick="next()">h </div>



</div>
    </section>
  </div>
  );
}

export default Blog

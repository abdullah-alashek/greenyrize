import React from "react";
import "./style.css";
import tree from '../Image/tree.svg';
import treemedia from '../Image/treemedia.png'; 
import vector3 from '../Image/vector3.png'
import vector7 from '../Image/vector7.png'
import greeny_rize from '../Image/greeny_rize.svg'
import as from '../Image/as.png';
import shape from '../Image/shape.png';

function Index1(){
    return(
        <>
         <div class="container">
              <div class="circle">
                <nav>
                  <div class="logo ">
                    <img src={greeny_rize} alt="" />
                  </div>
                  <div class="links">
                    <ul class="li">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Events</a></li>
                      <li><a href="#">Join Us</a></li>
                      <li><a href="#">Contact Us</a></li>
                    </ul>
                  </div>
                </nav>
                <div class="content-card1">
                  <p class="para1">
                    A community initiative to create and then build and spread a culture of environmental conservation locally and 
                    globally that calls for uniting the efforts of all stakeholders and 
                    individuals in the region to avoid climate change risks and mitigate and adapt to them.
                  </p>  
                  <p class="para1 p1">
                    It also encourages everyone to cooperate, set ambitious goals, 
                    and take the necessary awareness-raising measures.
                  </p>

                </div>
                <div class="icon">
                  <button class="i"> <img src={as} alt="" ></img> </button>
                  <button class="i"> <img src={shape} alt="" ></img> </button>
                  
                </div>
                <div  class="icon icon2 ">
                  <div>
                    <span class="count"> </span>
                    <span class="count">  </span>
                  </div>  
                </div>
              </div>

              <div class="tree ">
                <img src={tree}/>
              </div>  
              <div>
                <img src={treemedia} alt="" class="tree-r">
                  </img>
              </div>

              <div>
                <button class="next"  ><a href="index2.html"><img src={vector3} ></img> </a></button>
                <button class="next-media"  ><a href="index2.html"><img src={vector7} ></img> </a></button>
              </div>
    </div> 
        </>
    )
}

export default Index1;


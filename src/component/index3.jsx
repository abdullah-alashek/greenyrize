import React from "react";
import "./style.css";
import greeny_rize from '../Image/greeny_rize.svg';
import Reactangl1 from '../Image/Reactangl1.png';
import Reactangle2 from '../Image/Reactangle2.png';
import tree from '../Image/tree.svg';
import treemedia from '../Image/treemedia.png'; 
import vector4 from '../Image/vector4.png'
import vector8 from '../Image/varctor8.png'
function Index3() {
  return (
    <>
      <div class="container ">
        <div class="circle">
          <nav>
            <div class="logo ">
              <img src={greeny_rize} alt="" />
            </div>
            <div class="links">
              <ul class="li">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">Join Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </nav>

          <h4 class="Title">Blog Highlights</h4>

          <div class="content-card3">
            <div class="img-card2">
              <div class="left">
                <div class="bg-img1-img-midia"></div>
                <div class="img">
                  <img src={Reactangle2} alt=""></img>
                </div>
              </div>
              <div class="right">
                <p class="secand-p">
                  zero waste lifestyle a way of life that aims to reducing the
                  amount of material we throw away
                  <br></br>
                </p>
                <a href="">View More</a>
              </div>
            </div>

            <div class="img-card2">
              <div class="left">
                <div class="bg-img2-img-midia"></div>
                <div class="img">
                  <img src={Reactangl1} alt=""></img>
                </div>
              </div>
              <div class="right">
                <p class="secand-p">
                  Since the begging of time humans impact on nature has been
                  effecting our surroundings.
                  <br></br>
                </p>
                <a href="">View More</a>
              </div>
            </div>
          </div>
        </div>
        <div class="tree">
          <img src={tree}/>
        </div>
        <div>
          <img
            src={treemedia}
            alt=""
            class="tree-r"
          ></img>
        </div>
        <div>
          <button class="prev3">
            {" "}
            <a href="index2.html">
              <img src={vector4}></img>
            </a>{" "}
          </button>
          <button class="next-media">
            <a href="index2.html">
              <img src={vector8}></img>{" "}
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
export default Index3;

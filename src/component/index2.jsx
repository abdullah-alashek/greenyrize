import React from "react";
import "./style.css";
import greeny_rize from '../Image/greeny_rize.svg';
import group from '../Image/group.png'
import tree from '../Image/tree.svg';
import treemedia from '../Image/treemedia.png'; 
import vector3 from '../Image/vector3.png'
import vector7 from '../Image/vector7.png'
import vector4 from '../Image/vector4.png'
import vector8 from '../Image/varctor8.png'
function Index2() {
  return (
    <>
      <div class="container ">
        <div class="circle">
          <nav class="nav-card2">
            <div class="logo logo-media">
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

          <h3>Our Goals</h3>
          <div class="content-card2 ">
            <div class="img-p1">
              <img src={group} alt=""></img>
              <p class="first-p">
                Raising public awareness on the topic of daily uses of products
                that adversely affect the environment and controlling the
                amounts of excessive environmental resources such as water and
                electricity.
              </p>
            </div>

            <div class="img-p1">
              <img src={group} alt=""></img>
              <p class="first-p">
                Raise people's awareness of the importance of using organic
                reusable or recyclable products.
              </p>
            </div>
            <div class="img-p1">
              <img src={group} alt=""></img>
              <p class="first-p">
                Cognitive, directional and behavioral change and this will
                change behaviour by dealing properly with these
              </p>
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

        <div class="bottons1">
          <div>
            <button class="next">
              <a href="index3.html">
                {" "}
                <img src={vector3}></img>{" "}
              </a>{" "}
            </button>
            <button class="next-media">
              <a href="index3.html">
                <img src={vector7}></img>{" "}
              </a>
            </button>
          </div>
          <div>
            <button class="prev">
              {" "}
              <a href="index.html">
                <img src={vector4}></img>{" "}
              </a>{" "}
            </button>
            <button class="prev-media-card2">
              <a href="index.html">
                <img src={vector8}></img>{" "}
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index2;

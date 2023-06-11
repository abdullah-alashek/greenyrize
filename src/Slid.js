import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate,} from 'react-router-dom';

const Slid = () =>{

  const [cla,setCla] = useState("pp");
  const [po,setpo] = useState("po1");
  const location = useLocation();

  const navigate = useNavigate();
  console.log(location.pathname)
  useEffect(() => {
    if (location.pathname==="/Hero3"){
      setCla("nn");      
      setpo("po2");

    }else if (location.pathname==="/"){
      setCla("pp");
      setpo("po1");

    }  }, []);
  
  const next = () => {
      navigate("/Hero3");
      setCla("nn");
      setpo("po2");
      console.log(po)

  }
  const prev = () => {
      navigate("/");
      setCla("pp");
      setpo("po1");
      console.log(po)


  }
  return(
    <div className='slid'>
      <div className='point'>
      <div className='po-1'>

        <span className={po}></span>
        </div>

        <div className='po-2'>

        <span className={po}></span>
        </div>

      </div>
      <div className='but'>
        {/* <button><img src={require('./images/is-greater-than-mathematical-sign-svgrepo-com.png')} alt="l"/> 
</button> */}
      <div className='prev'>
      <button onClick={() => { prev() }} className={cla}>
      <i class="fas fa-chevron-left"></i>              </button>
        </div>
        <div className='next'>
        <button onClick={() => { next() }} className={cla}>
          <i className="fas fa-chevron-right" />
        </button>
        </div>
      </div>
    </div>
  );
}

export default Slid;
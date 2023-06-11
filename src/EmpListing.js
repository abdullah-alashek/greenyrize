import { Route, Routes, useLocation} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Hero from './Hero.js';
import Event from './Event.js';
import Join from './Join.js';
import Sign from './Sign.js';
import Login from './Login.js';
import Forget from './Forget.js';
import Verif from './Verif.js';
import Welcome from './Welcome.js';
import Contact from './Contact.js';
import Blog from './sec-blog/Blog.js';
import Articaldis from './Articaldis.js';

const EmpListing = () =>{
  const location = useLocation();
  return(
    <div>
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Hero/>}></Route>
          <Route path="/event" element={<Event/>}></Route>
          <Route path="/join" element={<Join/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/sign" element={<Sign/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/forget" element={<Forget/>}></Route>
          <Route path="/verif" element={<Verif/>}></Route>
          <Route path="/welcome" element={<Welcome/>}></Route>
        </Routes>
        </AnimatePresence>

    </div>    
  );
}


{/* <Link to="/about"><Button className="m-3" variant="success">About</Button></Link>
<Button className="m-3" variant="warning">Warning</Button>
<Button className="m-3" variant="danger">Danger</Button>  */}
export default EmpListing;
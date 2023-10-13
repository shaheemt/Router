import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Home from './componets/Home';
import Landing from './componets/Landing';
import About from './componets/About';
import Navbar from './componets/Navbar';

export default function App() {
  return (
     <BrowserRouter>
      <Navbar/>

    <Routes>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="landing" element={<Landing/>}/>
      <Route path="landing" element={<Landing/>}/>



      <Route path="*" element={<Error/>}/>
    </Routes>
     </BrowserRouter>
    



  );
}





function Error(){
  return(
   <div className='Error'>
   <h2>404</h2>
   <p>Pagen Not Found </p>
   </div>
  )
 }

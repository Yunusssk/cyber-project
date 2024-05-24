import {Route, Routes, useParams} from 'react-router-dom';
 import './App.css';
 import Home from './components/HomePage/Navbar';
 import About from './components/AboutPage/About';
 import Contact from './components/ContactPage/Contact';
 import Blog from './components/BlogPage/Blog';
import Body from "./components/HomePage/Body.jsx";
import Footer from "./components/HomePage/Footer.jsx";
import ProductDetail from "./components/ProductDetailPage/ProductDetail.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

 function App() {
   return (
     <div className="App">
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/contactus' element={<Contact/>} />
         <Route path='/blog' element={<Blog/>} />
         <Route path='/favorite' element={<Blog/>} />
         <Route path='/cart' element={<Blog/>} />
         <Route path='/person' element={<Blog/>} />
          {/* eslint-disable-next-line no-undef */}
          <Route path="/productDetail/:id" element={<ProductDetail />} />
       </Routes>
         <Body />
         <Footer />
     </div>
   );
 }

 export default App;
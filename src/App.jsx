import {Route, Routes} from 'react-router-dom';
 import './App.css';
 // import HomePage from './components/HomePage/Home/HomePage.jsx';
 import About from './components/AboutPage/About';
 import Contact from './components/ContactPage/Contact';
 import Blog from './components/BlogPage/Blog';
import Body from "./components/HomePage/Body.jsx";
import Footer from "./components/HomePage/Footer.jsx";
import ProductDetail from "./components/ProductDetailPage/ProductDetail.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/HomePage/Navbar.jsx";
import Smartphones from "./components/CatalogPage/SmartphonesPage/Smartphones.jsx";

 function App() {
   return (
     <div className="App">
         <Navbar />
      <Routes>
         <Route path='/' element={<Body/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/contactus' element={<Contact/>} />
         <Route path='/blog' element={<Blog/>} />
         <Route path='/favorite' element={<Blog/>} />
         <Route path='/cart' element={<Blog/>} />
         <Route path='/person' element={<Blog/>} />
          {/* eslint-disable-next-line no-undef */}
          <Route path="/productDetail/:id" element={<ProductDetail />} />
          <Route path='/catalog/smartphones' element={<Smartphones />} />
          {/*<Route element={<Body />} />*/}
       </Routes>
         <Footer />
     </div>
   );
 }

 export default App;
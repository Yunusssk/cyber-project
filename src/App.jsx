import { Route, Routes } from 'react-router-dom';
 import './App.css';
 import Home from './components/HomePage/Navbar';
 import About from './components/AboutPage/About';
 import Contact from './components/ContactPage/Contact';
 import Blog from './components/BlogPage/Blog';

 function App() {
   return (
     <div className="App">
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/blog' element={<Blog/>} />
       </Routes>
     </div>
   );
 }

 export default App;
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Home/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import Services from './Pages/Home/Services/Services';
import NotFound from './Pages/Shared/404/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
  <div>
  <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/services' element={<Services></Services>}></Route>
      <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
      <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
  </div>
  );
}

export default App;

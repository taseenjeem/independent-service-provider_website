import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blogs from './Pages/Blogs/Blogs';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import MyWorks from './Pages/MyWorks/MyWorks';
import Navbar from './Pages/Navbar/Navbar';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Services from './Pages/Services/Services';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div>

      <Navbar></Navbar>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/courses' element={
          <RequireAuth>
            <Services></Services>
          </RequireAuth>
        }></Route>
        <Route path='/my-works' element={<MyWorks></MyWorks>}></Route>
        <Route path='/about-me' element={<AboutMe></AboutMe>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;

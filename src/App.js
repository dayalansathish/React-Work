
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import PriceList from './Components/PriceList';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import Home from './Components/Home';
import Profile from './Components/Profile';
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Form from './Components/Form';
import { Toaster } from "react-hot-toast"
import Form1 from './Components/Form1';
import Studentlist from './Components/Studentlist';
import StudentDetails from './Components/StudentDetails';
import Studentlist2 from './Components/Studentlist2';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<AboutUs/>}>
        <Route path='profile' element={<Profile/>}/>
      </Route>
      <Route path="/price" element={<PriceList/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/form1" element={<Form1/>}/>
      <Route path="/student/list" element={<Studentlist/>}/>
      <Route path="/student/list2" element={<Studentlist2/>}/>
      <Route path="/student/details/:id" element={<StudentDetails/>}/>

    </Routes>
    <Toaster position="bottom-top-center"/>
    </BrowserRouter>
   
    
    
    </>
  );
}

export default App;

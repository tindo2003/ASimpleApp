import React from "react";
import Nav from "./components/Nav";
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home' 
import About from './components/pages/About'
import axios from 'axios'


import Card from "./components/Card"; 
import data from "./data";

function App() {
  // console.log(data)
  // const new_data = data.map((item) => {
  //   return (
  //     <Card location={item.location} title={item.title} 
  //     googleMapsUrl={item.googleMapsUrl}
  //     startDate={item.endDate}
  //     endDate={item.endDate}
  //     description={item.description}
  //     imageUrl={item.imageUrl}
  //     />
  //   )
  // }
  // )
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router> 
    </>
  )
}

export default App
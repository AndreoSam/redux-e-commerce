import React from 'react'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import View from '../Redux/Components/View/View';
import Single from '../Redux/Components/Single/Single';
import Products from '../Redux/Components/Products/Products';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/prod/:prod" element={<Products />} />
      </Routes>
    </Router>
  )
}

export default Routing
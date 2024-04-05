import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Home } from './pages/home/Home.jsx'
import { MyRoute } from './layouts/MyRoute'



ReactDOM.createRoot(document.getElementById('root')).render(
  // <Home />

  <BrowserRouter>
    <MyRoute />
  </BrowserRouter>
)

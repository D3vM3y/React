import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './navbar.jsx'
import Content from './content.jsx'
import Footer from './footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Content />
    <Footer />
  </React.StrictMode>,
)

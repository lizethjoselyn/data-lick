import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Nav.jsx'
import './index.css'
import PageOne from './pages/Pageone.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <PageOne />
  </React.StrictMode>,
)

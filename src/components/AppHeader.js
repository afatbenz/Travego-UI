import React from 'react'
import '../styles/header.css';

const AppHeader = () => {

  return (
    <div className='header header-sticky mb-4'>
      <div className='container-fluid'>
        <button className='header-toggler ps-1'>=</button>
        <ul className='header-nav' role='navigation'>
          <li class="nav-item"><a class="nav-link" href="#/dashboard">Logout</a></li>
        </ul>
      </div>
      <div class="header-divider"></div>
      <div className='container-fluid'></div>
    </div>
  )
}

export default AppHeader

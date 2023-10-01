import React from 'react'
import '../styles/styles.css';
import '../styles/sidebar.css';
import '../styles/sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AppSidebar = () => {

  const myFunction = () => {
    // Access the 'window' object directly
    const elWindow = window;

    // Check if '_this' and other variables are defined in your actual code
    if (!this.scrollXTicking) {
      elWindow.requestAnimationFrame(this.scrollX);
      this.scrollXTicking = true;
    }
    if (!this.scrollYTicking) {
      elWindow.requestAnimationFrame(this.scrollY);
      this.scrollYTicking = true;
    }
  }

  return (
    <div className="sidebar sidebar-fixed">
        <div className="sidebar-brand d-none d-md-flex" to="/">
        </div>

        <ul className='sidebar-nav'>
          <div data-simplebar="init" idx="0">
            <div className='simplebar-wrapper' style={{margin: 0}}>
              <div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div>
              <div className='simplebar-mask'>
                <div className='simplebar-offset' style={{right: 0, bottom: 0}}>
                  <div className='simplebar-content-wrapper' tabIndex={0} role='region' aria-label='scrollable content' style={{height: 'auto', overflow: 'hidden'}} onClick={myFunction}>
                    <div className='simplebar-content' style={{padding: 0 }}>
                      <li className='nav-item'>
                        <a className='nav-link' href='/dashboard'><FontAwesomeIcon icon="fa-sharp fa-solid fa-check" /> Dashboard</a>
                      </li>
                      <li class="nav-title">Theme</li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ul>
    </div>
  )
}

export default React.memo(AppSidebar)

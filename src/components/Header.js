import React from 'react'
import Image from 'next/image';
import About from './about';

function Header() {
  return (
    <div>
      <header className="sticky animated slideInDown">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <a href="index.html" title="">
                <img
                  src="/image/panda_logo.png"
                  width={112}
                  height={28}
                  alt=""
                />
              </a>
            </div>
            {/* <!--logo end--> */}
            <nav>
              <ul>
                <li>
                  <a className="active" href="index.html" title="">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="\src\components\about.js"
                    title=""
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a href="services.html" title="">
                    Services
                  </a>
                </li>
                <li>
                  <a href="portfolio.html" title="">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="contact.html" title="">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            {/* <!--navigation end--> */}
            {/* <!--mint-funcz end--> */}
            <div className="contact-head-info">
              <h4>010-5678-5857</h4>
              <a href="tel:01056785857" title="ceo_call">
                상담 문의하기
              </a>
            </div>
            {/* <!--contact-head-info end--> */}
            <div className="menu-btnn">
              <div className="menu-btn">
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
              </div>
              {/* <!--menu-bar end--> */}
            </div>
          </div>
          {/* <!--header-content end--> */}
        </div>
      </header>
    </div>
  );
}

export default Header

import React from 'react'

function MainVisual() {
    return (
      <section className="main-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content">
                <h2>
                 감각적인 <br/>공간디자인
                </h2>
                <p>
                  We are tending to the thousands of details it takes to create
                  a custom home tailored to your lifestyle
                </p>
                <a href="contact.html" title="" className="lnk-default">
                  to order <i className="la la-arrow-right"></i>
                  <span></span>
                </a>
                <ul className="banz-list">
                  <li>
                    <div className="mint-fzt">
                      <img src="assets/images/icon1.png" alt="" />
                      <div className="bzn-csd">
                        <h5>Durability</h5>
                        <span>Exclusive 10 year warrantly</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="mint-fzt">
                      <img src="assets/images/icon2.png" alt="" />
                      <div className="bzn-csd">
                        <h5>Modern interior</h5>
                        <span>Exclusive 10 year warrantly</span>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* <!--banz-list end--> */}
                <div className="clearfix"></div>
              </div>
              {/* <!--banner-content end--> */}
            </div>
            <div className="col-lg-6 mainvis_imgbox">
              <img src="/image/Mies-232.jpg" width={617} height={931} alt="" />
            </div>
          </div>
        </div>
      </section>
    );
}

export default MainVisual


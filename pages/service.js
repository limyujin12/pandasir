import React from 'react'
import  SimpleImageSlider  from 'react-simple-image-slider';
  const images = [
    { url: "image/IMG_5556.jpg" },
    { url: "image/IMG_5627.jpg" },
    { url: "image/IMG_5712.jpg" },
  ];

function Service() {

    return (
      <div>
        <div className="about_sc">
          <div className="about_sc_dt">
            <h3>Service</h3>
            <span>Office, Restaurant and House</span>
          </div>
          <div className="service_slider">
            <SimpleImageSlider
              width={896}
              height={504}
              images={images}
              showBullets={true}
              showNavs={true}
            />
          </div>
        </div>

        <div className="Service_offer">
          <div className="service_office">
            <h3>Office</h3>
            <div className="service_img">
              <ul>
                <li>
                  <img src=""></img>
                  <span>장소 이름</span>
                </li>
                <li>
                  <img src=""></img>
                  <span>장소 이름</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="service_restuarant">
            <h3>Restuarant</h3>
            <div className="service_img">
              <ul>
                <li>
                  <img src=""></img>
                  <span>장소 이름</span>
                </li>
                <li>
                  <img src=""></img>
                  <span>장소 이름</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="service_house">
            <h3>house</h3>
            <div className="service_img">
              <ul>
                <li>
                  <img src=""></img>
                  <span>장소 이름</span>
                </li>
                <li>
                  <img src=""></img>
                  <span>장소 이름</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Service;

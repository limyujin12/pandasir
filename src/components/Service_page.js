import React from 'react'
import { SimpleImageSlider } from 'react-simple-image-slider';


function Service_page() {
    return (
      <div>
        <div className="about_sc">
          <div className="about_sc_dt">
            <h3>Service</h3>
            <span>Office, Restaurant and House</span>
          </div>
          <div className="service_slider">
            <reat-SimpleImageSlider></reat-SimpleImageSlider>
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

export default Service_page

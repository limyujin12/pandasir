import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
const images = [
  { url: "image/IMG_5556.jpg" },
  { url: "image/IMG_5627.jpg" },
  { url: "image/IMG_5712.jpg" },
];

function About() {
    return (
      <div>
        <div className="about_inside">
          <div className="about_inside_img">
            <div className="about-img1">
              <img
                src="/image/5bd7eb8692e00.jpg"
                width={311}
                height={466}
                alt=""
              />
            </div>
            <div className="about_img2">
              <img
                src="/image/5bd7fa46a1734.jpg"
                width={289}
                height={229}
                alt=""
              />
            </div>
          </div>
          <div className="about_inside_detail">
            <h3>About Us</h3>
            <span>공간을 파는 판다 선생의 감각적인 인테리어or </span>
          </div>
        </div>
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
        <div className="about_sc_ad">
          <div className="about_sc_ad_dt">
            <h3>Adress</h3>
            <span>찾아오시는 길</span>
          </div>
          <div className="about_sc_ad_img"></div>
          <div className="about_sc_contact">
            <ul>
              <li>대구광역시 남구 대덕로 40길 1</li>
              <li>Mobile:010-5678-5857| Office:053-471-1655| </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default About;

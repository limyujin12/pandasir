import React from 'react'
import SimpleImageSlider from 'react-simple-image-slider';

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
            <span>Office, Restaurant and House Interior Design </span>
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
      </div>
    );
}

export default Service;

import React from 'react'

function about() {
    return (
      <div className="about_inside">
        <div className="about_inside_img">
          <div className="about-img1">
            <img
              src="/image/1.jpg"
              width={311}
              height={466}
              alt=""
            />
          </div>
          <div className="about_img2">
            <img src="/image/imweb2.jpg" width={289} height={229} alt="" />
          </div>
        </div>
        <div className="about_inside_detail">
          <h3>About Us</h3>
          <span>공간을 파는 판다 선생의 감각적인 인테리어</span>
        </div>
      </div>
    );
}

export default about

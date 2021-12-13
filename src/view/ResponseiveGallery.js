import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import Masonry from "react-masonry-component";
import "react-image-lightbox/style.css";

function ResponseiveGallery({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images2 = [
    "/image/img1.jpg",
    "/image/img2.jpg",
    "/image/img3.jpg",
    "/image/img4.jpg",
    "/image/img5.jpg",
    "/image/img6.jpg",
    "/image/img7.jpg",
    "/image/img8.jpg",
    "/image/img9.jpg",
    "/image/img10.jpg",
    "/image/img11.jpg",
    "/image/img12.jpg",
    "/image/img13.jpg",
    "/image/img14.jpg",
    "/image/img15.jpg",
    "/image/img16.jpg",
    "/image/img17.jpg",
    "/image/img18.jpg",
    "/image/img19.jpg",
    "/image/img20.jpg",
  ];

  const masonryOptions = {
    transitionDuration: 0,
    gutter: 10,
    percentPosition: true,
    columnWidth: 300,
  };

  const openLightbox = (index, event) => {
    event.preventDefault();
    setIsOpen(true);
    setPhotoIndex(index);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setPhotoIndex(0);
  };

  if (!images) return;

  return (
    <>
      <Masonry
        className={"grid"} // default ''
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={true}
      >
        {images.map((obj, i) => (
          <div key={i} className={`grid-item`}>
            <img
              onClick={(e) => openLightbox(i, e)}
              src={obj.thumbnail}
              className={`gallery-img`}
            />
          </div>
        ))}
      </Masonry>
      {isOpen && (
        <Lightbox
          mainSrc={images2[photoIndex]}
          nextSrc={images2[(photoIndex + 1) % images2.length]}
          prevSrc={images2[(photoIndex + images2.length - 1) % images2.length]}
          onCloseRequest={() => closeLightbox()}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images2.length - 1) % images2.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images2.length)
          }
        />
      )}
    </>
  );
}

export default ResponseiveGallery;

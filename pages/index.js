import React, { useState, useCallback, useEffect } from "react";
import Header from "../src/components/Header";
import MainVisual from "../src/components/MainVisual";
import About from "../src/components/about";
import ResponseiveGallery from "../src/view/ResponseiveGallery";

const DEFAULT_IMAGES = [
  {
    src: "/image/img1.jpg",
    thumbnail: "/image/img1.jpg",
    caption: "Image 1",
  },
  {
    src: "/image/img2.jpg",
    thumbnail: "/image/img2.jpg",
    caption: "Image 2",
  },
  {
    src: "/image/img3.jpg",
    thumbnail: "/image/img3.jpg",
    caption: "Image 3",
  },
  {
    src: "/image/img4.jpg",
    thumbnail: "/image/img4.jpg",
    caption: "Image 4",
  },
  {
    src: "/image/img5.jpg",
    thumbnail: "/image/img5.jpg",
    caption: "Image 5",
  },
  {
    src: "/image/img6.jpg",
    thumbnail: "/image/img6.jpg",
    caption: "Image 1",
  },
  {
    src: "/image/img7.jpg",
    thumbnail: "/image/img7.jpg",
    caption: "Image 2",
  },
  {
    src: "/image/img8.jpg",
    thumbnail: "/image/img8.jpg",
    caption: "Image 3",
  },
  {
    src: "/image/img9.jpg",
    thumbnail: "/image/img9.jpg",
    caption: "Image 4",
  },
  {
    src: "/image/img10.jpg",
    thumbnail: "/image/img10.jpg",
    caption: "Image 5",
  },
  {
    src: "/image/img1.jpg",
    thumbnail: "/image/img11.jpg",
    caption: "Image 1",
  },
  {
    src: "/image/img2.jpg",
    thumbnail: "/image/img12.jpg",
    caption: "Image 2",
  },
  {
    src: "/image/img3.jpg",
    thumbnail: "/image/img13.jpg",
    caption: "Image 3",
  },
  {
    src: "/image/img4.jpg",
    thumbnail: "/image/img14.jpg",
    caption: "Image 4",
  },
  {
    src: "/image/img5.jpg",
    thumbnail: "/image/img15.jpg",
    caption: "Image 5",
  },
  {
    src: "/image/img6.jpg",
    thumbnail: "/image/img16.jpg",
    caption: "Image 1",
  },
  {
    src: "/image/img7.jpg",
    thumbnail: "/image/img17.jpg",
    caption: "Image 2",
  },
  {
    src: "/image/img8.jpg",
    thumbnail: "/image/img18.jpg",
    caption: "Image 3",
  },
  {
    src: "/image/img9.jpg",
    thumbnail: "/image/img19.jpg",
    caption: "Image 4",
  },
  {
    src: "/image/img10.jpg",
    thumbnail: "/image/img20.jpg",
    caption: "Image 5",
  },
];

function index() {
  return (
    <div>
      <Header />
      <MainVisual />
      <About />
      <ResponseiveGallery
        images={DEFAULT_IMAGES.map(({ src, thumbnail, caption }) => ({
          src,
          thumbnail,
          caption,
        }))}
      />
      {/* <div className="gallery_img">
        <Gallery photos={photos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </div> */}
    </div>
  );
}

export default index;

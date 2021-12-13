import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../src/page/main/photos";
import Header from "../src/components/Header";
import MainVisual from "../src/components/MainVisual";
import About from "../src/components/about";

function index() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const imgArray = [];

  useEffect(async () => {
    var img = new Image();
    var _width, _height;
    for (let i = 1; i < 46; i++) {
      img.src = "/image/img" + i + ".jpg";
      const wait = (timeToDelay) =>
        new Promise((resolve) => setTimeout(resolve, timeToDelay));
      _width = img.width;
      _height = img.height;
      imgArray.push(_width + "*" + _height);
      await wait(10);
      // await setTimeout(() => {
      //   _width = img.width;
      //   _height = img.height;
      //   imgArray.push(_width + "*" + _height);
      // }, i * 100);
    }

    console.log("imgArray", imgArray);
  }, []);

  return (
    <div>
      <Header />
      <MainVisual />
      <About />

      <div className="gallery_img">
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
      </div>
    </div>
  );
}

export default index;

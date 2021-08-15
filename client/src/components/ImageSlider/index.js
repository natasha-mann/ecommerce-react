import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from "react-image-gallery";
import { isMobile } from "react-device-detect";

const getThumbnailPosition = () => {
  if (isMobile) {
    return "bottom";
  } else {
    return "left";
  }
};

const ImageSlider = (props) => {
  return (
    <ImageGallery
      items={props.images}
      thumbnailPosition={getThumbnailPosition()}
      showFullscreenButton={false}
      showPlayButton={false}
      showBullets={true}
    />
  );
};

export default ImageSlider;

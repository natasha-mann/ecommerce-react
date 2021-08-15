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

const ImageSlider = ({
  items,
  showThumbnails,
  autoPlay,
  showNav,
  showBullets,
}) => {
  return (
    <ImageGallery
      items={items}
      thumbnailPosition={getThumbnailPosition()}
      showFullscreenButton={false}
      showPlayButton={false}
      showBullets={showBullets}
      showThumbnails={showThumbnails}
      autoPlay={autoPlay}
      showNav={showNav}
    />
  );
};

export default ImageSlider;

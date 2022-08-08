import Image from 'next/image';

import ImageGallery from 'react-image-gallery';

import house1 from '../public/houses/house1.jpg';
import house2 from '../public/houses/house2.jpg';
import house3 from '../public/houses/house3.jpg';
import house4 from '../public/houses/house4.jpg';

const ListingDetail = () => {
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  return (
    <div className="detail">
      <ImageGallery
        // ref={(i) => (this._imageGallery = i)}
        items={images}
        // onClick={this._onImageClick.bind(this)}
        // onImageLoad={this._onImageLoad}
        // onSlide={this._onSlide.bind(this)}
        // onPause={this._onPause.bind(this)}
        // onScreenChange={this._onScreenChange.bind(this)}
        // onPlay={this._onPlay.bind(this)}
        // infinite={this.state.infinite}
        // showBullets={this.state.showBullets}
        // showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
        // showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
        // showThumbnails={this.state.showThumbnails}
        // showIndex={this.state.showIndex}
        // showNav={this.state.showNav}
        // isRTL={this.state.isRTL}
        // thumbnailPosition={this.state.thumbnailPosition}
        // slideDuration={parseInt(this.state.slideDuration)}
        // slideInterval={parseInt(this.state.slideInterval)}
        // slideOnThumbnailOver={this.state.slideOnThumbnailOver}
        // additionalClass="app-image-gallery"
        // useWindowKeyDown={this.state.useWindowKeyDown}
      />
    </div>
  );
};

export default ListingDetail;

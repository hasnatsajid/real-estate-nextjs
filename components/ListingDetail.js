import Image from 'next/image';

import ImageGallery from 'react-image-gallery';

import { BiBed, BiBath, BiCar } from 'react-icons/bi';
import { FaHouseUser } from 'react-icons/fa';

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
        showPlayButton={false}
        showThumbnails={false}
      />

      <div className="listing-content">
        <div className="wrapper mt-5">
          <div className="main-content">
            <div className="price">${1198000}</div>
            <div className="meta">
              <div className="beds">
                <BiBed />
                <span>3</span>
              </div>
              <div className="baths">
                <BiBath />
                <span>2</span>
              </div>
              <div className="parking">
                <BiCar />
                <span>1</span>
              </div>
              <div className="area"></div>
            </div>
            <div className="description"></div>
            <div className="Amenities"></div>
          </div>
          <div className="agent-section"></div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;

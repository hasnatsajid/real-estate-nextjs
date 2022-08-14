import Image from 'next/image';

import ImageGallery from 'react-image-gallery';

import { BiBed, BiBath, BiCar, BiRuler, BiCctv } from 'react-icons/bi';
import { FaHouseUser, FaSwimmingPool } from 'react-icons/fa';
import { CgGym } from 'react-icons/cg';
import { MdSecurity, MdOutlinePark } from 'react-icons/md';
import { GiHomeGarage } from 'react-icons/gi';

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
              <div className="area">
                <BiRuler />
                <span>1,180 sqft</span>
              </div>
            </div>
            <div className="description">
              <h3>Description</h3>
              <div>
                <p>This mid terrace villa is in a residential cul de sac in Linwood and would be a good option for anyone looking in the area.</p>
                <p>
                  The property comprises and entrance hallway; generous lounge with windows to the front and rear as well as access to the kitchen; fitted
                  kitchen with space for appliances and access to the garden; three good sized bedrooms on the upper level; four piece family bathroom with wash
                  hand basin, WC, bath and shower cubicle; gas central heating; double glazing.
                </p>
              </div>
            </div>
            <div className="amenities">
              <h3>Amenities</h3>
              <div className="wrapper">
                <div className="amenity">
                  <CgGym />
                  <span>Gym</span>
                </div>
                <div className="amenity">
                  <FaSwimmingPool />
                  <span>Swimming Pool</span>
                </div>
                <div className="amenity">
                  <MdSecurity />
                  <span>24 hour security</span>
                </div>
                <div className="amenity">
                  <GiHomeGarage />
                  <span>Garage</span>
                </div>
                <div className="amenity">
                  <MdOutlinePark />
                  <span>Park</span>
                </div>
              </div>
            </div>
          </div>
          <div className="agent-section">new</div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;

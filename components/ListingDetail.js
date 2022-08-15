import Image from 'next/image';
import { useState, useEffect } from 'react';

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

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

const ListingDetail = (props) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.galleryID,
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

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
    <>
      {/* <div className="row">
        <div id="gallery--header-home" className="pswp-docs__home-gallery">
          <figure class="pswp-docs__home-gallery-item">
            <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-ny6qxqv_m04-unsplash_snrzpf/luca-bravo-ny6qxqv_m04-unsplash_snrzpf_c_scale,w_2500.jpg">
              <img
                src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-ny6qxqv_m04-unsplash_snrzpf/luca-bravo-ny6qxqv_m04-unsplash_snrzpf_c_scale,w_664.jpg"
                alt=""
              />
            </a>
          </figure>
          <figure class="pswp-docs__home-gallery-item">
            <a
              style={{ paddingBottom: '100%' }}
              href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-O453M2Liufs-unsplash_qqt53u/luca-bravo-O453M2Liufs-unsplash_qqt53u_c_scale,w_2500.jpg"
            >
              <img
                src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-O453M2Liufs-unsplash_qqt53u/luca-bravo-O453M2Liufs-unsplash_qqt53u_c_scale,w_300.jpg"
                alt=""
              />
            </a>
          </figure>
          <figure class="pswp-docs__home-gallery-item">
            <a href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-VowIFDxogG4-unsplash_ibrktu/luca-bravo-VowIFDxogG4-unsplash_ibrktu_c_scale,w_2500.jpg">
              <img
                src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-VowIFDxogG4-unsplash_ibrktu/luca-bravo-VowIFDxogG4-unsplash_ibrktu_c_scale,w_300.jpg"
                alt=""
              />
            </a>
          </figure>
          <figure class="pswp-docs__home-gallery-item">
            <a
              style={{ paddingBottom: '100%' }}
              href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-zAjdgNXsMeg-unsplash_q6zdih/luca-bravo-zAjdgNXsMeg-unsplash_q6zdih_c_scale,w_2500.jpg"
            >
              <img
                src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-zAjdgNXsMeg-unsplash_q6zdih/luca-bravo-zAjdgNXsMeg-unsplash_q6zdih_c_scale,w_300.jpg"
                alt=""
              />
            </a>
          </figure>
          <figure class="pswp-docs__home-gallery-item">
            <a
              style={{ paddingBottom: '100%' }}
              href="https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-A-fubu9QJxE-unsplash_jxy5p8/luca-bravo-A-fubu9QJxE-unsplash_jxy5p8_c_scale,w_2500.jpg"
            >
              <img
                src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/home-demo/luca-bravo-A-fubu9QJxE-unsplash_jxy5p8/luca-bravo-A-fubu9QJxE-unsplash_jxy5p8_c_scale,w_300.jpg"
                alt=""
              />
            </a>
          </figure>
        </div>
      </div> */}

      <div className="container">
        <div id="gallery--header-home" className="pswp-docs__home-gallery">
          <div className="row">
            <div className="pswp-gallery" id={props.galleryID}>
              {props.images.map((image, index) => (
                <figure class="pswp-docs__home-gallery-item">
                  <a
                    href={image.largeURL}
                    // data-pswp-width={image.width}
                    // data-pswp-height={image.height}
                    key={props.galleryID + '-' + index}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={image.largeURL} alt="" />
                  </a>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );

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

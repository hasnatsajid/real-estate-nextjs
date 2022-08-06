import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Image from 'next/image';

import { IoSearchOutline } from 'react-icons/io5';

import Home from '../public/house.png';

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="hero">
        <div className="search-container">
          <div className="search-bar">
            <h1>Search your property</h1>
            <div className="search-input">
              <input type="search" name="search" id="search" placeholder="Search Location" />
              <button>
                <IoSearchOutline />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;

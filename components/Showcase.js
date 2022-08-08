import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Image from 'next/image';

import Home from '../public/house.png';

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="hero">
        <div className="search-container">
          <div className="search-bar">
            <h1>Search your property</h1>
            <input type="search" name="search" id="search" placeholder="Search Location" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;

import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Image from 'next/image';

import Home from '../public/house.png';

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="hero">
        {/* <Image src={Home} alt="Home sweet home" /> */}

        <div className="search-container">
          <div className="search-bar">
            <input type="search" name="search" id="search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;

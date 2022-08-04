import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Image from 'next/image';

import Home from '../public/house.png';

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="hero">
        <div className="cover">
          <Image src={Home} alt="Home sweet home" />
        </div>

        <div className="search-container">
          <input type="search" name="search" id="search" />
        </div>
      </div>
    </div>
  );
};

export default Showcase;

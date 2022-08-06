import Image from 'next/image';
import { BiBed, BiBath, BiCar } from 'react-icons/bi';

const Listing = ({ img }) => {
  return (
    <article className="listing">
      <div className="listing__container">
        <div className="listing__agent"></div>
        <div className="listing__featured-img">
          <Image src={img} width="550px" height="450px" />
        </div>
        <div className="listing__details">
          <div className="listing__details-price">$325,000</div>
          <div className="listing__details-title">3 bedroom house for sale</div>
          <div className="listing__details-additional">
            <BiBed />
            <span className="beds">2</span>
            <BiBath />
            <span className="baths">1</span>
            <BiCar />
            <span className="parking">1</span>
            <span className="property-type">House</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Listing;

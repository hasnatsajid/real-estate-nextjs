import Image from 'next/image';
import Link from 'next/link';
import { BiBed, BiBath, BiCar } from 'react-icons/bi';
import { FaHouseUser } from 'react-icons/fa';

const Listing = ({ img, Agent }) => {
  return (
    <article className="listing">
      <Link href="/buy">
        <div className="listing__container">
          <div className="listing__agent">
            <div className="listing__agent-name">
              <span>
                <FaHouseUser />
              </span>
              Johny mony
            </div>
            <div className="listing__agent-company">
              <Image src={Agent} />
            </div>
          </div>
          <div className="listing__featured-img">
            <Image src={img} />
          </div>
          <div className="listing__details">
            <div className="listing__details-price">$325,000</div>
            <div className="listing__details-title">3 bedroom house for sale</div>
            <div className="listing__details-additional">
              <div className="prop">
                <BiBed />
                <span className="beds">2</span>
              </div>
              <div className="prop">
                <BiBath />
                <span className="baths">1</span>
              </div>
              <div className="prop">
                <BiCar />
                <span className="parking">1</span>
              </div>
              <span className="property-type">House</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Listing;

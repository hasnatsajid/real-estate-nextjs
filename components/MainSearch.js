import { IoSearchOutline } from 'react-icons/io5';
import SearchBlock from './SearchBlock';

const MainSearch = () => {
  return (
    <div className="main-search">
      <div className="search-container">
        <div className="search-items">
          <div className="search-item active">
            <button>Buy</button>
            <span></span>
          </div>
          <div className="search-item">Rent</div>
          <div className="search-item">Agents</div>
        </div>
        <div className="search-block">
          <SearchBlock />
          <button className="filters">Filters</button>
          <button className="search">Search</button>
        </div>
      </div>
      {/* <div className="search-input">
        <input type="search" name="search" id="search" placeholder="Search Location" />
        <button>
          <IoSearchOutline />
        </button>
      </div> */}
    </div>
  );
};

export default MainSearch;

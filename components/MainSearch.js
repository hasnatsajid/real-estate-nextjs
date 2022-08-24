import { useState } from 'react';
import SearchBlock from './SearchBlock';

import Modal from './UI/Modal';

const MainSearch = () => {
  const [isFilterActive, setIsFilterActive] = useState(false);

  const toggleFilter = () => {
    setIsFilterActive((prev) => !prev);
  };

  return (
    <div className="main-search">
      <div className="search-container">
        <div className="search-items">
          <div className="search-item active">
            <p>Buy</p>
            <span></span>
          </div>
          <div className="search-item">Rent</div>
        </div>
        <div className="search-block">
          <SearchBlock />
          <button className="filters" onClick={toggleFilter}>
            Filters
          </button>
          <button className="search">Search</button>
        </div>
      </div>
      {isFilterActive && <Modal heading="Filters" toggleFilter={toggleFilter} />}
    </div>
  );
};

export default MainSearch;

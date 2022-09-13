import { useState } from 'react';
import SearchBlock from './SearchBlock';

import { IoLocationOutline } from 'react-icons/io5';

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
        <div className="search-block focused">
          <SearchBlock />
          <button className="filters" onClick={toggleFilter}>
            Filters
          </button>
          <button className="search">Search</button>
        </div>
        <div className="search-drawer">
          <div className="item">
            <span>
              <IoLocationOutline />
            </span>
            <div className="area">Ontario, Canada</div>
          </div>
          <div className="item">
            <span>
              <IoLocationOutline />
            </span>
            <div className="area">Ontario, Canada</div>
          </div>
          <div className="item">
            <span>
              <IoLocationOutline />
            </span>
            <div className="area">Ontario, Canada</div>
          </div>
          <div className="item">
            <span>
              <IoLocationOutline />
            </span>
            <div className="area">Ontario, Canada</div>
          </div>
        </div>
      </div>
      {isFilterActive && (
        <Modal heading="Filters" toggleFilter={toggleFilter}>
          <div className="filters-modal">
            <div className="field">
              <h2>Property Type</h2>
              <div className="content">
                <div className="types">
                  <div className="type">
                    <label htmlFor="house">House</label>
                    <input type="checkbox" />
                  </div>
                  <div className="type">
                    <label htmlFor="house">Condo</label>
                    <input type="checkbox" />
                  </div>
                  <div className="type">
                    <label htmlFor="house">Commercial</label>
                    <input type="checkbox" />
                  </div>
                  <div className="type"></div>
                </div>
              </div>
            </div>

            <hr className="subdivider" />

            <div className="field">
              <h2>Price</h2>
              <div className="content">
                <div className="prices">
                  <div className="min">
                    <div className="form-input">
                      <div className="label">
                        <label htmlFor="">Min</label>
                      </div>
                      <div className="input">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="max">
                    <div className="form-input">
                      <div className="label">
                        <label htmlFor="">Max</label>
                      </div>
                      <div className="input">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="subdivider" />

            <div className="field">
              <h2>Beds</h2>
              <div className="content">
                <div className="prices">
                  <div className="min">
                    <div className="form-input">
                      <div className="label">
                        <label htmlFor="">Min</label>
                      </div>
                      <div className="input">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="max">
                    <div className="form-input">
                      <div className="label">
                        <label htmlFor="">Max</label>
                      </div>
                      <div className="input">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr className="subdivider" />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default MainSearch;

import { useState } from 'react';
import { Range } from 'react-range';

const AdvanceSearch = () => {
  const [values, setValues] = useState([50000]);

  return (
    <div className="advanceSearch">
      <div className="wrapper">
        <div className="row g-3">
          <div className="col-sm-3">
            <input type="text" className="form-control" placeholder="Select Location" aria-label="City" />
          </div>
          <div className="col-sm-2">
            <select className="form-select" id="autoSizingSelect">
              <option value>Buy or Rent</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div className="col-sm-2">
            <select className="form-select" id="autoSizingSelect">
              <option value>Property Type</option>
              <option value="buy">House</option>
              <option value="rent">Condo</option>
              <option value="rent">Commercial</option>
            </select>
          </div>
          <div className="col-sm-2">
            <select className="form-select" id="autoSizingSelect">
              <option value>Beds & Baths</option>
              <option value="buy">House</option>
              <option value="rent">Condo</option>
              <option value="rent">Commercial</option>
            </select>
          </div>

          <div className="col-sm-3">
            <label htmlFor="price">Price</label>
            <Range
              step={10}
              min={100}
              max={500000000}
              values={values}
              onChange={(values) => setValues(values)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '5px',
                    width: '100%',
                    backgroundColor: '#ccc',
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '18px',
                    width: '18px',
                    borderRadius: '50%',
                    backgroundColor: '#999',
                  }}
                />
              )}
            />
          </div>
          <div className="col-sm">
            <select className="form-select" id="autoSizingSelect">
              <option value>More Filters</option>
              <option value="buy">House</option>
              <option value="rent">Condo</option>
              <option value="rent">Commercial</option>
            </select>
          </div>
          <div className="col-sm">
            <input type="button" className="form-control search-btn" value="Search" placeholder="Zip" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceSearch;

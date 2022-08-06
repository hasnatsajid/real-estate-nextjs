const AdvanceSearch = () => {
  return (
    <div className="advanceSearch">
      <div className="wrapper">
        <div class="row g-3">
          <div class="col-sm-3">
            <input type="text" class="form-control" placeholder="Select Location" aria-label="City" />
          </div>
          <div class="col-sm-2">
            <select class="form-select" id="autoSizingSelect">
              <option selected>Buy or Rent</option>
              <option value="buy">Buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>
          <div class="col-sm-2">
            <select class="form-select" id="autoSizingSelect">
              <option selected>Property Type</option>
              <option value="buy">House</option>
              <option value="rent">Condo</option>
              <option value="rent">Commercial</option>
            </select>
          </div>
          <div class="col-sm-2">
            <select class="form-select" id="autoSizingSelect">
              <option selected>Beds & Baths</option>
              <option value="buy">House</option>
              <option value="rent">Condo</option>
              <option value="rent">Commercial</option>
            </select>
          </div>
          <div class="col-sm">
            <select class="form-select" id="autoSizingSelect">
              <option selected>Price</option>
              <option value="buy">House</option>
              <option value="buys">{/* <input type="range" class="form-range" min="100" max="500000000" id="customRange2" /> */}</option>
            </select>
          </div>
          <div class="col-sm">
            <select class="form-select" id="autoSizingSelect">
              <option selected>More Filters</option>
              <option value="buy">House</option>
              <option value="rent">Condo</option>
              <option value="rent">Commercial</option>
            </select>
          </div>
          <div class="col-sm">
            <input type="button" class="form-control search-btn" value="Search" placeholder="Zip" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvanceSearch;

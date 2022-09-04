const PropertyDetail = () => {
  return (
    <div className="property-details">
      <div className="title">
        <h1>Property Details</h1>
      </div>

      <div className="sub-title">
        <h3>What type of property do you have?</h3>
      </div>

      <div className="types">
        <select name="types" id="types">
          <option value="house" selected>
            House
          </option>
          <option value="apartment">Apartment</option>
          <option value="commercial">Commercial</option>
        </select>
      </div>
      <div className="beds">
        <h3>Bedrooms</h3>
        <div className="counter">
          <button className="button">
            <div className="plus">+</div>
          </button>
          <div className="count">5</div>
          <button className="button">
            <div className="minus">-</div>
          </button>
        </div>
      </div>
      <div className="baths">
        <h3>Bathrooms</h3>
        <div className="counter">
          <button className="button">
            <div className="plus">+</div>
          </button>
          <div className="count">5</div>
          <button className="button">
            <div className="minus">-</div>
          </button>
        </div>
      </div>
      <div className="parking">
        <h3>Parking Spaces</h3>
        <div className="counter">
          <button className="button">
            <div className="plus">+</div>
          </button>
          <div className="count">5</div>
          <button className="button">
            <div className="minus">-</div>
          </button>
        </div>
      </div>

      <div className="form-input">
        <div className="label">
          <label htmlFor="">Land area (optional) </label>
        </div>
        <div className="input">
          <input type="number" placeholder="sqm" />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;

const PropertyAmenities = () => {
  return (
    <div className="property-amenities">
      <div className="title">
        <h1>Property Features</h1>
      </div>

      <div className="sub-title">
        <h3>Make your property easier to find by selecting all the features below that apply.</h3>
      </div>

      <div className="amenities">
        <div className="amenities-wrapper">
          <div className="amenity">
            <div className="checkbox">
              <input type="checkbox" name="" id="" />
            </div>
            <label htmlFor="balcony">Balcony</label>
          </div>
          <div className="amenity">
            <div className="checkbox">
              <input type="checkbox" name="" id="" />
            </div>
            <label htmlFor="furnished">Furnished</label>
          </div>
          <div className="amenity">
            <div className="checkbox">
              <input type="checkbox" name="" id="" />
            </div>
            <label htmlFor="swimming">Swimming pool</label>
          </div>
          <div className="amenity">
            <div className="checkbox">
              <input type="checkbox" name="" id="" />
            </div>
            <label htmlFor="garage">Garage</label>
          </div>
          <div className="amenity">
            <div className="checkbox">
              <input type="checkbox" name="" id="" />
            </div>
            <label htmlFor="solar">Solar</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyAmenities;

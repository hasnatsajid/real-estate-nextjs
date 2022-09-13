const PropertyDescription = () => {
  return (
    <div className="property-description">
      <div className="title">
        <h1>Listing Description</h1>
      </div>

      <div className="description">
        <div className="form-input">
          <div className="label">
            <label htmlFor="">Headline</label>
          </div>
          <div className="input">
            <input type="text" />
          </div>
        </div>
        <div className="form-input">
          <div className="label">
            <label htmlFor="">Description</label>
          </div>
          <div className="input">
            <textarea name="description"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDescription;

const PropertyContact = () => {
  return (
    <div className="property-contact">
      <div className="title">
        <h1>Contact details</h1>
      </div>

      <div className="sub-title">
        <h3>Enter your contact details below for billing, and listing purposes.</h3>
      </div>

      <div className="contact">
        <div className="form-input">
          <div className="label">
            <label htmlFor="">Name </label>
          </div>
          <div className="input">
            <input type="text" placeholder="" />
          </div>
        </div>
        <div className="form-input">
          <div className="label">
            <label htmlFor="">Email</label>
          </div>
          <div className="input">
            <input type="email" placeholder="" />
          </div>
        </div>
        <div className="form-input">
          <div className="label">
            <label htmlFor="">Mobile number </label>
          </div>
          <div className="input">
            <input type="tel" placeholder="" />
          </div>
        </div>
        <div className="form-input">
          <div className="label">
            <label htmlFor="">Profile Pic </label>
          </div>
          <div className="input">
            <input type="file" placeholder="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyContact;

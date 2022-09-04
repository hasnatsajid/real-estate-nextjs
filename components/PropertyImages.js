const PropertyImages = () => {
  const onAddingPhoto = (e) => {
    console.log(e);
  };

  return (
    <div className="property-images">
      <div className="title">
        <h1>Images and Video</h1>
      </div>

      <div className="sub-title">
        <h2>Photo gallery</h2>
      </div>

      <div className="images">
        <div className="photo">
          <input type="file" onChange={onAddingPhoto} />
        </div>
      </div>

      <div className="videos">
        <h2>Video</h2>
        <div className="form-input">
          <div className="label">
            <label htmlFor="">Youtube link (optional) </label>
          </div>
          <div className="input">
            <input type="number" placeholder="sqm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyImages;

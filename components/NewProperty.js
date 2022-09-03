import { newPropertyOptions } from '../utils/newPropertyOptions';

const NewProperty = () => {
  return (
    <div className="new-property">
      <div className="option-bar">
        {newPropertyOptions.map((element) => {
          return (
            <div className="option active" key={element.id}>
              {element.option}
            </div>
          );
        })}
      </div>

      <div className="detail-wrapper">
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
        </div>
      </div>
    </div>
  );
};

export default NewProperty;

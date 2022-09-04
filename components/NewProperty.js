import Image from 'next/image';
import { newPropertyOptions } from '../utils/newPropertyOptions';
import PropertyAmenities from './PropertyAmenities';
import PropertyDescription from './PropertyDescription';
import PropertyDetail from './PropertyDetail';
import PropertyImages from './PropertyImages';
import PropertyPricing from './PropertyPricing';
import Divider from './UI/Divider';

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
        <PropertyDetail />
        <Divider />
        <PropertyAmenities />
        <Divider />
        <PropertyPricing />
        <Divider />
        <PropertyDescription />
        <Divider />
        <PropertyImages />
      </div>
    </div>
  );
};

export default NewProperty;

import { newPropertyOptions } from '../utils/newPropertyOptions';

const NewProperty = () => {
  return (
    <div className="new-property">
      <div className="option-bar">
        {newPropertyOptions.map((element) => {
          return (
            <div className="option active" key={ElementInternals.id}>
              {element.option}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewProperty;

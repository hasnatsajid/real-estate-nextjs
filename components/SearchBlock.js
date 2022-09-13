const SearchBlock = () => {
  const onFocusing = () => {
    console.log('focused');
  };
  return (
    <div className="search-input">
      <input type="search" name="" id="" placeholder="Search province or city" onFocus={onFocusing} />
    </div>
  );
};

export default SearchBlock;

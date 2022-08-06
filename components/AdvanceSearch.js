const AdvanceSearch = () => {
  return (
    <div className="advanceSearch">
      <div class="row g-3">
        <div class="col-sm-7">
          <input type="text" class="form-control" placeholder="Select Location" aria-label="City" />
        </div>
        <div class="col-sm">
          <input type="text" class="form-control" placeholder="State" aria-label="State" />
        </div>
        <div class="col-sm">
          <input type="text" class="form-control" placeholder="Zip" aria-label="Zip" />
        </div>
      </div>
    </div>
  );
};

export default AdvanceSearch;

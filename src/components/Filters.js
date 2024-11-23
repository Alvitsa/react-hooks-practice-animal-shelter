import React from "react";

function Filters({ filters, onChangeType, onFindPetsClick }) {
  const handleChange = (event) => {
    onChangeType(event.target.value);
  };

  return (
    <div className="ui form">
      <h3>
        <label htmlFor="type">Animal type</label>
      </h3>
      <div className="field">
        <select
          id="type"
          name="type"
          aria-label="Animal type" // Accessibility improvement
          onChange={handleChange}
          value={filters.type}
        >
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>
      <div className="ui primary button" onClick={onFindPetsClick}>
        Find pets
      </div>
    </div>
  );
}

export default Filters;
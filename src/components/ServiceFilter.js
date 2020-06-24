import React from "react";
import { useDispatch } from "react-redux";
import { filterService } from "../actions/actionCrud";

function ServiceFilter() {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    evt.preventDefault();
    const { value } = evt.target;
    dispatch(filterService(value));
  };

  return (
    <div className="filter_form">
      <label htmlFor="filter">Фильтр: </label>
      <input className="filter_input" name="filter" onChange={handleChange} />
    </div>
  );
}

export default ServiceFilter;

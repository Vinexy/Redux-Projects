import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setInfo } from "../redux/CovidSlice";

const Dropdown = () => {
  const dispatch = useDispatch();
  const iso = useSelector((state) => state.covid.countries);
  const handleChange = async (event) => {
    const response = await axios(
      `https://covid19.mathdro.id/api/countries/${event.target.value}`
    );
    dispatch(setInfo(response.data));
  };
  return (
    <div className="dropdownContainer">
      <select defaultValue={"USA"} onChange={handleChange}>
        {iso.map((item) => (
          <option  value={item.iso3}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

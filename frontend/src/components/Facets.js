import React, { useEffect, useState } from "react";
import "../css/Facets.css";
import dropdownIcon from "../images/dropdownIcon.png";

function Checkbox(props) {
  const [checked, setChecked] = useState(false);
  const label = props.label;

  return (
    <li className="Checkbox">
      <label>
        <input type="checkbox" onInput={() => setChecked(!checked)} />
        {label}
      </label>
    </li>
  );
}

function Dropdown(props) {
  const [labels, setLabels] = useState(null);  // change from state to regular const or prob some weird hook
  const [isOpened, setIsOpened] = useState(false);  // useState to conditionally render or set to display: none and change?
                                                    // so many ways to do the second one that idek what is best
                                                                                               
  const regions = [
    "Capital Region",
    "Central Maryland",
    "Eastern Shore",
    "Southern Maryland",
    "Western Maryland",
  ];

  // maybe use different hook here idrk
  useEffect(() => {
    if (props.category === "Region") {
      setLabels(regions);
    } else if (props.category === "City") {
      fetch("api/facets/cities")
        .then((data) => data.json())
        .then((data) => setLabels(data.cities));
    } else if (props.category === "Type") {
      fetch("api/facets/types")
        .then((data) => data.json())
        .then((data) => setLabels(data.types));
    } else if (props.category === "Amenities") {
      fetch("api/facets/amenities")
        .then((data) => data.json())
        .then((data) => setLabels(data.amenities));
    }
  }, []);

  return (
    <div>
      <h2 className="Dropdown__title">
        {props.category}
        <input
          type="image"
          src={dropdownIcon}
          alt=""
          onClick={() => setIsOpened(!isOpened)}
          className="Dropdown__icon"
        />
      </h2>
      <ul className="Dropdown__contents">
        {isOpened
          ? labels.map((label, index) => <Checkbox label={label} key={index} />)
          : null}
      </ul>
    </div>
  );
}

export default function Facets() {
  // use closure to pass state to view?

  // function updateFilters() {}

  return (
    <div className="Facets">
      <Dropdown category="Region" />
      <Dropdown category="City" />
      <Dropdown category="Type" />
      <Dropdown category="Amenities" />
    </div>
  );
}

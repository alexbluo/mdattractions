import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import GoogleMapReact from "google-map-react";
import Slider from "rc-slider";
import Marker from "./Marker";
import "rc-slider/assets/index.css";

export default function Map({ center }) {
  const [sliderValue, setSliderValue] = useState(20); // in km, not passed to query
  const [searchRadius, setSearchRadius] = useState(sliderValue * 1000); // in m, passed to query
  const [selectedMarker, setSelectedMarker] = useState(null);

  const { data, error, isLoading, isError } = useQuery(
    ["attraction", searchRadius],
    async () => {
      const queryParam = `?lng=${center.lng}&lat=${center.lat}&searchRadius=${searchRadius}`;
      const res = await axios.get(`/api/attractions/near${queryParam}`);
      return res.data; // return to "data"
    }
  );

  function handleInput(event) {
    let value = event.target.value;
    if (value > 500) value = 500;
    if (value < 0) value = 0;
    setSliderValue(value);
    setSearchRadius(value * 1000);
  }

  if (isError) return <span>Error: {error.message}</span>;
  return (
    <div className="flex flex-row">
      <div className="w-1/2 aspect-square">
        <GoogleMapReact
          bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
          defaultCenter={center}
          defaultZoom={11}
        >
          <Marker lat={center.lat} lng={center.lng} isCenter />
          {!isLoading &&
            data.map((doc) => (
              <Marker
                lat={doc.coordinates[1]}
                lng={doc.coordinates[0]}
                onClick={() => setSelectedMarker(doc)}
                name={doc.attraction_name}
                key={doc.attraction_id}
              />
            ))}
        </GoogleMapReact>
      </div>

      <div className="w-1/2 pl-8">
        <label>
          <input
            type="number"
            min={0}
            max={500}
            value={sliderValue}
            onInput={handleInput}
          />
          km
        </label>
        <Slider
          className=""
          min={0}
          max={500}
          value={sliderValue}
          onChange={(value) => setSliderValue(value)}
          onAfterChange={() => setSearchRadius(sliderValue * 1000)}
          railStyle={{
            backgroundColor: "var(--flag-gold)",
            height: 2,
          }}
          trackStyle={{
            backgroundColor: "var(--flag-black)",
            marginTop: -1,
            marginLeft: 1,
            width: 90,
            height: 4,
          }}
          handleStyle={{
            height: 14,
            width: 14,
            marginTop: -6,
            borderRadius: "50%",
            borderColor: "var(--flag-black)",
            backgroundColor: "var(--flag-gold)",
          }}
        />
      </div>
    </div>
  );
}

import { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import qs from "qs";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  MarkerClusterer,
} from "@react-google-maps/api";
import Slider from "rc-slider";
import findFacet from "../utils/findFacet.js";
import "rc-slider/assets/index.css";

export default function Map({ center, centerName }) {
  const [sliderValue, setSliderValue] = useState(20); // in km, not passed to query
  const [searchRadius, setSearchRadius] = useState(sliderValue * 1000); // in m, passed to query
  const [selectedMarker, setSelectedMarker] = useState(null);

  const { data, error, isLoading, isError } = useQuery(
    ["attraction", center.lng, center.lat, searchRadius],
    async () => {
      const params = qs.stringify({
        lng: center.lng,
        lat: center.lat,
        searchRadius: searchRadius,
      });
      const res = await axios.get(`/api/attractions/near?${params}`);
      return res.data; // return to "data"
    }
  );

  function handleInput(event) {
    let value = event.target.value;
    if (value > 300) value = 300;
    if (value < 0) value = 0;
    setSliderValue(value);
  }

  if (isError) return <span>Error: {error.message}</span>;
  return (
    <div className="flex w-full flex-col lg:flex-row">
      <div className="aspect-square lg:w-full">
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={center}
            zoom={11}
            clickableIcons={false}
          >
            <Marker
              position={center}
              onClick={() => setSelectedMarker("center")}
            >
              {selectedMarker === "center" && (
                <InfoWindow onCloseClick={() => setSelectedMarker(null)}>
                  <div>{centerName}</div>
                </InfoWindow>
              )}
            </Marker>
            {!isLoading && (
              <MarkerClusterer
                averageCenter={true}
                minimumClusterSize={4}
                zoomOnClick={false}
              >
                {(clusterer) =>
                  data.map((doc) => (
                    <Marker
                      position={{
                        lat: doc.coordinates[1],
                        lng: doc.coordinates[0],
                      }}
                      clusterer={clusterer}
                      onClick={() => setSelectedMarker(doc)}
                      title={doc.attraction_name}
                      key={doc.attraction_id}
                    >
                      {selectedMarker === doc && (
                        <InfoWindow
                          onCloseClick={() => setSelectedMarker(null)}
                        >
                          <div>
                            <span className="font-semibold">
                              {doc.attraction_name}
                            </span>
                            <br />
                            {doc.address}
                            <br />
                            {findFacet(doc, "city")}, {doc.state}&nbsp;
                            {doc.zip}
                          </div>
                        </InfoWindow>
                      )}
                    </Marker>
                  ))
                }
              </MarkerClusterer>
            )}
          </GoogleMap>
        </LoadScript>
      </div>

      {/* TODO: add toggle between slider and search (and search too - map package has) */}
      {/* TODO: add show center button (just set the selected marker to "center") */}
      <div className="flex aspect-square flex-col bg-red lg:w-full">
        <div className="flex w-full items-center p-4">
          <Slider
            className="mx-2"
            min={0}
            max={300}
            value={sliderValue}
            onChange={(value) => setSliderValue(value)}
            onAfterChange={() => setSearchRadius(sliderValue * 1000)}
            railStyle={{
              backgroundColor: "black",
              height: 3,
              marginTop: 1,
            }}
            trackStyle={{
              backgroundColor: "gold",
              marginLeft: -1,
            }}
            handleStyle={{
              height: 15,
              width: 15,
              borderRadius: "50%",
              borderColor: "gold",
              backgroundColor: "gold",
              boxShadow: "none",
            }}
          />
          <label className="ml-2 flex rounded bg-white">
            <input
              className="w-8 rounded py-2 text-right"
              type="number"
              min={0}
              max={300}
              value={sliderValue}
              onInput={handleInput}
            />
            <span className="p-2">km</span>
          </label>
        </div>
        {/* {selectedMarker && (
          <div className="h-full w-full">
            <Preview data={selectedMarker} />
          </div>
        )} */}
      </div>
    </div>
  );
}

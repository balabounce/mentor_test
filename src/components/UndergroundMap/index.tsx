import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const UndergroundMap = () => {
  const coords = useSelector((state: RootState) => state.map.coords);
  return (
    <>
      <h3>My Undeground</h3>
      <div >
        <YMaps>
            <Map
              defaultState={{
                center: coords,
                zoom: 14,
              }}
              width="100vw"
              height="100vh"
            >
              <Placemark geometry={coords} />
            </Map>
          </YMaps>
      </div>
    </>
  )
};

export default UndergroundMap;
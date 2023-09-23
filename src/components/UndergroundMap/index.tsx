import React from "react";
import styles from './UndegroundMap.module.css';
import { YMaps } from "@pbe/react-yandex-maps";
import { Map } from "@pbe/react-yandex-maps";
import { Placemark } from "@pbe/react-yandex-maps";

const UndergroundMap = () => {
  return (
    <>
      <h3>My Undeground</h3>
      <div >
        <YMaps>
            <Map
              defaultState={{
                center: [55.621727, 37.423560],
                zoom: 14,
              }}
              width="100vw"
              height="100vh"
            >
              <Placemark geometry={[55.621727, 37.423560]} />
            </Map>
          </YMaps>
      </div>
    </>
  )
};

export default UndergroundMap;
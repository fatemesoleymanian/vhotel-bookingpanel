import React, { useState } from 'react';
import "@neshan-maps-platform/react-openlayers/dist/style.css"
import NeshanMap from "@neshan-maps-platform/react-openlayers"

const MapView = ({ className }) => {
  const [ol, setOl] = useState()
  const [olMap, setOlMap] = useState()

  const onInit = (ol, map) => {
    setOl(ol)
    setOlMap(map)

    setTimeout(() => {
      const view = map.getView()
      view.animate({
        center: (ol.proj.fromLonLat)([
          51.36281969540723, 35.69672648316882,
        ]),
        zoom: 12,
        duration: 1000,
      })
    }, 2000)
  }
  return (
    <div className={`p-4 bg-gray-200 text-center h-full${className}`}>
      <NeshanMap
        mapKey="web.b7773cdedd5943a9b47261dee9458cda"
        defaultType="neshan"
        center={{ latitude: 35.7665394, longitude: 51.4749824 }}
        style={{ height: "100%", width: "100%" }}
        onInit={onInit}
        zoom={30}
      ></NeshanMap>
    </div>
  );
};

export default MapView;

import React, { useState, useEffect } from 'react';
import "@neshan-maps-platform/react-openlayers/dist/style.css";
import NeshanMap from "@neshan-maps-platform/react-openlayers";
import HotelInfoCard from './HotelInfoCard';

const MapView = ({ className }) => {
  const [ol, setOl] = useState(null);
  const [olMap, setOlMap] = useState(null);
  const [instanceModel, setInstanceModel] = useState(null)
  const neshanKey = import.meta.env.VITE_NESHAN_KEY;

  const markers = [
    { coords: [51.36281969540723, 35.69672648316882], price: '$120', name: 'استقلال' , image:'https://www.eghamat24.com/app/public/new_images/600x460/Tehran-ParsianEsteghlal-65.webp' },
    { coords: [51.40081969540723, 35.70672648316882], price: '$150', name: 'اسپیناس' , image:'https://espinashotels.com/wp-content/uploads/2024/02/espinas_palace_about_bg-1.png' },
    { coords: [51.35081969540723, 35.68672648316882], price: '$100', name: 'المپیک' , image:'https://sarmaafarin.com/wp-content/uploads/2018/12/olympic-hotel.jpg' }
  ];

  // Add marker function
  const addMarker = (ol, map, markerData) => {
    const { coords, price , name , image } = markerData;

    // Create a marker layer
    const markerLayer = new ol.layer.Vector({
      source: new ol.source.Vector(),
    });
    map.addLayer(markerLayer);

    // Create a marker feature
    const marker = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat(coords)),
      price: price, // Store the price in the feature,
      name: name ,
      image: image
    });

    // Define the marker style with dynamic price
    marker.setStyle(new ol.style.Style({
      text: new ol.style.Text({
        text: price,  // Display the price as the marker label
        font: 'bold 14px Arial',
        fill: new ol.style.Fill({ color: '#FF0000' }), // Text color
        backgroundFill: new ol.style.Fill({ color: '#FFFFFF' }), // Background color
        padding: [5, 5, 5, 5],  // Padding around the text
        offsetY: -25,  // Offset to position the text above the marker
      }),
      image: new ol.style.Circle({
        radius: 8,
        fill: new ol.style.Fill({ color: '#0000FF' }),  // Marker background color
        stroke: new ol.style.Stroke({ color: '#FFFFFF', width: 2 }),  // Marker border color
      }),
    }));

    // Add marker to the layer
    markerLayer.getSource().addFeature(marker);
  };

  // Function to handle marker click
  const handleMarkerClick = (event) => {
    if (olMap) {
      const feature = olMap.forEachFeatureAtPixel(event.pixel, (feat) => feat);
      if (feature) {
        setInstanceModel({
          name: feature.get('name'),
          image: feature.get('image'),
          price: feature.get('price')
        })
      }
    } else {
      console.error("olMap is undefined when trying to access it in click handler");
    }
  };

  // Initialization function
  const onInit = (ol, map) => {
    console.log("Map initialized");
    setOl(ol);
    setOlMap(map);

    setTimeout(() => {
      const view = map.getView();
      view.animate({
        center: ol.proj.fromLonLat([51.36281969540723, 35.69672648316882]),
        zoom: 12,
        duration: 1000,
      });
    }, 2000);

    // Add all markers to the map
    markers.forEach((markerData) => {
      addMarker(ol, map, markerData);
    });
  };

  // useEffect to handle adding the event listener after olMap is set
  useEffect(() => {
    if (olMap) {
      olMap.on('singleclick', handleMarkerClick);
    }

    // Cleanup listener when component unmounts
    return () => {
      if (olMap) {
        olMap.un('singleclick', handleMarkerClick);
      }
    };
  }, [olMap]); // Run this effect when olMap changes

  return (
    <div className={`p-4 bg-gray-200 text-center h-full ${className}`}>
      <NeshanMap
        mapKey={neshanKey}
        defaultType="neshan"
        center={{ latitude: 35.7665394, longitude: 51.4749824 }}
        style={{ height: "100%", width: "100%" }}
        onInit={onInit}
        zoom={12}
      ></NeshanMap>
      {instanceModel && (
      <HotelInfoCard name={instanceModel.name} price={instanceModel.price} image={instanceModel.image}/>
      )}
    </div>
  );
};

export default MapView;

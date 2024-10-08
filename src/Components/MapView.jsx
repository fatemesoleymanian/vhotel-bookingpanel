import React from 'react';

const MapView = ({ className }) => {
  return (
    <div className={`p-4 bg-gray-200 ${className}`}>
      <div className="text-center">Map View</div>
      {/* Placeholder for actual map */}
      <div className="h-full bg-blue-200">Map goes here</div>
    </div>
  );
};

export default MapView;

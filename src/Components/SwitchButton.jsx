import React from 'react';

const SwitchButton = ({ view, handleSwitch }) => {
  return (
    <button
      onClick={handleSwitch}
      className="w-full p-4 bg-blue-500 text-white fixed bottom-0"
    >
      {view === 'list' ? 'Switch to Map View' : 'Switch to List View'}
    </button>
  );
};

export default SwitchButton;

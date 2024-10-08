import React from 'react';

const SwitchButton = ({ view, handleSwitch }) => {
  return (
    <button
      onClick={handleSwitch}
      className="w-full p-4 bg-blue-500 text-white fixed bottom-0"
    >
      {view === 'list' ? 'نقشه' : 'لیست'}
    </button>
  );
};

export default SwitchButton;

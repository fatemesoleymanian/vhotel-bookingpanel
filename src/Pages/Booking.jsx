import { useState } from 'react';
import SearchBar from '../Components/SearchBar';
import MapView from '../Components/MapView';
import ListView from '../Components/ListView';
import SwitchButton from '../Components/SwitchButton';
import useMediaQuery from '../Hooks/UseMediaQuery';

const Booking = () => {
  const [view, setView] = useState('list'); // 'list' or 'map'
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const handleSwitch = () => {
    setView(view === 'list' ? 'map' : 'list');
  };

  return (
    <div className="flex flex-col h-screen">
      <SearchBar />
      <div className="flex flex-1">
        {isDesktop ? (
          <>
            <ListView className="w-1/2" />
            <MapView className="w-1/2" />
          </>
        ) : (
          view === 'list' ? <ListView /> : <MapView />
        )}
      </div>
      {!isDesktop && <SwitchButton view={view} handleSwitch={handleSwitch} />}
    </div>
  );
};

export default Booking;

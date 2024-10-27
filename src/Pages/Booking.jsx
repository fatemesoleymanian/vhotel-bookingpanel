import { useState } from 'react';
import SearchBar from '../Components/SearchBar';
import MapView from '../Components/MapView';
import ListView from '../Components/ListView';
import SwitchButton from '../Components/SwitchButton';
import useMediaQuery from '../Hooks/UseMediaQuery';

const Booking = () => {
  const [view, setView] = useState('list'); // 'list' or 'map'
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [hotels, setHotels] = useState([
    { coords: [51.36281969540723, 35.69672648316882], price: '$120', name: 'استقلال' , image:'https://www.eghamat24.com/app/public/new_images/600x460/Tehran-ParsianEsteghlal-65.webp',id:'esteghlal' },
    { coords: [51.40081969540723, 35.70672648316882], price: '$150', name: 'اسپیناس' , image:'https://espinashotels.com/wp-content/uploads/2024/02/espinas_palace_about_bg-1.png',id:'espinas' },
    { coords: [51.35081969540723, 35.68672648316882], price: '$100', name: 'المپیک' , image:'https://sarmaafarin.com/wp-content/uploads/2018/12/olympic-hotel.jpg',id:'olymoics' }
  ])

  const handleSwitch = () => {
    setView(view === 'list' ? 'map' : 'list');
  };

  return (
    <div className="flex flex-col h-screen">
      <SearchBar onSearchResult={(e)=>{setHotels(e.target.value)}}/>
      <div className="flex flex-1">
        {isDesktop ? (
          <>
            <ListView className="w-1/2" hotels={hotels}/>
            <MapView className="w-1/2" hotels={hotels}/>
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

import { useParams } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import { useState } from "react";


const HotelRooms = ()=>{
    const { _id } = useParams();
    const [rooms, setRooms]=useState([])
    return(
        <>
         <div className="flex flex-col h-screen">
         <SearchBar onSearchResult={(e)=>{setRooms(e.target.value)}}/>
        <div> هتل: {_id} </div>
        </div>
        </>
    )
}

export default HotelRooms;
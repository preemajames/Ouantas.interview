import React from "react";

import { HotelCard } from "./hotel-card/hotel-card";
import { IHotel } from "../hotel.model";

export const SearchResult: React.FC<{hotels:IHotel[]}> = props => {
    return (
      <div  data-testid={"hotel-search"}>
        {(props.hotels||[]).map((hotel:IHotel) => {
             return (<HotelCard hotel={hotel} key ={hotel.id}></HotelCard>);
        })}
     </div>
    );
}
import { SearchPanel } from "./search-panel/search-panel";
import { SearchResult } from "./search-result/search-result";
import { IHotel } from "./hotel.model";
import { QANTAS_HOTELS  } from '../qantas-hotels';
import { useState } from "react";
import * as _ from 'lodash';

export const HotelSearchContainer = () => {
    const [sortBy, setSortBy] = useState("price-high-low")
   
    var getHotelDetails = (sotby: string): IHotel[]  =>{
        const hotels: IHotel[] = QANTAS_HOTELS.results;
        if(sotby === 'price-high-low') {
             return _.sortBy(hotels, [function (o) { return o.offer.displayPrice?.amount; }]).reverse();
         }
        else{
             return _.sortBy(hotels, [function (o) { return o.offer.displayPrice?.amount; }]);
        }
    }
    
    const hotels: IHotel[] = getHotelDetails(sortBy) ;

    var onSortChanged = (Sortby: string) =>{
        setSortBy(Sortby)
    }

    return (
        <div data-testid="hotel-search-container">
            <SearchPanel hotelCount ={hotels.length} onSort={onSortChanged}/>
            <SearchResult hotels = {hotels}/>
        </div>
    );
}
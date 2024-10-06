import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HotelSearchContainer } from './hotel-search-container';
import { QANTAS_HOTELS } from '../qantas-hotels';
import * as _ from 'lodash';

function getHotelDetailsSortBy(sotby: string){
    const hotels = QANTAS_HOTELS.results;
    if(sotby === 'price-high-low') {
         return _.sortBy(hotels, [function (o) { return o.offer.displayPrice?.amount; }]).reverse();
     }
    else{
         return _.sortBy(hotels, [function (o) { return o.offer.displayPrice?.amount; }]);
    }
}

test('hotel count displayed on the sreen should be same as total hotels returns',  () => {
    var hotels = getHotelDetailsSortBy("price-high-low");
   
    render(<HotelSearchContainer />)
   
    const searchResult = screen.getByTestId('hotel-search-result');
    expect(hotels.length + " hotels in <span class=\"font-bold\">Sydney</span>").toBe(searchResult.innerHTML.trim());
});

test('sort hotel details from high price to low price',  async () => {
    var hotels = getHotelDetailsSortBy("price-high-low");
    const user = userEvent.setup();
    
    const { container } = render(<HotelSearchContainer />)
    
    const sortDropDown = screen.getByTestId('drp-hotel-sort');
    await user.selectOptions(sortDropDown, 'price-high-low');
    const hotelnames = container.getElementsByClassName("hotelname");
  
    for (let i = 0; i < hotelnames.length; i++) {
        expect(hotels[i].property.title.trim()).toBe(hotelnames[i].innerHTML.trim());
    }
});

test('sort hotel details from low price to high price',  async () => {
    var hotels = getHotelDetailsSortBy("price-low--high");
    const user = userEvent.setup();
    
    const { container } = render(<HotelSearchContainer />)
    
    const sortDropDown = screen.getByTestId('drp-hotel-sort');
    await user.selectOptions(sortDropDown, 'price-low-high');
    const hotelnames = container.getElementsByClassName("hotelname");
  
    for (let i = 0; i < hotelnames.length; i++) {
        expect(hotels[i].property.title.trim()).toBe(hotelnames[i].innerHTML.trim());
    }
});
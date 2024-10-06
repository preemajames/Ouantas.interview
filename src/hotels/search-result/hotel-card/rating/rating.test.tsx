import React from 'react';
import { render, screen } from '@testing-library/react';
import { Rating } from './rating';

test('rate should be greater than zero',  () => {
    render(<Rating rate = {0} type = "" />)
   
    const hotel_rate_section = screen.queryAllByTestId('hotel-rating-section');
    expect(hotel_rate_section.length).toBe(0)
});

test('rate icons should equal to the rate value passed into the component',  () => {
    render(<Rating rate = {3} type = "star" />)
   
    const hotel_rate_section = screen.getByTestId('hotel-rating-section');
    var icons =  hotel_rate_section.getElementsByTagName("svg")
    expect(icons.length).toBe(3)
});




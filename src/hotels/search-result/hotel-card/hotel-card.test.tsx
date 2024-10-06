import React from 'react';
import { render, screen } from '@testing-library/react';
import * as _ from 'lodash';
import { HotelCard } from './hotel-card';

test('detail displayed on the screen should same as hotel object passed intto it',  () => {
    var hotel = {
        "id": "cxd650nuyo",
        "property": {
          "propertyId": "P107801",
          "title": "Courtyard by Marriott Sydney-North Ryde",
          "address": [
            "7-11 Talavera Rd",
            "North Ryde"
          ],
          "previewImage": {
            "url": "https://unsplash.it/145/125/?random",
            "caption": "Image of Courtyard by Marriott Sydney-North Ryde",
            "imageType": "PRIMARY"
          },
          "rating": {
            "ratingValue": 4.5,
            "ratingType": "self"
          }
        },
        "offer": {
          "promotion": {
            "title": "Exclusive Deal",
            "type": "MEMBER"
          },
          "name": "Deluxe Balcony Room",
          "displayPrice": {
            "amount": 329.000000000,
            "currency": "AUD"
          },
          "savings": {
            "amount": 30.000000000,
            "currency": "AUD"
          },
          "cancellationOption": {
            "cancellationType": "NOT_REFUNDABLE"
          }
        }
      };
   
    render(<HotelCard  hotel={hotel} />)
   
    const promotiontitle = screen.getByTestId('hotel-promotion-title');
    expect(hotel.offer.promotion.title).toBe(promotiontitle.innerHTML.trim());

    const offerlabel = screen.queryByTestId('hotel-offer-label');
    expect(hotel.offer.name).toBe(offerlabel?.innerHTML.trim());

    const hotelname = screen.getByTestId('hotel-property-title');
    expect(hotel.property.title).toBe(hotelname.innerHTML.trim());

    const cancellabel = screen.getByTestId('hotel-canel-label');
    expect(cancellabel).toBeInTheDocument();
});



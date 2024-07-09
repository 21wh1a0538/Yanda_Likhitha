/* Corosol.js */


import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

export default function Corosol() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='https://www.10wallpaper.com/wallpaper/1366x768/1604/2017_Aston_Martin_DB11_Luxury_Car_HD_Wallpaper_17_1366x768.jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
          <h5>It's not just a car, it's a lifestyle</h5>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='https://c4.wallpaperflare.com/wallpaper/385/442/425/blue-car-blue-sky-car-blue-wallpaper-preview.jpg' className='d-block w-100' alt='...'/>
        <MDBCarouselCaption>
          
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='https://img.freepik.com/premium-photo/escape-car-midnight-road-alley-with-car-driving-away-distance-wet-hazy-asphalt-road_873668-5022.jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
        <h5>Empowering your transactions with ironclad security: where buying meets selling</h5>
          
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}



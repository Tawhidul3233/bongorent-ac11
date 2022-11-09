import React from 'react';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import SiteStatus from '../SiteStatus/SiteStatus';
import UpcomingServices from '../UpcomingServices/UpcomingServices';

const Home = () => {
     return (
          <div>
               <Banner> </Banner>
               <HomeServices> </HomeServices>
               <SiteStatus> </SiteStatus>
               <UpcomingServices> </UpcomingServices>
          </div>
     );
};

export default Home;
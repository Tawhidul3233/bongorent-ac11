import React from 'react';
import Banner from '../Banner/Banner';
import SiteStatus from '../SiteStatus/SiteStatus';
import UpcomingServices from '../UpcomingServices/UpcomingServices';

const Home = () => {
     return (
          <div>
               <Banner> </Banner>
               <SiteStatus> </SiteStatus>
               <UpcomingServices> </UpcomingServices>
          </div>
     );
};

export default Home;
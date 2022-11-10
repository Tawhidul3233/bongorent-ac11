import React from 'react';
import useTitle from '../../../HookTitle/useTitle';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import SiteStatus from '../SiteStatus/SiteStatus';
import UpcomingServices from '../UpcomingServices/UpcomingServices';

// home page add componsnts 
const Home = () => {
     useTitle('Home')
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
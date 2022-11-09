import React from 'react';

const Service = ({service}) => {
     const {title, _id, details, available, booked} = service
    
     return (
          <div>
              {title}
          </div>
     );
};

export default Service;
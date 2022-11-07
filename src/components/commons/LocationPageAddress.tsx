import * as React from "react";
import Mapicon from "../../images/pin.svg"; 

const LocationAddress = (props: any) => {  
    const { address } = props; 
  return (
    <>
      <div className="icon-row location-address"><span className="icon"><img src={Mapicon} /></span> 
        <div>{address.line1}</div>
            <div>{address.city},{address.countryCode}</div>
            <div>{address.postalCode}</div>       
      </div>
    </>
  );
};

export default LocationAddress;

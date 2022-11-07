import * as React from "react";
import LocationAddress from "../commons/LocationPageAddress";
import hours from "../commons/hours";
import OpenCloseStatus from "../commons/OpenCloseStatus";
import IframeMap from "./IframeMap";
import GetDirection from "../commons/GetDirection";
import { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input';

type Banner = {
  text?: string;
  address?: any;
  hours?: any;
  timezone?: any;
  mainPhone?: any;
  latitude?: any;
  longitude?: any;
  children?: React.ReactNode;
};

const Banner = (props: Banner) => {
  const { 
    text,
    address,
    hours,
    timezone,
    mainPhone,
    latitude,
    longitude ,
    children 
  } = props;

  const formattedPhone = formatPhoneNumber(mainPhone);

  return (
    <>
      <div className=" font-medium text-black p-10  items-center justify-center  gap-x-14 gap-y-10 ">
      <div className="flex">
      <div>
        <div className="font-bold text-3xl">{text}</div>
        {/*<div><OpenCloseStatus timezone={timezone} hours={hours}></OpenCloseStatus></div>*/}
        <LocationAddress address={address}></LocationAddress>
        <div>
          <div className="ml-4">{formattedPhone}</div>
        </div>
      </div>
        <div className="mx-80 h-full">
        
          {/*<GetDirection  buttonText={"View on google maps"} latitude={latitude}*/}
                  {/*longitude={longitude} ></GetDirection>*/}
        </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Banner;

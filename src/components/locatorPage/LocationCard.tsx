import * as React from "react";
import { useEffect, useRef, useState } from 'react';
import { CardComponent } from "@yext/search-ui-react";
import { Location } from "..//../types/search/locations";
import Hours from '..//../components/commons/hours';
import Address from "..//../components/commons/Address";
import phonePin from "..//../images/phone.svg";
import { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input';
import OpenCloseStatus from "..//../components/commons/OpenCloseStatus";

const metersToMiles = (meters: number) => {
  const miles = meters * 0.000621371;
  return miles.toFixed(2);
}



const LocationCard: CardComponent<Location> = ({ result }) => {
  const { address, mainPhone, timezone } = result.rawData;
  const formattedPhone = formatPhoneNumber(mainPhone);
  const addressLine1   = address.line1;
  console.log(addressLine1);
  const [timeStatus, setTimeStatus] = useState("");
  const onOpenHide = () => {
    if (timeStatus == "") {
      setTimeStatus("active");
    } else {
      setTimeStatus("");
    }
  }

  return (
    <div className="location">
      <h3 className="">{result.rawData.name} <p className="miles">{metersToMiles(result.distance ?? 0)} mi</p></h3>
      {/* <p className="text-sm text-slate-700">{address.line1}</p>
      <p className="text-sm text-slate-700">{address.city}, {address.region}, {address.postalCode} </p> */}
      <Address address={address} />
      <div className="icon-row location-phone"><span className="icon"><img src={phonePin} /></span>{formattedPhone}</div>

      <div className="OpenCloseStatus" >
        <a className={timeStatus} href="javascript:void(0);" onClick={onOpenHide}  ><OpenCloseStatus timezone={timezone} hours={result.rawData.hours}></OpenCloseStatus></a>
        <div className={timeStatus + " daylist"} ><Hours key={result.rawData.id} hours={result.rawData.hours} /></div>
      </div>

      <div className="buttons">
        <div className="ctaBtn">
          <a className="button primary-button w-100 px-i" data-type="book" data-restaurantid="" href={`https://www.google.com/maps/dir/?api=1&destination=${addressLine1}`}>routebeschrijving</a>
        </div>
        <div className="ctaBtn">
          <a className="button secondary-button w-100 px-i" href={`en/${result.rawData.id}.html.html`}>bekijk winkel</a>
        </div>


      </div>
    </div >
  );
}

export default LocationCard;

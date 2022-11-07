import * as React from "react";
import Banner from "../components/locationDetails/banner";
import IframeMap from "../components/locationDetails/IframeMap";
import { useEffect, useRef, useState } from 'react';
import Hours from "../components/commons/hours";
import PageLayout from "../components/layouts/PageLayout";
import BreadCrumbs from "../components/layouts/BreadCrumbs";
import Tab from "../components/locationDetails/tabs/Tab";
import Address from "../components/commons/Address";
import GetDirection from "../components/commons/GetDirection";
import TabsPanel from "../components/locationDetails/tabs/TabsPanel";
import MenuTabDetails from "../components/locationDetails/tabs/MenuTabDetails";
import VisitTabDetails from "../components/locationDetails/tabs/VisitTabDetails";
import OffersTabDetails from "../components/locationDetails/tabs/OffersTabDetails";
import { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input';
import NearByLocations from "../components/locationDetails/NearByLocations";
import { useSearchState, Result } from "@yext/search-headless-react";

import Service from "../components/locationDetails/hemadata";
import "../index.css";
import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";


export const config: TemplateConfig = {
  stream: {
    $id: "locations",
    filter: {
      entityTypes: ["location"]
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "description",
      "neighborhood",
      "hours",
      "photoGallery",
      "slug",
      "paymentOptions",
      "geocodedCoordinate",
      "yextDisplayCoordinate",
      "services",
      "covidMessaging",
      "timezone",
      "c_hemaShopProducts"
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({document}) => {
  return document.slug.toString()+'.html';
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
 export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({relativePrefixToRoot, path, document}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          description: document.description,
        },
      },
    ],
  };
};


 const Location: Template<TemplateRenderProps> = ({relativePrefixToRoot, path, document}) => {
  const {
    _site,
    name,
    address,
    description,
    neighborhood,
    openTime,
    hours,
    mainPhone,
    photoGallery,
    geocodedCoordinate,
    yextDisplayCoordinate,
    services,
    covidMessaging,
    c_featuredFAQs,
    dm_directoryParents,
    paymentOptions,
    c_hemaShopProducts,
    // c_relatedMenuItems,
    // c_offersToRestaurants,
    timezone
  } = document;
 var formattedPhone = formatPhoneNumber(mainPhone);
   function getPosition(result: Result){
    const lat = (result.rawData as any).displayCoordinate.latitude;
    const lng = (result.rawData as any).displayCoordinate.longitude;
    return { lat, lng };
  }
  // let lat = displayCoordinate.latitude;
  // let lon = displayCoordinate.longitude;
  // const menuItems = c_relatedMenuItems;
  // const offersToRestaurants = c_offersToRestaurants;

  return (
    <>
      <PageLayout >
         <div className="section">
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                    <div className="address-phone space-y-5">
                      <h2 className="text-xl font-semibold mb-4">Address</h2>
                      <Address address={address}></Address>
                      <div className="space-x-3">
                      <a href={`tel:${formattedPhone}`}>
                        <span>&#128222;</span>
                        <span>{formattedPhone}</span>
                      </a>
                      </div>
                    </div>
             <Hours title="Hours" hours={hours}></Hours>
            </div>
      </div>
        <div className=""></div>
        <div className="w-full h-screen px-12 flex flex-col max-h-screen">
        <div className="flex flex-row w-full h-full overflow-y-auto">
          <IframeMap address={address}>{address}</IframeMap>
          <div class="available-on">
   {/*<div class="available-option mb-4">
      <h5>Order Direct Here</h5>
      <ul>
         <li><a href="https://www.ubereats.com/gb/store/favorite-chicken-%26-ribs-wolverhampton/JdFJ3GqnTrW-pCW_tXJk4g?diningMode=DELIVERY&amp;pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlJNMTglMjA3RUglMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKOXdZOGNVaTIyRWNSTmUwWmlfVkN3NzglMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNTEuNDYyNjclMkMlMjJsb25naXR1ZGUlMjIlM0EwLjM1MDc2JTdE&amp;utm_campaign=place-action-link&amp;utm_medium=organic&amp;utm_source=google" target="_blank"><img src="/assets/static/favorite-cfabcd9d.svg" alt="" title="Favorite"></img></a></li>
      </ul>
   </div>*/}
   {/*<NearByLocations latitude={lat} longitude={lon}> </NearByLocations>*/}
{/*   <div class="available-option">
      <h5>Available to Order Here</h5>
      <ul>
         <li><a href="https://www.just-eat.co.uk/restaurants-favorite-chicken-ribs/menu?utm_source=google&amp;utm_medium=organic&amp;utm_campaign=orderaction" target="_blank"><img src="/assets/static/justeats-d991919b.svg" alt="Just Eats" title="Just Eats"></img></a></li>
         <li><a href="https://www.ubereats.com/gb/store/favorite-chicken-%26-ribs-wolverhampton/JdFJ3GqnTrW-pCW_tXJk4g?diningMode=DELIVERY&amp;pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlJNMTglMjA3RUglMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKOXdZOGNVaTIyRWNSTmUwWmlfVkN3NzglMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNTEuNDYyNjclMkMlMjJsb25naXR1ZGUlMjIlM0EwLjM1MDc2JTdE&amp;utm_campaign=place-action-link&amp;utm_medium=organic&amp;utm_source=google" target="_blank"><img src="/assets/static/uber-eats-d3808bcd.svg" alt="Uber Eats" title="Uber Eats"></img></a></li>
      </ul>
   </div>*/}
</div>

          {/* <BreadCrumbs name={name} parents={dm_directoryParents} baseUrl={relativePrefixToRoot}></BreadCrumbs> */}               
        
        {/*<TabsPanel>*/}
          {/*<Tab  title="Visit" ubtitle="Visit" icon="" >
              <VisitTabDetails document={document} ></VisitTabDetails> 
          </Tab>*/}
          {/*<Tab title="Menu" subtitle="Menu" icon="" >
              <MenuTabDetails menuItems={menuItems} ></MenuTabDetails> 
          </Tab>*/}
          {/*<Tab title="Offers" subtitle="Offers"  icon="">
              <OffersTabDetails offersToRestaurants={offersToRestaurants} ></OffersTabDetails> 
          </Tab>*/}
      {/*</TabsPanel>*/}
      </div>
     
      </div>
      {/* {c_hemaShopProducts[0].productDescription}
      <br/>
      {c_hemaShopProducts[0].productHeading}
      <img src={c_hemaShopProducts[0].productImage[0].url}></img> */}


      <Service service={c_hemaShopProducts}></Service>
      </PageLayout>
    </>
  );
};

export default Location;
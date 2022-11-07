import { useSearchActions } from "@yext/search-headless-react";
import { useEffect, useState } from 'react';
import * as React from "react";
import { FilterSearch, VerticalResults, ResultsCount, Pagination, LocationBias, NumericalFacets, NumericalFacetsProps, StandardFacets, StandardFacetsProps } from "@yext/search-ui-react";
import { Location } from "..//../types/search/locations";
import LocationCard from "./LocationCard";
import { GoogleMaps } from "./GoogleMaps";
import { useSearchState, Result } from "@yext/search-headless-react";
import Modal from 'react-modal';
import { AnswerExperienceConfig, googleMapsConfig } from "..//../config/globalConfig";
import Geocode from "react-geocode"; 
import useFetchResults from "../../hooks/useFetchResults";
import FilterAwesome from "./FilterAwesome";

const SearchLayout = (): JSX.Element => {

  const searchActions = useSearchActions();

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [centerLatitude, setCenterLatitude] = useState(googleMapsConfig.centerLatitude);
  const [centerLongitude, setCenterLongitude] = useState(googleMapsConfig.centerLongitude);
  const [inputvalue,setInputValue]= useState('');

  useEffect(() => {
    searchActions.setVertical(AnswerExperienceConfig.verticalKey);
    searchActions.setVerticalLimit(2);
    searchActions.executeVerticalQuery();
  }, []);

  useEffect(() => {
    let searchKey = document.getElementsByClassName('FilterSearchInput');
    searchKey[0].addEventListener("keydown", function (e) {
      if (e.key == "Enter") {
        setInputValue('');
        searchActions.setVertical(AnswerExperienceConfig.verticalKey);
        searchActions.setQuery(searchKey[0].value);
        searchActions.executeVerticalQuery();
      }
    })

    searchKey[0].addEventListener("keydown", function (e) {
      if (searchKey[0].value == "") {
        setInputValue('');
        searchActions.setVertical(AnswerExperienceConfig.verticalKey);
        searchActions.setQuery("");
        searchActions.executeVerticalQuery();
      }
    })

    searchKey[0].addEventListener("keyup", function (e) {
      if (searchKey[0].value == "") {
        setInputValue('');
        searchActions.setVertical(AnswerExperienceConfig.verticalKey);
        searchActions.setQuery("");
        searchActions.executeVerticalQuery();
      }
    })

  }, []);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }


  const Findinput = () => {
    let searchKey = document.getElementsByClassName('FilterSearchInput');
    setInputValue('');
    getCoordinates(searchKey[0].value);       
  }


  function getCoordinates(address:String){
    fetch("https://maps.googleapis.com/maps/api/geocode/json?address="+address+'&key=AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18')
      .then(response => response.json())
      .then(data => {
       data.results.map((res:any)=>{
           const userlatitude = res.geometry.location.lat;
           const userlongitude = res.geometry.location.lng;
           let params={
            latitude:userlatitude,
            longitude:userlongitude};
           console.log(userlatitude,userlongitude) 
           setCenterLatitude(userlatitude);
           setCenterLongitude(userlongitude);
           searchActions.setUserLocation(params);
           searchActions.setQuery(address);
           searchActions.executeVerticalQuery();
         
      })
    })     
  }
  const locationResults = useFetchResults() || [];

  const locationBias = useSearchState(s => s.location.locationBias);
  // console.log(locationBias);     
  const displayName = locationBias?.displayName;

  const getUsersLocation = () => {
    if (navigator.geolocation) {

      const error = (error: any) => {
        if (error.code == 1) {
          
        } else {
          
        }
      }

      navigator.geolocation.getCurrentPosition(function (position) {

      Geocode.setApiKey("AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18");
      Geocode.fromLatLng(position.coords.latitude,position.coords.longitude).then(
        (response:any) => {
          if (response.results[0]) {           
            setInputValue(response.results[0].formatted_address);
        }
      },
        (error:any) => {
          console.error(error);
        }
      );

        searchActions.setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        
        setCenterLatitude(position.coords.latitude);
        setCenterLongitude(position.coords.longitude);
        searchActions.setVertical(AnswerExperienceConfig.verticalKey);
        searchActions.setQuery('');
        searchActions.executeVerticalQuery();

      }, error, {
        timeout: 10000,
      });

    }
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };



  return (
    <>
      <div className="locator-full-width">
        <div className="locator-container">
          <div className="result-listing">
            <div className="search-block">

              <h3 className="title">
                Find Restaurants
              </h3>
              {/* <LocationBias />  */}
              <div className="search-form">
                <FilterSearch
                  customCssClasses={{
                    filterSearchContainer: "",
                    inputElement: "FilterSearchInput",
                  }}
                  searchOnSelect={true}
                  searchFields={[
                    {
                      entityType: "location",
                      fieldApiName: "name",

                    },
                    {
                      entityType: "location",
                      fieldApiName: "address.line1",

                    },
                    {
                      entityType: "location",
                      fieldApiName: "address.line2",

                    },
                    {
                      entityType: "location",
                      fieldApiName: "address.city",

                    },
                    {
                      entityType: "location",
                      fieldApiName: "address.postalCode",

                    },
                    // {
                    //   entityType: "location",
                    //   fieldApiName: "builtin.location",                        
                    // },
                  ]}

                />
                <button
                  className="button"
                  aria-label="Search bar icon"
                  id="search-location-button" onClick={Findinput}><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg></button>
              </div>



              <div className="location-with-filter">
                <FilterAwesome />
                <button className="ghost-button before-icon"
                  title="Search using your current location!"
                  id="useLocation" onClick={getUsersLocation}  >
                  <svg
                    className=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path
                      d="M8.5,5.955A2.545,2.545,0,1,0,11.045,8.5,2.545,2.545,0,0,0,8.5,5.955Zm5.689,1.909A5.724,5.724,0,0,0,9.136,2.811V1.5H7.864V2.811A5.724,5.724,0,0,0,2.811,7.864H1.5V9.136H2.811a5.724,5.724,0,0,0,5.053,5.053V15.5H9.136V14.189a5.724,5.724,0,0,0,5.053-5.053H15.5V7.864ZM8.5,12.955A4.455,4.455,0,1,1,12.955,8.5,4.451,4.451,0,0,1,8.5,12.955Z"
                      transform="translate(-1.5 -1.5)"
                    />
                  </svg>
                  Use My Location
                </button>
              </div>



              <ResultsCount
                customCssClasses={{ resultsCountContainer: "result-count" }}
              />
            </div>
            {locationResults && locationResults.length > 0 ? (
              <VerticalResults<Location>
                displayAllOnNoResults={false}
                customCssClasses={{
                  verticalResultsContainer:
                    "resultList mb-5",
                }}
                CardComponent={LocationCard}
              />
            ) : (
              <div className="no-data">
                <p>No Restaurants found.</p>
              </div>
            )}

            <Pagination />
          </div>
          <div className="map-section">
            {/* <MapboxMap<Location>
                    mapboxAccessToken="pk.eyJ1IjoicmFodWxyYXRob3JlIiwiYSI6ImNsOGVoM2NycjFsMDYzbnFrdGlpbGE4djEifQ.IWRyhB7OIqpBdtUtj0ki_w"
                    getCoordinate={(location) =>
                    location.rawData.yextDisplayCoordinate}
                    PinComponent={MapPin}
                /> */}

            <GoogleMaps
              apiKey={googleMapsConfig.googleMapsApiKey}
              centerLatitude={centerLatitude}
              centerLongitude={centerLongitude}
              defaultZoom={6}
              showEmptyMap={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchLayout;

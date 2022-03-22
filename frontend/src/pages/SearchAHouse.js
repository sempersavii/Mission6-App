import { useState, useEffect } from "react";
import axios from 'axios';

import Listing from "../components/SmallListing"

import "./SearchAHouse.css";

import GreenKey from "../images/GreenKeyNews.png"
import CovidNews from "../images/CovidNews.png"
import CityNews from "../images/CityNews.png"

const SearchAHouse = () => {
  const [propertyType, setPropertyType] = useState("Any");
  const [listingPrice, setListingPrice] = useState("$2000+");
  const [numberOfBedrooms, setNumberOfBedrooms] = useState("Any");
  const [numberOfBathrooms, setNumberOfBathrooms] = useState("Any");

  const [sliderValue, setSliderValue] = useState(2000);

  function UpdateSlider(e) {
    setListingPrice("$" + e.target.value + "+");
    setSliderValue(e.target.value)
  }

  return (
    <>
      <div className="main-content-grid">
        <div className="main-content-grid-item" id="property-listings">
          <p className="property-listings-title">Property Listings</p>
          <div className="property-listings-subtitle">
            <p>For more that 25 years, Auckland Property Management Ltd has been specialising in residental property management</p>
          </div>
          <div className="property-search-div">
            <div className="property-search-div-grid-item-1">
              <input className="property-search-bar" type="text" placeholder="Enter Keywords  Supermarket, Park, School etc"></input>
            </div>
            <div className="property-search-div-grid-item-2">
              <div className="property-search-options-container">
                <div className="property-search-options-item">
                  <button className="property-search-refine-button">Refine &#9660;</button>
                </div>
                <div className="property-search-options-item">
                  <p className="property-search-option-title">Suburb &#9660;</p>
                  <div className="property-drop-down">
                    <input className="property-drop-down-suburb-search-bar" type="text" placeholder="Enter suburb"></input>
                  </div>
                  <p className="property-search-option-selected">Any</p>
                </div>
                <div className="property-search-options-item">
                  <p className="property-search-option-title">Property type &#9660;</p>
                  <div className="property-drop-down property-drop-down-property-type">
                    <button className="property-drop-down-property-type-option" onClick={() => setPropertyType("Any")}>Any</button>
                    <button className="property-drop-down-property-type-option" onClick={() => setPropertyType("House")}>House</button>
                    <button className="property-drop-down-property-type-option" onClick={() => setPropertyType("Apartment")}>Apartment</button>
                    <button className="property-drop-down-property-type-option" onClick={() => setPropertyType("Unit")}>Unit</button>
                    <button className="property-drop-down-property-type-option" id="no-bottom-margin" onClick={() => setPropertyType("Townhouse")}>Townhouse</button>
                  </div>
                  <p className="property-search-option-selected">{propertyType}</p>
                </div>
                <div className="property-search-options-item">
                  <p className="property-search-option-title">Price &#9660;</p>
                  <div className="property-drop-down property-drop-down-price">
                    <p className="property-drop-down-price-text property-drop-down-price-item">Any</p>
                    <input className="property-drop-down-price-slider property-drop-down-price-item" type="range" id="volume" name="volume" min="2000" max="20000" value={sliderValue} onInput={UpdateSlider}/>
                    
                    {/* <input type="range" min="2000" max="20000" value="11000" /> */}
                    {/*  */}
                    {/*  id="price-slider" */}
                    <p className="property-drop-down-price-text property-drop-down-price-item" id="slider-value">{listingPrice}</p>
                  </div>
                  <p className="property-search-option-selected" id="slider-value">{listingPrice}</p>
                </div>
                <div className="property-search-options-item">
                  <p className="property-search-option-title">Bedrooms &#9660;</p>
                  <div className="property-drop-down property-drop-down-bedbath">
                    <button className="property-drop-down-bedbath-option" onClick={() => setNumberOfBedrooms("Any")}>Any</button>
                    <button className="property-drop-down-bedbath-option" onClick={() => setNumberOfBedrooms("1")}>1</button>
                    <button className="property-drop-down-bedbath-option" onClick={() => setNumberOfBedrooms("2")}>2</button>
                    <button className="property-drop-down-bedbath-option" onClick={() => setNumberOfBedrooms("3+")}>3+</button>
                  </div>
                  <p className="property-search-option-selected">{numberOfBedrooms}</p>
                </div>
                <div className="property-search-options-item">
                  <p className="property-search-option-title">Bathrooms &#9660;</p>
                  <div className="property-drop-down property-drop-down-bedbath">
                    <button className="property-drop-down-bedbath-option" onClick={() => setNumberOfBathrooms("Any")}>Any</button>
                    <button className="property-drop-down-bedbath-option" onClick={() => setNumberOfBathrooms("1")}>1</button>
                    <button className="property-drop-down-bedbath-option" onClick={() => setNumberOfBathrooms("2")}>2</button>
                    <button className="property-drop-down-bedbath-option" onClick={() => setNumberOfBathrooms("3")}>3+</button>
                  </div>
                  <p className="property-search-option-selected" id="number-of-bathrooms">{numberOfBathrooms}</p>
                </div>
              </div>
            </div>
            <div className="property-search-div-grid-item-3">
              <button className="property-search-button" type="button">Search</button>
            </div>
          </div>
        </div>
        <div className="main-content-grid-item" id="featured">
          <p className="featured-section-title">Featured</p>
          <div className="featured-houses-div">
            <div className="featured-houses-item">
              <Listing />
            </div>
            <div className="featured-houses-item">
              <Listing />
            </div>
            <div className="featured-houses-item">
              <Listing />
            </div>
            <div className="featured-houses-item">
              <Listing />
            </div>
          </div>
        </div>
        <div className="main-content-grid-item" id="new-listings">
        <p className="new-listings-section-title">New Listings</p>
        <div className="new-listings-houses-div">
            <div className="listed-house">
              <Listing />
            </div>
            <div className="listed-house">
              <Listing />
            </div>
            <div className="listed-house">
              <Listing />
            </div>
            <div className="listed-house">
              <Listing />
            </div>
            <div className="listed-house">
              <Listing />
            </div>
            <div className="listed-house">
              <Listing />
            </div>
            <div className="listed-house">
              <Listing />
            </div>
            <div className="listed-house">
              <Listing />
            </div>
          </div>
        </div>
        <div className="main-content-grid-item" id="tenant-news">
          <p className="tenant-news-section-title">Tenant news</p>
          <div className="tenant-news-articles-div">
            <div className="tenant-news-articles-grid">
              <div className="tenant-news-article">
                <img src={GreenKey} className="tenant-news-image" />
                <p className="tenant-news-title">Tenant quarterly newsletter - March 2022</p>
              </div>
              <div className="tenant-news-article">
                <img src={CovidNews} className="tenant-news-image" />
                <p className="tenant-news-title">Covid 19 update from Auckland property management</p>
              </div>
              <div className="tenant-news-article">
                <img src={CityNews} className="tenant-news-image" />
                <p className="tenant-news-title">New rules for Tenants announced 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchAHouse;


// const SearchAHouse = () => {
//     const [houses, setHouses] = useState([]);

//     useEffect(() => {
//       const fetchHouses = async () => {
//           const {data} = await axios.get('http://localhost:5000/api/houses');
//           setHouses(data);
//       };
//       fetchHouses();
//   }, []);
// }
  

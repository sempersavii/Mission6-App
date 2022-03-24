import { useState } from "react";
import "./RefineModal.css";

function RefineModal() {
    const [modalSliderValue, setModalSliderValue] = useState(2000);
    const [modalListingPrice, setModalListingPrice] = useState("$2000+");
    const [modalSuburb, setModalSuburb] = useState("");
    const [modalKeySearch, setModalKeySearch] = useState("")

    let modalSeachQuery = { 
        price: modalSliderValue, 
        propertyType: "modal-property-type-all", 
        suburb: modalSuburb,
        bedrooms: "modal-bedrooms-Any", 
        carparks: "modal-carkparks-1", 
        bathrooms: "modal-carparks-any", 
        avaliableNow: false, 
        petFriendly: false, 
        sortBy: "modal-sort-newest",
        keySeach: modalKeySearch
    };
    
    const listOfPropertyTypeIds = ["modal-property-type-all", "modal-property-type-house", "modal-property-type-apartment", "modal-property-type-unit", "modal-property-type-townhouse"];
    const listOfBedroomIds = ["modal-bedrooms-Any", "modal-bedrooms-1", "modal-bedrooms-2", "modal-bedrooms-3+"];
    const listOfCarkparkIds = ["modal-carkparks-1", "modal-carkparks-2", "modal-carkparks-3+"];
    const listOfBathroomIds = ["modal-carparks-any", "modal-carparks-1", "modal-carparks-2", "modal-carparks-3+"];
    const listOfSortByIds = ["modal-sort-newest", "modal-sort-oldest", "modal-sort-highest", "modal-sort-lowest"];


    function HideModal() {
        const modalElement = document.getElementById("refine-modal")
        modalElement.style.display = "none";
    }

    function UpdateModalSlider(e) {
        setModalListingPrice("$" + e.target.value + "+");
        setModalSliderValue(e.target.value)
    }

    function ChangeModalPropertyType(newModalPropertyType) {
        ChangeSelectedMediumButton(newModalPropertyType, listOfPropertyTypeIds);
        modalSeachQuery.propertyType = newModalPropertyType;
    }

    function ChangeModalBedroomNumber(newModalBedroomNumber) {
        ChangeSelectedShortButton(newModalBedroomNumber, listOfBedroomIds);
        modalSeachQuery.bedrooms = newModalBedroomNumber;
    }

    function ChangeModalCarparkNumber(newModalCarparkNumber) {
        ChangeSelectedShortButton(newModalCarparkNumber, listOfCarkparkIds);
        modalSeachQuery.carparks = newModalCarparkNumber;
    }

    function ChangeModalBathroomNumber(newModalBathroomNumber) {
        ChangeSelectedShortButton(newModalBathroomNumber, listOfBathroomIds);
        modalSeachQuery.bathrooms = newModalBathroomNumber;
    }

    function ToggleAvalibility(e) {
        if (modalSeachQuery.avaliableNow) 
        {
            e.target.className = "modal-toggle-buttons modal-toggle-buttons-off"
            modalSeachQuery.avaliableNow = false;
        }
        else 
        {
            e.target.className = "modal-toggle-buttons modal-toggle-buttons-on"
            modalSeachQuery.avaliableNow = true;
        }
    }

    function TogglePets(e) {
        if (modalSeachQuery.petFriendly) 
        {
            e.target.className = "modal-toggle-buttons modal-toggle-buttons-off"
            modalSeachQuery.petFriendly = false;
        }
        else 
        {
            e.target.className = "modal-toggle-buttons modal-toggle-buttons-on"
            modalSeachQuery.petFriendly = true;
        }
    }

    function setKeySearch() {

    }

    function ChangeModalSortBy(newModalSortBy) {
        ChangeSelectedLongButton(newModalSortBy, listOfSortByIds);
        modalSeachQuery.sortBy = newModalSortBy;
    }

    function ChangeSelectedShortButton(id, listOfIds) {
        for (let i = 0; i < listOfIds.length; i++)
        {
            document.getElementById(listOfIds[i]).className = (listOfIds[i] == id) ? "modal-buttons-option modal-buttons-option-selected" : "modal-buttons-option";
        }
    }

    function ChangeSelectedMediumButton(id, listOfIds) {
        for (let i = 0; i < listOfIds.length; i++)
        {
            document.getElementById(listOfIds[i]).className = (listOfIds[i] == id) ? "modal-property-type-button active-property-type-button" : "modal-property-type-button";
        }
    }

    function ChangeSelectedLongButton(id, listOfIds) {
        for (let i = 0; i < listOfIds.length; i++)
        {
            document.getElementById(listOfIds[i]).className = (listOfIds[i] == id) ? "modal-sort-buttons-option modal-sort-selected-buttons-option" : "modal-sort-buttons-option";
        }
    }

    function SearchListings() {
        console.log(modalSeachQuery);
    }

    return (
        <>
            <div className="modal-content" id="bootstrap-overrides">
                <div className="modal-grid-item header">
                    <p className="refined-search-title">Refined Search</p>
                    <span className="close-button" onClick={HideModal}>&times;</span>
                </div>
                <div className="modal-grid-item price">
                    <p className="modal-subtitle">Price</p>
                    <div className="modal-price-range-div">
                        <p className="modal-price-text modal-price-item">Any</p>
                        <input className="modal-price-slider modal-price-item" type="range" id="volume" name="volume" min="2000" max="20000" value={modalSliderValue} onInput={UpdateModalSlider}/>
                        <p className="modal-price-text modal-price-item" id="slider-value">{modalListingPrice}</p>
                    </div>
                </div>
                <div className="modal-grid-item property-type">
                    <p className="modal-subtitle">Property type</p>
                    <div className="modal-property-type-buttons-div">
                        <button className="modal-property-type-button active-property-type-button" id="modal-property-type-all" onClick={() => ChangeModalPropertyType("modal-property-type-all")}>All</button>
                        <button className="modal-property-type-button" id="modal-property-type-house" onClick={() => ChangeModalPropertyType("modal-property-type-house")}>House</button>
                        <button className="modal-property-type-button" id="modal-property-type-apartment" onClick={() => ChangeModalPropertyType("modal-property-type-apartment")}>Apartment</button>
                        <button className="modal-property-type-button" id="modal-property-type-unit" onClick={() => ChangeModalPropertyType("modal-property-type-unit")}>Unit</button>
                        <button className="modal-property-type-button" id="modal-property-type-townhouse" onClick={() => ChangeModalPropertyType("modal-property-type-townhouse")}>Townhouse</button>
                    </div>
                </div>
                <div className="modal-grid-item suburb">
                    <p className="modal-subtitle modal-suburb-item">Enter Suburb</p>
                    <input className="modal-suburb-searchbar modal-suburb-item" id="modal-suburb" type="text" placeholder="eg. Mt Eden, Parnell" value={modalSuburb} onChange={e => setModalSuburb(e.target.value)}></input>
                </div>
                <div className="modal-grid-item bedrooms">
                    <p className="modal-subtitle">Bedrooms</p>
                    <div className="modal-buttons-options-div">
                        <button className="modal-buttons-option modal-buttons-option-selected" id="modal-bedrooms-Any" onClick={() => ChangeModalBedroomNumber("modal-bedrooms-Any")}>Any</button>
                        <button className="modal-buttons-option" id="modal-bedrooms-1" onClick={() => ChangeModalBedroomNumber("modal-bedrooms-1")}>1</button>
                        <button className="modal-buttons-option" id="modal-bedrooms-2" onClick={() => ChangeModalBedroomNumber("modal-bedrooms-2")}>2</button>
                        <button className="modal-buttons-option" id="modal-bedrooms-3+" onClick={() => ChangeModalBedroomNumber("modal-bedrooms-3+")}>3+</button>
                    </div>
                </div>
                <div className="modal-grid-item carparks">
                    <p className="modal-subtitle">Carparks</p>
                    <div className="modal-buttons-options-div">
                        <button className="modal-buttons-option" id="modal-carkparks-1" onClick={() => ChangeModalCarparkNumber("modal-carkparks-1")}>1</button>
                        <button className="modal-buttons-option" id="modal-carkparks-2" onClick={() => ChangeModalCarparkNumber("modal-carkparks-2")}>2</button>
                        <button className="modal-buttons-option" id="modal-carkparks-3+" onClick={() => ChangeModalCarparkNumber("modal-carkparks-3+")}>3+</button>
                    </div>
                </div>
                <div className="modal-grid-item bathrooms">
                    <p className="modal-subtitle">Bathrooms</p>
                    <div className="modal-buttons-options-div">
                        <button className="modal-buttons-option modal-buttons-option-selected" id="modal-carparks-any" onClick={() => ChangeModalBathroomNumber("modal-carparks-any")}>Any</button>
                        <button className="modal-buttons-option" id="modal-carparks-1" onClick={() => ChangeModalBathroomNumber("modal-carparks-1")}>1</button>
                        <button className="modal-buttons-option" id="modal-carparks-2" onClick={() => ChangeModalBathroomNumber("modal-carparks-2")}>2</button>
                        <button className="modal-buttons-option" id="modal-carparks-3+" onClick={() => ChangeModalBathroomNumber("modal-carparks-3+")}>3+</button>
                    </div>
                </div>
                <div className="modal-grid-item pets">
                    <div className="modal-buttons-options-div">
                        <button className="modal-toggle-buttons modal-toggle-buttons-off" onClick={ToggleAvalibility}>Avaliable now</button>
                        <button className="modal-toggle-buttons modal-toggle-buttons-off" onClick={TogglePets}>Pet friendly</button>
                    </div>
                </div>
                <div className="modal-grid-item sort">
                    <p className="modal-subtitle">Sort by</p>
                    <div className="modal-sort-buttons-options-div">
                        <button className="modal-sort-buttons-option modal-sort-selected-buttons-option" id="modal-sort-newest" onClick={() => ChangeModalSortBy("modal-sort-newest")}>Newest</button>
                        <button className="modal-sort-buttons-option" id="modal-sort-oldest" onClick={() => ChangeModalSortBy("modal-sort-oldest")}>Oldest</button>
                        <button className="modal-sort-buttons-option" id="modal-sort-highest" onClick={() => ChangeModalSortBy("modal-sort-highest")}>Highest price</button>
                        <button className="modal-sort-buttons-option" id="modal-sort-lowest" onClick={() => ChangeModalSortBy("modal-sort-lowest")}>Lowest price</button>
                    </div>
                </div>
                <div className="modal-grid-item search">
                    <input className="modal-searchbar modal-bottom-div-item" type="text" placeholder="Search Keywords" value={modalKeySearch} onChange={e => setModalKeySearch(e.target.value)}></input>
                    <button className="modal-search-button modal-bottom-div-item" onClick={SearchListings}>Search</button>
                </div>
            </div>
        </>
    );
}

export default RefineModal;
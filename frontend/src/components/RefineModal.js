import { useState } from "react";
import "./RefineModal.css";

function RefineModal() {
    
    const [modalSliderValue, setModalSliderValue] = useState(2000);
    const [modalListingPrice, setModalListingPrice] = useState("$2000+");
    
    function HideModal() {
        const modalElement = document.getElementById("refine-modal")
        modalElement.style.display = "none";
    }

    function UpdateModalSlider(e) {
        setModalListingPrice("$" + e.target.value + "+");
        setModalSliderValue(e.target.value)
    }

    return (
        <>
            <div className="modal-content" id="bootstrap-overrides">
                <div className="modal-grid-item header">
                    <p class="refined-search-title">Refined Search</p>
                    <span class="close-button" onClick={HideModal}>&times;</span>
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
                        <button className="modal-property-type-button active-property-type-button">All</button>
                        <button className="modal-property-type-button">House</button>
                        <button className="modal-property-type-button">Apartment</button>
                        <button className="modal-property-type-button">Unit</button>
                        <button className="modal-property-type-button">Townhouse</button>
                    </div>
                </div>
                <div className="modal-grid-item suburb">
                    <p className="modal-subtitle modal-suburb-item">Enter Suburb</p>
                    <input className="modal-suburb-searchbar modal-suburb-item" type="text" placeholder="eg. Mt Eden, Parnell"></input>
                </div>
                <div className="modal-grid-item bedrooms">
                    <p className="modal-subtitle">Bedrooms</p>
                    <div className="modal-buttons-options-div">
                        <button className="modal-buttons-option modal-buttons-option-selected">Any</button>
                        <button className="modal-buttons-option">1</button>
                        <button className="modal-buttons-option">2</button>
                        <button className="modal-buttons-option">3+</button>
                    </div>
                </div>
                <div className="modal-grid-item carparks">
                    <p className="modal-subtitle">Carparks</p>
                    <div className="modal-buttons-options-div">
                        <button className="modal-buttons-option">1</button>
                        <button className="modal-buttons-option">2</button>
                        <button className="modal-buttons-option">3+</button>
                    </div>
                </div>
                <div className="modal-grid-item bathrooms">
                    <p className="modal-subtitle">Bathrooms</p>
                    <div className="modal-buttons-options-div">
                        <button className="modal-buttons-option modal-buttons-option-selected">Any</button>
                        <button className="modal-buttons-option">1</button>
                        <button className="modal-buttons-option">2</button>
                        <button className="modal-buttons-option">3+</button>
                    </div>
                </div>
                <div className="modal-grid-item pets">
                    <div className="modal-buttons-options-div">
                        <button className="modal-pets-buttons-option">Avaliable now</button>
                        <button className="modal-pets-buttons-option">Pet friendly</button>
                    </div>
                </div>
                <div className="modal-grid-item sort">
                    <p className="modal-subtitle">Sort by</p>
                    <div className="modal-sort-buttons-options-div">
                        <button className="modal-sort-buttons-option modal-sort-selected-buttons-option">Newest</button>
                        <button className="modal-sort-buttons-option">Oldest</button>
                        <button className="modal-sort-buttons-option">Highest price</button>
                        <button className="modal-sort-buttons-option">Lowest price</button>
                    </div>
                </div>
                <div className="modal-grid-item search">
                    <input className="modal-searchbar modal-bottom-div-item" type="text" placeholder="Search Keywords"></input>
                    <button className="modal-search-button modal-bottom-div-item">Search</button>
                </div>
            </div>
        </>
    );
}

export default RefineModal;
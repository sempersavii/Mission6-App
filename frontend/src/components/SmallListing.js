import { Link } from 'react-router-dom';
import React from "react";
import "./SmallListing.css"

import placeholderImage from "../images/apartment1.jpg"
import bedroom from "../images/Bed.png"
import bathroom from "../images/Bathtub.png"
import car from "../images/Car.png"
import dog from "../images/No Animals.png"

function SmallListing() {    
    return (
        <>
            <Link to="/showahouse" style={{ textDecoration: 'none' }}>
                <div className="listing-div">
                    <img src={placeholderImage} className="listing-image" />
                    <p className="listing-address">38K Horeka Avenue, Mount Eden, 1024</p>
                    <p className="listing-price">$625/Week</p>
                    <div className="listing-features">
                        <div>
                            <img src={bedroom} className="listing-bedrooms-icon"></img>
                            <p className="listing-bedrooms">2</p>
                        </div>
                        <div>
                            <img src={bathroom} className="listing-bathrooms-icon"></img>
                            <p className="listing-bathrooms">1</p>
                        </div>
                        <div>
                            <img src={car} className="listing-garage-icon"></img>
                            <p className="listing-garage">2</p>
                        </div>
                        <div>
                            <img src={dog} className="listing-pets"></img>
                        </div>
                        <div>
                            <p className="listing-type">Apartment</p>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default SmallListing;
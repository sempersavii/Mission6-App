import { useState } from 'react';
import { Link } from 'react-router-dom';

import Bed from '../images/Bed.png';
import Bathtub from '../images/Bathtub.png';
import NoAnimals from '../images/No Animals.png';
import Car from '../images/Car.png';

import './ShowAHouse.css';

const ShowAHouse = () => {
  const [subImage, setSubImage] = useState(1)
    return (
      <>
        <div className="App">
          <div id='content-box'>
            <div className='horizontal'>
              <img className='main-image' src={subImage === 1 ? "./images/apartment1.jpg" : "./images/apartment3.jpg"} alt="" />
            </div>
            <div className='horizontal sub-images'>
              <div className='sub-image-container'>
                <img className={subImage === 1 ? 'sub-image active' : 'sub-image'} onClick={() => setSubImage(1)} src="./images/apartment1.jpg" alt="" />
              </div>
              <div className='sub-image-container'>
                <img className={subImage === 2 ? 'sub-image active' : 'sub-image'} onClick={() => setSubImage(2)} src="./images/apartment3.jpg" alt="" />
              </div>
              <div className='sub-image-container'>
                <img className={subImage === 3 ? 'sub-image active' : 'sub-image'} onClick={() => setSubImage(3)} src="./images/apartment1.jpg" alt="" />
              </div>
            </div>
            <div className='horizontal text-center'>
              <img src={Bed} alt="bed" className='select-img' />Photos <img src={Bed} alt="bed" className='select-img' />Videos <img src={Bed} alt="bed" className='select-img' />Map
            </div>
            <div className='horizontal'>
              <div className='column'>
                <button className='button'>Apply online</button>{' '}
                <Link to='/BookAView'><button className='button-secondary'>Book a viewing</button></Link>
                <div className='heading2'>City Centre - 2 Bedroom apartment</div>
                <div className='sub-heading'>1106/207 Federal street , City Centre (Auckland City) , 1010 </div>
                <div className='sub-heading'>Apartment</div>
                <div className='heading2'>$600 per week</div>
                <div className='options-text'><img src={Bed} alt="bed" className='option-img' /> Apartment</div>
                <div className='options-text'>
                  <img src={Bed} alt="bed" className='option-img' /> 2 Bedrooms
                  <img src={Bathtub} alt="bathtub" className='option-img' /> 1 Bathroom
                  <img src={Car} alt="car" className='option-img' /> 1 Carpark
                  <img src={NoAnimals} alt="noanimals" className='option-img' /> Pet friendly
                </div>
                <div className='heading3'>Available</div>
                <div className='options-text'>Available from Friday 18th March 2022</div>
                <div className='paragraph'>Located in the Heart of the City, Federal Street is the gateway to SKYCITY. It has also transformed into an inner-city hot spot for food lovers with some of the best eateries in Auckland. Located within a few minutes walking distance from the universities, public transport facilities, Queen St shopping and famous Auckland City Waterfront and Viaduct Basin.</div>
                <div className='heading3'>Property details</div>
                <div className='paragraph'>2 double bedrooms with good quality mattresses<br/>
                  1 spacious bathroom<br/>
                  Rent Includes cold water<br/>
                  Power, phone & internet not included<br/>
                </div>
                <div className='paragraph'>Move-in cost: 4 weeks bond and 1-week rent.</div>
              </div>

              <div className='column'>
                <div className='agent'>
                  <div className='top-agent'>
                  </div>
                  <img className='agent-image' src="./images/apartment1.jpg" alt="bed" /> 
                  <div className='agent-details'>
                    <div className='sub-heading'>Ashley Zhang</div>
                    <div className='agent-contact-text'><img src={Bed} alt="bed" className='social-img' /> 021 136 6789</div>
                    <div className='agent-contact-text'><img src={Bed} alt="bed" className='social-img' /> ashlee.zhang@akproperty.net</div>
                  </div>
                </div>
                <div className='share-listing'>
                  <div className='paragraph'>Share this listing: {' '}
                    <img src={Bed} alt="bed" className='social-img' />{' '}
                    <img src={Bed} alt="bed" className='social-img' />{' '}
                    <img src={Bed} alt="bed" className='social-img' />{' '}
                    <img src={Bed} alt="bed" className='social-img' />
                  </div>
                </div>
              </div>
            </div>


            <div className='horizontal'>
              <button className='button'>Apply online</button>{' '}
              <Link to='/BookAView'><button className='button-secondary'>Book a viewing</button></Link>
              <button className='return-search' href="/SearchAHouse">Return to Search <img className='return-img' src={Bed} alt="bed" /></button>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default ShowAHouse;
import Bed from '../images/Bed.png';
import Bathtub from '../images/Bathtub.png';
import NoAnimals from '../images/No Animals.png';
import Car from '../images/Car.png';

import './ShowAHouse.css';

const ShowAHouse = () => {
    return (
      <>
        <div className="App">
          <div id='content-box'>
            <div className='horizontal'>
              <img className='main-image' src="./images/apartment1.jpg" alt="" />
            </div>
            <div className='horizontal sub-images'>
              <img className='sub-image' src="./images/apartment1.jpg" alt="" />
            </div>
            <div className='horizontal text-center'>
              <img src={Bed} alt="bed" className='select-img' />Photos <img src={Bed} alt="bed" className='select-img' />Videos <img src={Bed} alt="bed" className='select-img' />Map
            </div>
            <div className='horizontal'>
              <div className='column'>
                <button className='button'>Apply Online</button>{' '}
                <button className='button-secondary'>Book Viewing</button>
                <h2>City Centre - 2 Bedroom apartment</h2>
                <p>1106/207 Federal street , City Centre (Auckland City) , 1010 </p>
                <p>Apartment</p>
                <h2>$600 per week</h2>
                <img src={Bed} alt="bed" className='option-img' /> 2 Bedrooms
                <img src={Bathtub} alt="bathtub" className='option-img' /> 1 Bathroom
                <img src={Car} alt="car" className='option-img' /> 1 Carpark
                <img src={NoAnimals} alt="noanimals" className='option-img' /> Pet friendly
                <h3>Available</h3>
                <p>Available from Friday 18th March 2022</p>
                <p>Located in the Heart of the City, Federal Street is the gateway to SKYCITY. It has also transformed into an inner-city hot spot for food lovers with some of the best eateries in Auckland. Located within a few minutes walking distance from the universities, public transport facilities, Queen St shopping and famous Auckland City Waterfront and Viaduct Basin.</p>
                <h3>Property details</h3>
                <p>2 double bedrooms with good quality mattresses<br/>
                  1 spacious bathroom<br/>
                  Rent Includes cold water<br/>
                  Power, phone & internet not included<br/>
                </p>
                <p>Move-in cost: 4 weeks bond and 1-week rent.</p>
              </div>

              <div className='column'>
                <img src="./images/apartment1.jpg" width={70} alt="bed" /> 
                Ashley Zhang<br/>
                <img src={Bed} alt="bed" className='social-img' /> 021 136 6789<br/>
                <img src={Bed} alt="bed" className='social-img' /> ashlee.zhang@akproperty.net
                <p>Share this listing: 
                  <img src={Bed} alt="bed" className='social-img' />
                  <img src={Bed} alt="bed" className='social-img' />
                  <img src={Bed} alt="bed" className='social-img' />
                  <img src={Bed} alt="bed" className='social-img' />
                </p>
              </div>
            </div>


            <div className='horizontal'>
              <button className='button'>Apply Online</button>{' '}
              <button className='button'>Book Viewing</button>
              <button className='return-search' href="/SearchAHouse">Return to Search <img src={Bed} alt="bed" /></button>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default ShowAHouse;
import React, { useState } from 'react'
import "./Home.css"

export default function Home() {

  const [selectedOption, setSelectedOption] = useState("buy");
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  const handleButtonHover = (option) => {
    setHoveredButton(option);
  };

  return (
    <>

      <div className='heroSectionContainer '>
        <div className='heroSectionContent'>

          <div className="heroSectionHeading text-center pb-2">
            <h1 className='heroHeading'>Where Dreams Find Their Address.</h1>
          </div>
        </div>
        <div className='heroSectionSearch'>
          <div className='buyToSell'>
            <button className={selectedOption === 'buy' ? 'active' : hoveredButton === 'buy' ? 'hovered' : ''}
              onClick={() => handleButtonClick('buy')}
              onMouseEnter={() => handleButtonHover('buy')}
              onMouseLeave={() => setHoveredButton(null)}>
              Buy
            </button>
            <button className={selectedOption === 'rent' ? 'active' : hoveredButton === 'sell' ? 'hovered' : ''}
              onClick={() => handleButtonClick('rent')}
              onMouseEnter={() => handleButtonHover('rent')}
              onMouseLeave={() => setHoveredButton(null)}>
              Rent
            </button>
            <button className={selectedOption === 'sell' ? 'active' : hoveredButton === 'rent' ? 'hovered' : ''}
              onClick={() => handleButtonClick('sell')}
              onMouseEnter={() => handleButtonHover('sell')}
              onMouseLeave={() => setHoveredButton(null)}>
              Sell
            </button>

          </div>
          {selectedOption === 'buy' &&
            <div className='buyToSellInputs col-auto'>
              <div>
                <h4>City/Street</h4>
                <select className="form-select block w-full mt-1 border rounded-lg px-0 py-2">
                  <option value="Canada">Canada</option>
                  <option value="Toronto">Toronto</option>
                  <option value="Vancouver">Vancouver</option>
                </select>
              </div>
              <div className="line"></div>
              <div>
                <h4>Property/Type</h4>

                <select className="form-select block w-full mt-1 border rounded-lg px-0 py-2">
                  <option>Apartments</option>
                  <option>Condo</option>
                  <option>Condos</option>
                  <option>House</option>
                  <option>Houses</option>
                  <option>Town House</option><option>Town House</option>
                  <option>Town Houses</option>
                </select>
              </div>
              <div className="line"></div>
              <div>
                <h4>Price Range</h4>
                <select className="form-select block w-full mt-1 border rounded-lg  py-2">
                  <option>$8000 To $15000</option>
                </select>
              </div>
              <div className="line"></div>
              <button className="bg-[#003430] text-white py-2 px-6 rounded-3xl flex items-center space-x-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Button/Serch Icon">
                    <path id="Vector" d="M14.6247 15.9077L9.26776 10.5507C8.8426 10.8909 8.35367 11.1601 7.80097 11.3585C7.24826 11.5569 6.66013 11.6561 6.03656 11.6561C4.49183 11.6561 3.18447 11.1211 2.11449 10.0512C1.04451 8.98119 0.509521 7.67383 0.509521 6.12909C0.509521 4.58436 1.04451 3.277 2.11449 2.20702C3.18447 1.13704 4.49183 0.602051 6.03656 0.602051C7.5813 0.602051 8.88866 1.13704 9.95864 2.20702C11.0286 3.277 11.5636 4.58436 11.5636 6.12909C11.5636 6.75266 11.4644 7.34079 11.266 7.8935C11.0676 8.4462 10.7983 8.93513 10.4582 9.36029L15.8152 14.7173L14.6247 15.9077ZM6.03656 9.95551C7.09946 9.95551 8.00292 9.5835 8.74694 8.83947C9.49097 8.09545 9.86298 7.19199 9.86298 6.12909C9.86298 5.0662 9.49097 4.16274 8.74694 3.41872C8.00292 2.67469 7.09946 2.30268 6.03656 2.30268C4.97367 2.30268 4.07021 2.67469 3.32619 3.41872C2.58216 4.16274 2.21015 5.0662 2.21015 6.12909C2.21015 7.19199 2.58216 8.09545 3.32619 8.83947C4.07021 9.5835 4.97367 9.95551 6.03656 9.95551Z" fill="white" />
                  </g>
                </svg>
                <span>SEARCH</span>
              </button>

            </div>
          }
          {selectedOption === 'rent' &&
            <div className='buyToSellInputs col-auto'>
              <div>
                <h4>City/Street</h4>
                <select className="form-select block w-full mt-1 border rounded-lg px-0 py-2">
                  <option value="Canada">Canada</option>
                  <option value="Toronto">Toronto</option>
                  <option value="Vancouver">Vancouver</option>
                </select>
              </div>
              <div className="line"></div>
              <div>
                <h4>Property/Type</h4>

                <select className="form-select block w-full mt-1 border rounded-lg px-0 py-2">
                  <option>Apartments</option>
                  <option>Condo</option>
                  <option>Condos</option>
                  <option>House</option>
                  <option>Houses</option>
                  <option>Town House</option><option>Town House</option>
                  <option>Town Houses</option>
                </select>
              </div>
              <div className="line"></div>
              <div>
                <h4>Price Range</h4>
                <select className="form-select block w-full mt-1 border rounded-lg  py-2">
                  <option>$300 To $800</option>
                </select>
              </div>
              <div className="line"></div>
              <button className="bg-[#003430] text-white py-2 px-6 rounded-3xl flex items-center space-x-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Button/Serch Icon">
                    <path id="Vector" d="M14.6247 15.9077L9.26776 10.5507C8.8426 10.8909 8.35367 11.1601 7.80097 11.3585C7.24826 11.5569 6.66013 11.6561 6.03656 11.6561C4.49183 11.6561 3.18447 11.1211 2.11449 10.0512C1.04451 8.98119 0.509521 7.67383 0.509521 6.12909C0.509521 4.58436 1.04451 3.277 2.11449 2.20702C3.18447 1.13704 4.49183 0.602051 6.03656 0.602051C7.5813 0.602051 8.88866 1.13704 9.95864 2.20702C11.0286 3.277 11.5636 4.58436 11.5636 6.12909C11.5636 6.75266 11.4644 7.34079 11.266 7.8935C11.0676 8.4462 10.7983 8.93513 10.4582 9.36029L15.8152 14.7173L14.6247 15.9077ZM6.03656 9.95551C7.09946 9.95551 8.00292 9.5835 8.74694 8.83947C9.49097 8.09545 9.86298 7.19199 9.86298 6.12909C9.86298 5.0662 9.49097 4.16274 8.74694 3.41872C8.00292 2.67469 7.09946 2.30268 6.03656 2.30268C4.97367 2.30268 4.07021 2.67469 3.32619 3.41872C2.58216 4.16274 2.21015 5.0662 2.21015 6.12909C2.21015 7.19199 2.58216 8.09545 3.32619 8.83947C4.07021 9.5835 4.97367 9.95551 6.03656 9.95551Z" fill="white" />
                  </g>
                </svg>
                <span>SEARCH</span>
              </button>

            </div>
          }
          {selectedOption === 'sell' &&
            <div className='buyToSellInputs col-auto'>
              <div>
                <h4>City/Street</h4>
                <select className="form-select block w-full mt-1 border rounded-lg px-0 py-2">
                  <option value="Canada">Canada</option>
                  <option value="Toronto">Toronto</option>
                  <option value="Vancouver">Vancouver</option>
                </select>
              </div>
              <div className="line"></div>
              <div>
                <h4>Property/Type</h4>

                <select className="form-select block w-full mt-1 border rounded-lg px-0 py-2">
                  <option>Apartments</option>
                  <option>Condo</option>
                  <option>Condos</option>
                  <option>House</option>
                  <option>Houses</option>
                  <option>Town House</option><option>Town House</option>
                  <option>Town Houses</option>
                </select>
              </div>
              <div className="line"></div>
              <div>
                <h4>Price Range</h4>
                <select className="form-select block w-full mt-1 border rounded-lg  py-2">
                  <option>$8000 To $15000</option>
                </select>
              </div>
              <div className="line"></div>
              <button className="bg-[#003430] text-white py-2 px-6 rounded-3xl flex items-center space-x-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Button/Serch Icon">
                    <path id="Vector" d="M14.6247 15.9077L9.26776 10.5507C8.8426 10.8909 8.35367 11.1601 7.80097 11.3585C7.24826 11.5569 6.66013 11.6561 6.03656 11.6561C4.49183 11.6561 3.18447 11.1211 2.11449 10.0512C1.04451 8.98119 0.509521 7.67383 0.509521 6.12909C0.509521 4.58436 1.04451 3.277 2.11449 2.20702C3.18447 1.13704 4.49183 0.602051 6.03656 0.602051C7.5813 0.602051 8.88866 1.13704 9.95864 2.20702C11.0286 3.277 11.5636 4.58436 11.5636 6.12909C11.5636 6.75266 11.4644 7.34079 11.266 7.8935C11.0676 8.4462 10.7983 8.93513 10.4582 9.36029L15.8152 14.7173L14.6247 15.9077ZM6.03656 9.95551C7.09946 9.95551 8.00292 9.5835 8.74694 8.83947C9.49097 8.09545 9.86298 7.19199 9.86298 6.12909C9.86298 5.0662 9.49097 4.16274 8.74694 3.41872C8.00292 2.67469 7.09946 2.30268 6.03656 2.30268C4.97367 2.30268 4.07021 2.67469 3.32619 3.41872C2.58216 4.16274 2.21015 5.0662 2.21015 6.12909C2.21015 7.19199 2.58216 8.09545 3.32619 8.83947C4.07021 9.5835 4.97367 9.95551 6.03656 9.95551Z" fill="white" />
                  </g>
                </svg>

                <span>SEARCH</span>
              </button>

            </div>
          }
        </div>
      </div>


      {/* Services */}

      <div className="ourServices mt-[60px]">
        <h1 className='serviceHeading text-center'>Our Services</h1>
        <div className="servicesContainer mx-5 mt-5">
          <div className="buyService">
            <div className="imageIcon">
              <svg width="35" height="35" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.6332 32.9763L32.8763 26.2193L27.6789 24.072C29.4095 21.6111 30.3366 18.6751 30.3333 15.6666C30.3333 7.5794 23.7539 1 15.6666 1C7.5794 1 1 7.5794 1 15.6666C1 23.7539 7.5794 30.3333 15.6666 30.3333C18.7013 30.3367 21.6615 29.3936 24.1349 27.6352L26.2765 32.8185L33.0333 39.5758C33.4666 40.0092 33.981 40.353 34.5472 40.5875C35.1134 40.822 35.7203 40.9428 36.3331 40.9428C36.9459 40.9428 37.5528 40.8221 38.119 40.5876C38.6852 40.3531 39.1997 40.0094 39.633 39.576C40.0664 39.1427 40.4102 38.6283 40.6447 38.0621C40.8792 37.4959 41 36.889 41 36.2762C41 35.6633 40.8793 35.0565 40.6448 34.4903C40.4103 33.9241 40.0666 33.4096 39.6332 32.9763ZM3.66666 15.6666C3.66666 9.04998 9.04998 3.66666 15.6666 3.66666C22.2833 3.66666 27.6666 9.04998 27.6666 15.6666C27.6666 22.2833 22.2833 27.6666 15.6666 27.6666C9.04998 27.6666 3.66666 22.2833 3.66666 15.6666ZM37.7475 37.6902C37.3721 38.0648 36.8635 38.2751 36.3333 38.2751C35.803 38.2751 35.2944 38.0648 34.919 37.6902L28.538 31.3093L26.5469 26.4897L31.3666 28.4809L37.7477 34.8618C38.1221 35.2372 38.3324 35.7458 38.3324 36.2761C38.3324 36.8063 38.122 37.3149 37.7475 37.6902Z" fill="white" stroke="white" stroke-width="0.6" />
              </svg>

            </div>
            <div className="buyServicePara">
              <h2 className='text-center'>Buy a New Home</h2>
              <p className='text-center'>
                Discover the epitome of modern living with this stunning 2 BR/2 BA Apartments in the heart of City.
              </p>
            </div>
          </div>
          <div className="sellService">
            <div className="imageIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 42 44" fill="none">
                <path d="M40.0773 18.1142L22.3463 1.80166C21.7698 1.27135 21.0108 0.984352 20.2277 1.00066C19.4446 1.01697 18.6981 1.33531 18.1443 1.88916L1.83688 18.1967L1 19.0334V43.0741H16.7143V28.0741H25.2857V43.0741H41V18.9632L40.0773 18.1142ZM20.2891 3.85719C20.3143 3.85719 20.2987 3.86264 20.2879 3.87327C20.2768 3.86264 20.2639 3.85719 20.2891 3.85719ZM38.1429 40.2169H28.1429V28.0741C28.1429 27.3163 27.8418 26.5896 27.306 26.0538C26.7702 25.5179 26.0435 25.2169 25.2857 25.2169H16.7143C15.9565 25.2169 15.2298 25.5179 14.694 26.0538C14.1582 26.5896 13.8571 27.3163 13.8571 28.0741V40.2169H3.85714L3.85714 20.2169L20.2891 3.90943L20.2913 3.9063L38.1429 20.2169V40.2169Z" fill="white" stroke="white" stroke-width="0.6" />
              </svg>

            </div>
            <div className="buyServicePara">
              <h2 className='text-center'>Sell a House</h2>
              <p className='text-center'>
                Discover the epitome of modern living with this stunning 2 BR/2 BA Apartments in the heart of City.
              </p>
            </div>
          </div>
          <div className="rentService">
            <div className="imageIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 48 35" fill="none">
                <path d="M40 7.2H19.2V19.2619H16.9846V15.1619C16.982 12.8389 16.0581 10.6118 14.4155 8.96921C12.773 7.3266 10.5459 6.40262 8.2229 6.4H3.2V0H0V34.4H3.2V29.6257L44.8 29.9585V34.4H48V15.2C47.9976 13.079 47.154 11.0456 45.6542 9.54581C44.1544 8.04604 42.121 7.20241 40 7.2ZM3.2 9.6H8.2229C9.69744 9.60167 11.1111 10.1882 12.1538 11.2308C13.1964 12.2735 13.7829 13.6872 13.7846 15.1617V19.2617H3.2V9.6ZM44.8 26.7584L3.2 26.4256V22.4619H44.8V26.7584ZM44.8 19.2619H22.4V10.4H40C41.2726 10.4015 42.4926 10.9076 43.3925 11.8075C44.2924 12.7074 44.7985 13.9274 44.8 15.2V19.2619Z" fill="white" />
              </svg>

            </div>
            <div className="buyServicePara">
              <h2 className='text-center'>Rent a House</h2>
              <p className='text-center'>
                Discover the epitome of modern living with this stunning 2 BR/2 BA Apartments in the heart of City.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

import React, { useState } from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';
import p1 from "../images/p1.png"


export default function Home() {

  const [selectedOption, setSelectedOption] = useState("buy");
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleButtonClick = (option) => {
    setSelectedOption(option);
  };

  const handleButtonHover = (option) => {
    setHoveredButton(option);
  };



  // Scroll cotent here



  return (
    <>

      <section className='heroSectionContainer '>
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
      </section>


      {/* Services */}

      <section className="ourServices  ">
        <h2 className='serviceHeading text-center text-4xl font-bold '>Our Services</h2>
        <div className="servicesContainer cursor-pointer align-middle  flex flex-col sm:flex-row  justify-between flex-wrap mx-7 my-9 gap-12">


          <div className="buyService flex flex-col flex-1 justify-center p-10 rounded-3xl ">
            <div className="imageIcon">
              <svg width="45" height="45" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.6332 32.9763L32.8763 26.2193L27.6789 24.072C29.4095 21.6111 30.3366 18.6751 30.3333 15.6666C30.3333 7.5794 23.7539 1 15.6666 1C7.5794 1 1 7.5794 1 15.6666C1 23.7539 7.5794 30.3333 15.6666 30.3333C18.7013 30.3367 21.6615 29.3936 24.1349 27.6352L26.2765 32.8185L33.0333 39.5758C33.4666 40.0092 33.981 40.353 34.5472 40.5875C35.1134 40.822 35.7203 40.9428 36.3331 40.9428C36.9459 40.9428 37.5528 40.8221 38.119 40.5876C38.6852 40.3531 39.1997 40.0094 39.633 39.576C40.0664 39.1427 40.4102 38.6283 40.6447 38.0621C40.8792 37.4959 41 36.889 41 36.2762C41 35.6633 40.8793 35.0565 40.6448 34.4903C40.4103 33.9241 40.0666 33.4096 39.6332 32.9763ZM3.66666 15.6666C3.66666 9.04998 9.04998 3.66666 15.6666 3.66666C22.2833 3.66666 27.6666 9.04998 27.6666 15.6666C27.6666 22.2833 22.2833 27.6666 15.6666 27.6666C9.04998 27.6666 3.66666 22.2833 3.66666 15.6666ZM37.7475 37.6902C37.3721 38.0648 36.8635 38.2751 36.3333 38.2751C35.803 38.2751 35.2944 38.0648 34.919 37.6902L28.538 31.3093L26.5469 26.4897L31.3666 28.4809L37.7477 34.8618C38.1221 35.2372 38.3324 35.7458 38.3324 36.2761C38.3324 36.8063 38.122 37.3149 37.7475 37.6902Z" fill="white" stroke="white" strokeWidth="0.6" />
              </svg>
            </div>

            <div className="buyServicePara">
              <h6 className='text-center  text-black-700 font-semibold'>Buy a New Home</h6>
              <p className='text-center '>
                Discover the epitome of modern living with this stunning 2 BR/2 BA Apartments in the heart of City.
              </p>
            </div>

          </div>


          <div className="sellService flex flex-col flex-1  justify-center p-10 rounded-3xl">
            <div className="imageIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 42 44" fill="none">
                <path d="M40.0773 18.1142L22.3463 1.80166C21.7698 1.27135 21.0108 0.984352 20.2277 1.00066C19.4446 1.01697 18.6981 1.33531 18.1443 1.88916L1.83688 18.1967L1 19.0334V43.0741H16.7143V28.0741H25.2857V43.0741H41V18.9632L40.0773 18.1142ZM20.2891 3.85719C20.3143 3.85719 20.2987 3.86264 20.2879 3.87327C20.2768 3.86264 20.2639 3.85719 20.2891 3.85719ZM38.1429 40.2169H28.1429V28.0741C28.1429 27.3163 27.8418 26.5896 27.306 26.0538C26.7702 25.5179 26.0435 25.2169 25.2857 25.2169H16.7143C15.9565 25.2169 15.2298 25.5179 14.694 26.0538C14.1582 26.5896 13.8571 27.3163 13.8571 28.0741V40.2169H3.85714L3.85714 20.2169L20.2891 3.90943L20.2913 3.9063L38.1429 20.2169V40.2169Z" fill="white" stroke="white" strokeWidth="0.6" />
              </svg>

            </div>
            <div className="sellServicePara">
              <h6 className='text-center  text-black-700 font-semibold  '>Sell a House</h6>
              <p className='text-center '>
                Discover the epitome of modern living with this stunning 2 BR/2 BA Apartments in the heart of City.
              </p>
            </div>
          </div>
          <div className="rentService flex flex-col flex-1 justify-center p-10 rounded-3xl">
            <div className="imageIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 48 35" fill="none">
                <path d="M40 7.2H19.2V19.2619H16.9846V15.1619C16.982 12.8389 16.0581 10.6118 14.4155 8.96921C12.773 7.3266 10.5459 6.40262 8.2229 6.4H3.2V0H0V34.4H3.2V29.6257L44.8 29.9585V34.4H48V15.2C47.9976 13.079 47.154 11.0456 45.6542 9.54581C44.1544 8.04604 42.121 7.20241 40 7.2ZM3.2 9.6H8.2229C9.69744 9.60167 11.1111 10.1882 12.1538 11.2308C13.1964 12.2735 13.7829 13.6872 13.7846 15.1617V19.2617H3.2V9.6ZM44.8 26.7584L3.2 26.4256V22.4619H44.8V26.7584ZM44.8 19.2619H22.4V10.4H40C41.2726 10.4015 42.4926 10.9076 43.3925 11.8075C44.2924 12.7074 44.7985 13.9274 44.8 15.2V19.2619Z" fill="white" />
              </svg>

            </div>
            <div className="buyServicePara">
              <h6 className='text-center  text-black-700 font-semibold'>Rent a House</h6>
              <p className='text-center '>
                Discover the epitome of modern living with this stunning 2 BR/2 BA Apartments in the heart of City.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* NewListing */}

      <section className='newListing mt-[60px]'>
        <div className="newListingHeadings  ">
          <div className="headingList text-center">
            <h2 className=' text-4xl font-bold'>New Listing</h2>
            <p>The best investment you can make is in yourself.</p>
          </div>

          <div className='categories flex flex-col items-end'>
            <div className='headingBtn'>
              <button type='button' >
                <span>View All</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1.4 13L0 11.6L9.6 2H1V0H13V12H11V3.4L1.4 13Z" fill="white" />
                </svg>

              </button>
            </div>
            <div className='listingCategories gap-9 flex flex-wrap'>
              <button type='button'>CONDO</button>
              <button type='button'>Town House</button>
              <button type='button'>House</button>
              <button type='button'>1/2 Duplex</button>
            </div>
          </div>

          <div className='listingOverview flex justify-between '>
            <div className='property flex-1  p-2 bg-red-500 h-[520px] mx-5'>
              <div className="listImage rounded-xl p-2 h-[251.53px]">

                <div className="distance">
                  2km away
                </div>
                <div className="type">
                  For rent
                </div>
                <div className="image">
                  <img src={p1} alt="" className='w-full' />
                </div>
              </div>

              <div className='propertyAddress mt-5 '>
                <p className='flex items-center gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                    <path d="M7.7976 10.1037C8.30435 10.1037 8.73815 9.92326 9.09902 9.5624C9.45988 9.20153 9.64032 8.76773 9.64032 8.26098C9.64032 7.75424 9.45988 7.32043 9.09902 6.95957C8.73815 6.5987 8.30435 6.41827 7.7976 6.41827C7.29086 6.41827 6.85705 6.5987 6.49619 6.95957C6.13532 7.32043 5.95489 7.75424 5.95489 8.26098C5.95489 8.76773 6.13532 9.20153 6.49619 9.5624C6.85705 9.92326 7.29086 10.1037 7.7976 10.1037ZM7.7976 19.3173C5.3253 17.2135 3.47875 15.2594 2.25795 13.4551C1.03716 11.6508 0.426758 9.98085 0.426758 8.44525C0.426758 6.14186 1.16768 4.30683 2.64953 2.94015C4.13138 1.57348 5.8474 0.890137 7.7976 0.890137C9.74781 0.890137 11.4638 1.57348 12.9457 2.94015C14.4275 4.30683 15.1684 6.14186 15.1684 8.44525C15.1684 9.98085 14.5581 11.6508 13.3373 13.4551C12.1165 15.2594 10.2699 17.2135 7.7976 19.3173Z" fill="#CA0101" />
                  </svg>
                  <span>Columbia Canada</span>
                </p>
              </div>

              <div className="propertyDetails flex flex-col gap-2 mt-3">
                <p className='Price font-semibold'>$2000</p>
                <p className='font-semibold'>NORTH VANCOUVER</p>
                <p className='font-thin'>Beautiful 1 family house in heart of North vancouver
                  newly renovated with Furniture </p>
              </div>

              <div className="propertyFeatures">
                <div className='flex justify-between items-center'>
                  <div className='flex gap-2'>
                    <div className='flex flex-col justify-center'>
                      <div className='flex items-center justify-center gap-1'>

                        <span>2</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                          <path d="M2.6626 18.3743V12.8462C2.6626 12.4316 2.74706 12.0554 2.91597 11.7175C3.08489 11.3797 3.30755 11.0803 3.58395 10.8192V8.23941C3.58395 7.47161 3.85268 6.81899 4.39014 6.28153C4.9276 5.74407 5.58022 5.47534 6.34802 5.47534H10.0334C10.3866 5.47534 10.7168 5.5406 11.0239 5.67113C11.331 5.80166 11.6151 5.98209 11.8762 6.21243C12.1372 5.98209 12.4213 5.80166 12.7284 5.67113C13.0355 5.5406 13.3657 5.47534 13.7189 5.47534H17.4043C18.1721 5.47534 18.8247 5.74407 19.3622 6.28153C19.8996 6.81899 20.1684 7.47161 20.1684 8.23941V10.8192C20.4448 11.0803 20.6674 11.3797 20.8363 11.7175C21.0053 12.0554 21.0897 12.4316 21.0897 12.8462V18.3743H19.247V16.5316H4.50531V18.3743H2.6626ZM12.7975 10.0821H18.3256V8.23941C18.3256 7.97836 18.2373 7.75954 18.0608 7.58294C17.8842 7.40635 17.6653 7.31805 17.4043 7.31805H13.7189C13.4578 7.31805 13.239 7.40635 13.0624 7.58294C12.8858 7.75954 12.7975 7.97836 12.7975 8.23941V10.0821ZM5.42666 10.0821H10.9548V8.23941C10.9548 7.97836 10.8665 7.75954 10.6899 7.58294C10.5133 7.40635 10.2945 7.31805 10.0334 7.31805H6.34802C6.08697 7.31805 5.86815 7.40635 5.69155 7.58294C5.51496 7.75954 5.42666 7.97836 5.42666 8.23941V10.0821Z" fill="#202124" />
                        </svg>
                      </div>
                      <div>
                        <span className='font-thin text-sm'>
                          Bedrooms
                        </span>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                      <div className='flex items-center justify-center gap-1'>

                        <span>2</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                          <path d="M4.57836 6.35072C4.14763 6.35072 3.77889 6.19735 3.47216 5.89062C3.16542 5.58388 3.01205 5.21515 3.01205 4.78441C3.01205 4.35368 3.16542 3.98495 3.47216 3.67821C3.77889 3.37148 4.14763 3.21811 4.57836 3.21811C5.00909 3.21811 5.37783 3.37148 5.68456 3.67821C5.9913 3.98495 6.14466 4.35368 6.14466 4.78441C6.14466 5.21515 5.9913 5.58388 5.68456 5.89062C5.37783 6.19735 5.00909 6.35072 4.57836 6.35072ZM3.01205 16.5317C2.79016 16.5317 2.60416 16.4566 2.45406 16.3065C2.30395 16.1564 2.2289 15.9704 2.2289 15.7485C1.79817 15.7485 1.42943 15.5952 1.1227 15.2884C0.815965 14.9817 0.662598 14.613 0.662598 14.1822V9.48333H3.01205V8.89596C3.01205 8.39997 3.18174 7.98229 3.5211 7.64292C3.86047 7.30355 4.27815 7.13387 4.77415 7.13387C5.0352 7.13387 5.27667 7.18608 5.49856 7.2905C5.72046 7.39492 5.92277 7.5385 6.10551 7.72124L7.20192 8.93512C7.30634 9.03954 7.4075 9.13744 7.50539 9.2288C7.60329 9.32017 7.71097 9.40501 7.82844 9.48333H13.193V3.10064C13.193 2.9179 13.1278 2.76127 12.9972 2.63075C12.8667 2.50022 12.7101 2.43496 12.5274 2.43496C12.449 2.43496 12.374 2.45127 12.3022 2.4839C12.2304 2.51654 12.1619 2.56548 12.0966 2.63075L11.1177 3.60969C11.1829 3.83158 11.196 4.05021 11.1568 4.26558C11.1177 4.48094 11.0394 4.67999 10.9219 4.86273L8.76822 2.6699C8.95096 2.55243 9.14675 2.47738 9.35559 2.44475C9.56443 2.41212 9.77327 2.43496 9.98211 2.51327L10.9611 1.53433C11.1699 1.32549 11.4081 1.16233 11.6757 1.04486C11.9433 0.927389 12.2271 0.868652 12.5274 0.868652C13.1539 0.868652 13.6825 1.08402 14.1132 1.51475C14.544 1.94549 14.7593 2.47411 14.7593 3.10064V9.48333H16.3256V14.1822C16.3256 14.613 16.1723 14.9817 15.8655 15.2884C15.5588 15.5952 15.1901 15.7485 14.7593 15.7485C14.7593 15.9704 14.6843 16.1564 14.5342 16.3065C14.3841 16.4566 14.1981 16.5317 13.9762 16.5317H3.01205Z" fill="#202124" />
                        </svg>
                      </div>
                      <div>
                        <span className='font-thin text-sm'>
                          Bathrooms
                        </span>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                      <div className='flex items-center justify-center gap-1'>

                        <span>1550</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                          <path d="M2.72352 16.5478C2.15535 16.5478 1.67547 16.352 1.2839 15.9604C0.892321 15.5688 0.696533 15.089 0.696533 14.5208V1.89823C0.696533 1.45291 0.903838 1.14195 1.31845 0.965358C1.73306 0.788765 2.09392 0.854028 2.40104 1.16115L4.47409 3.2342L3.23026 4.47803L3.87521 5.12298L5.11904 3.87915L7.51457 6.27467L6.27074 7.5185L6.91568 8.16345L8.15951 6.91962L10.555 9.31515L9.31121 10.559L9.95616 11.2039L11.2 9.96009L13.5955 12.3556L12.3517 13.5994L12.9966 14.2444L14.2405 13.0006L16.0832 14.8433C16.3903 15.1504 16.4556 15.5113 16.279 15.9259C16.1024 16.3405 15.7914 16.5478 15.3461 16.5478H2.72352ZM3.4606 13.7837H11.1079L3.4606 6.13647V13.7837Z" fill="#202124" />
                        </svg>
                      </div>
                      <div>
                        <span className='font-thin text-sm'>
                          Square FT
                        </span>
                      </div>
                    </div>

                  </div>
                  <div className='propertyDetailsBtn'>
                    <button type='button ' className='flex gap-2 items-center' >
                      <span className='font-semibold'>View All</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M1.4 13L0 11.6L9.6 2H1V0H13V12H11V3.4L1.4 13Z" fill="white" />
                      </svg>

                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='property  flex-1 p-2 bg-red-500 h-[520px] mx-5'>
              <div className="listImage rounded-xl p-2 h-[251.53px]">

                <div className="distance">
                  2km away
                </div>
                <div className="type">
                  For rent
                </div>
                <div className="image">
                  <img src={p1} alt="" className='w-full' />
                </div>
              </div>

              <div className='propertyAddress mt-5 '>
                <p className='flex items-center gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                    <path d="M7.7976 10.1037C8.30435 10.1037 8.73815 9.92326 9.09902 9.5624C9.45988 9.20153 9.64032 8.76773 9.64032 8.26098C9.64032 7.75424 9.45988 7.32043 9.09902 6.95957C8.73815 6.5987 8.30435 6.41827 7.7976 6.41827C7.29086 6.41827 6.85705 6.5987 6.49619 6.95957C6.13532 7.32043 5.95489 7.75424 5.95489 8.26098C5.95489 8.76773 6.13532 9.20153 6.49619 9.5624C6.85705 9.92326 7.29086 10.1037 7.7976 10.1037ZM7.7976 19.3173C5.3253 17.2135 3.47875 15.2594 2.25795 13.4551C1.03716 11.6508 0.426758 9.98085 0.426758 8.44525C0.426758 6.14186 1.16768 4.30683 2.64953 2.94015C4.13138 1.57348 5.8474 0.890137 7.7976 0.890137C9.74781 0.890137 11.4638 1.57348 12.9457 2.94015C14.4275 4.30683 15.1684 6.14186 15.1684 8.44525C15.1684 9.98085 14.5581 11.6508 13.3373 13.4551C12.1165 15.2594 10.2699 17.2135 7.7976 19.3173Z" fill="#CA0101" />
                  </svg>
                  <span>Columbia Canada</span>
                </p>
              </div>

              <div className="propertyDetails flex flex-col gap-2 mt-3">
                <p className='Price font-semibold'>$2000</p>
                <p className='font-semibold'>NORTH VANCOUVER</p>
                <p className='font-thin'>Beautiful 1 family house in heart of North vancouver
                  newly renovated with Furniture </p>
              </div>

              <div className="propertyFeatures">
                <div className='flex justify-between items-center'>
                  <div className='flex gap-2'>
                    <div className='flex flex-col justify-center'>
                      <div className='flex items-center justify-center gap-1'>

                        <span>2</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                          <path d="M2.6626 18.3743V12.8462C2.6626 12.4316 2.74706 12.0554 2.91597 11.7175C3.08489 11.3797 3.30755 11.0803 3.58395 10.8192V8.23941C3.58395 7.47161 3.85268 6.81899 4.39014 6.28153C4.9276 5.74407 5.58022 5.47534 6.34802 5.47534H10.0334C10.3866 5.47534 10.7168 5.5406 11.0239 5.67113C11.331 5.80166 11.6151 5.98209 11.8762 6.21243C12.1372 5.98209 12.4213 5.80166 12.7284 5.67113C13.0355 5.5406 13.3657 5.47534 13.7189 5.47534H17.4043C18.1721 5.47534 18.8247 5.74407 19.3622 6.28153C19.8996 6.81899 20.1684 7.47161 20.1684 8.23941V10.8192C20.4448 11.0803 20.6674 11.3797 20.8363 11.7175C21.0053 12.0554 21.0897 12.4316 21.0897 12.8462V18.3743H19.247V16.5316H4.50531V18.3743H2.6626ZM12.7975 10.0821H18.3256V8.23941C18.3256 7.97836 18.2373 7.75954 18.0608 7.58294C17.8842 7.40635 17.6653 7.31805 17.4043 7.31805H13.7189C13.4578 7.31805 13.239 7.40635 13.0624 7.58294C12.8858 7.75954 12.7975 7.97836 12.7975 8.23941V10.0821ZM5.42666 10.0821H10.9548V8.23941C10.9548 7.97836 10.8665 7.75954 10.6899 7.58294C10.5133 7.40635 10.2945 7.31805 10.0334 7.31805H6.34802C6.08697 7.31805 5.86815 7.40635 5.69155 7.58294C5.51496 7.75954 5.42666 7.97836 5.42666 8.23941V10.0821Z" fill="#202124" />
                        </svg>
                      </div>
                      <div>
                        <span className='font-thin text-sm'>
                          Bedrooms
                        </span>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                      <div className='flex items-center justify-center gap-1'>

                        <span>2</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                          <path d="M4.57836 6.35072C4.14763 6.35072 3.77889 6.19735 3.47216 5.89062C3.16542 5.58388 3.01205 5.21515 3.01205 4.78441C3.01205 4.35368 3.16542 3.98495 3.47216 3.67821C3.77889 3.37148 4.14763 3.21811 4.57836 3.21811C5.00909 3.21811 5.37783 3.37148 5.68456 3.67821C5.9913 3.98495 6.14466 4.35368 6.14466 4.78441C6.14466 5.21515 5.9913 5.58388 5.68456 5.89062C5.37783 6.19735 5.00909 6.35072 4.57836 6.35072ZM3.01205 16.5317C2.79016 16.5317 2.60416 16.4566 2.45406 16.3065C2.30395 16.1564 2.2289 15.9704 2.2289 15.7485C1.79817 15.7485 1.42943 15.5952 1.1227 15.2884C0.815965 14.9817 0.662598 14.613 0.662598 14.1822V9.48333H3.01205V8.89596C3.01205 8.39997 3.18174 7.98229 3.5211 7.64292C3.86047 7.30355 4.27815 7.13387 4.77415 7.13387C5.0352 7.13387 5.27667 7.18608 5.49856 7.2905C5.72046 7.39492 5.92277 7.5385 6.10551 7.72124L7.20192 8.93512C7.30634 9.03954 7.4075 9.13744 7.50539 9.2288C7.60329 9.32017 7.71097 9.40501 7.82844 9.48333H13.193V3.10064C13.193 2.9179 13.1278 2.76127 12.9972 2.63075C12.8667 2.50022 12.7101 2.43496 12.5274 2.43496C12.449 2.43496 12.374 2.45127 12.3022 2.4839C12.2304 2.51654 12.1619 2.56548 12.0966 2.63075L11.1177 3.60969C11.1829 3.83158 11.196 4.05021 11.1568 4.26558C11.1177 4.48094 11.0394 4.67999 10.9219 4.86273L8.76822 2.6699C8.95096 2.55243 9.14675 2.47738 9.35559 2.44475C9.56443 2.41212 9.77327 2.43496 9.98211 2.51327L10.9611 1.53433C11.1699 1.32549 11.4081 1.16233 11.6757 1.04486C11.9433 0.927389 12.2271 0.868652 12.5274 0.868652C13.1539 0.868652 13.6825 1.08402 14.1132 1.51475C14.544 1.94549 14.7593 2.47411 14.7593 3.10064V9.48333H16.3256V14.1822C16.3256 14.613 16.1723 14.9817 15.8655 15.2884C15.5588 15.5952 15.1901 15.7485 14.7593 15.7485C14.7593 15.9704 14.6843 16.1564 14.5342 16.3065C14.3841 16.4566 14.1981 16.5317 13.9762 16.5317H3.01205Z" fill="#202124" />
                        </svg>
                      </div>
                      <div>
                        <span className='font-thin text-sm'>
                          Bathrooms
                        </span>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                      <div className='flex items-center justify-center gap-1'>

                        <span>1550</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                          <path d="M2.72352 16.5478C2.15535 16.5478 1.67547 16.352 1.2839 15.9604C0.892321 15.5688 0.696533 15.089 0.696533 14.5208V1.89823C0.696533 1.45291 0.903838 1.14195 1.31845 0.965358C1.73306 0.788765 2.09392 0.854028 2.40104 1.16115L4.47409 3.2342L3.23026 4.47803L3.87521 5.12298L5.11904 3.87915L7.51457 6.27467L6.27074 7.5185L6.91568 8.16345L8.15951 6.91962L10.555 9.31515L9.31121 10.559L9.95616 11.2039L11.2 9.96009L13.5955 12.3556L12.3517 13.5994L12.9966 14.2444L14.2405 13.0006L16.0832 14.8433C16.3903 15.1504 16.4556 15.5113 16.279 15.9259C16.1024 16.3405 15.7914 16.5478 15.3461 16.5478H2.72352ZM3.4606 13.7837H11.1079L3.4606 6.13647V13.7837Z" fill="#202124" />
                        </svg>
                      </div>
                      <div>
                        <span className='font-thin text-sm'>
                          Square FT
                        </span>
                      </div>
                    </div>

                  </div>
                  <div className='propertyDetailsBtn'>
                    <button type='button ' className='flex gap-2 items-center' >
                      <span className='font-semibold'>View All</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M1.4 13L0 11.6L9.6 2H1V0H13V12H11V3.4L1.4 13Z" fill="white" />
                      </svg>

                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='property  flex-1 p-2 bg-red-500 h-[520px] mx-5'>
              <div className="listImage rounded-xl p-2 h-[251.53px]">

                <div className="distance">
                  2km away
                </div>
                <div className="type">
                  For rent
                </div>
                <div className="image">
                  <img src={p1} alt="" className='w-full' />
                </div>
              </div>

              <div className='propertyAddress mt-5 '>
                <p className='flex items-center gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                    <path d="M7.7976 10.1037C8.30435 10.1037 8.73815 9.92326 9.09902 9.5624C9.45988 9.20153 9.64032 8.76773 9.64032 8.26098C9.64032 7.75424 9.45988 7.32043 9.09902 6.95957C8.73815 6.5987 8.30435 6.41827 7.7976 6.41827C7.29086 6.41827 6.85705 6.5987 6.49619 6.95957C6.13532 7.32043 5.95489 7.75424 5.95489 8.26098C5.95489 8.76773 6.13532 9.20153 6.49619 9.5624C6.85705 9.92326 7.29086 10.1037 7.7976 10.1037ZM7.7976 19.3173C5.3253 17.2135 3.47875 15.2594 2.25795 13.4551C1.03716 11.6508 0.426758 9.98085 0.426758 8.44525C0.426758 6.14186 1.16768 4.30683 2.64953 2.94015C4.13138 1.57348 5.8474 0.890137 7.7976 0.890137C9.74781 0.890137 11.4638 1.57348 12.9457 2.94015C14.4275 4.30683 15.1684 6.14186 15.1684 8.44525C15.1684 9.98085 14.5581 11.6508 13.3373 13.4551C12.1165 15.2594 10.2699 17.2135 7.7976 19.3173Z" fill="#CA0101" />
                  </svg>
                  <span>Columbia Canada</span>
                </p>
              </div>

              <div className="propertyDetails flex flex-col gap-2 mt-3">
                <p className='Price font-semibold'>$2000</p>
                <p className='font-semibold'>NORTH VANCOUVER</p>
                <p className='font-thin'>Beautiful 1 family house in heart of North vancouver
                  newly renovated with Furniture </p>
              </div>

              <div className="propertyFeatures">
                <div className='flex justify-between items-center'>
                  <div className='flex gap-2'>
                    <div className='flex flex-col justify-center'>
                      <div className='flex items-center justify-center gap-1'>

                        <span>2</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                          <path d="M2.6626 18.3743V12.8462C2.6626 12.4316 2.74706 12.0554 2.91597 11.7175C3.08489 11.3797 3.30755 11.0803 3.58395 10.8192V8.23941C3.58395 7.47161 3.85268 6.81899 4.39014 6.28153C4.9276 5.74407 5.58022 5.47534 6.34802 5.47534H10.0334C10.3866 5.47534 10.7168 5.5406 11.0239 5.67113C11.331 5.80166 11.6151 5.98209 11.8762 6.21243C12.1372 5.98209 12.4213 5.80166 12.7284 5.67113C13.0355 5.5406 13.3657 5.47534 13.7189 5.47534H17.4043C18.1721 5.47534 18.8247 5.74407 19.3622 6.28153C19.8996 6.81899 20.1684 7.47161 20.1684 8.23941V10.8192C20.4448 11.0803 20.6674 11.3797 20.8363 11.7175C21.0053 12.0554 21.0897 12.4316 21.0897 12.8462V18.3743H19.247V16.5316H4.50531V18.3743H2.6626ZM12.7975 10.0821H18.3256V8.23941C18.3256 7.97836 18.2373 7.75954 18.0608 7.58294C17.8842 7.40635 17.6653 7.31805 17.4043 7.31805H13.7189C13.4578 7.31805 13.239 7.40635 13.0624 7.58294C12.8858 7.75954 12.7975 7.97836 12.7975 8.23941V10.0821ZM5.42666 10.0821H10.9548V8.23941C10.9548 7.97836 10.8665 7.75954 10.6899 7.58294C10.5133 7.40635 10.2945 7.31805 10.0334 7.31805H6.34802C6.08697 7.31805 5.86815 7.40635 5.69155 7.58294C5.51496 7.75954 5.42666 7.97836 5.42666 8.23941V10.0821Z" fill="#202124" />
                        </svg>
                      </div>
                      <div>
                        <span className='font-thin text-sm'>
                          Bedrooms
                        </span>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                      <div className='flex items-center justify-center gap-1'>

                        <span>2</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                          <path d="M4.57836 6.35072C4.14763 6.35072 3.77889 6.19735 3.47216 5.89062C3.16542 5.58388 3.01205 5.21515 3.01205 4.78441C3.01205 4.35368 3.16542 3.98495 3.47216 3.67821C3.77889 3.37148 4.14763 3.21811 4.57836 3.21811C5.00909 3.21811 5.37783 3.37148 5.68456 3.67821C5.9913 3.98495 6.14466 4.35368 6.14466 4.78441C6.14466 5.21515 5.9913 5.58388 5.68456 5.89062C5.37783 6.19735 5.00909 6.35072 4.57836 6.35072ZM3.01205 16.5317C2.79016 16.5317 2.60416 16.4566 2.45406 16.3065C2.30395 16.1564 2.2289 15.9704 2.2289 15.7485C1.79817 15.7485 1.42943 15.5952 1.1227 15.2884C0.815965 14.9817 0.662598 14.613 0.662598 14.1822V9.48333H3.01205V8.89596C3.01205 8.39997 3.18174 7.98229 3.5211 7.64292C3.86047 7.30355 4.27815 7.13387 4.77415 7.13387C5.0352 7.13387 5.27667 7.18608 5.49856 7.2905C5.72046 7.39492 5.92277 7.5385 6.10551 7.72124L7.20192 8.93512C7.30634 9.03954 7.4075 9.13744 7.50539 9.2288C7.60329 9.32017 7.71097 9.40501 7.82844 9.48333H13.193V3.10064C13.193 2.9179 13.1278 2.76127 12.9972 2.63075C12.8667 2.50022 12.7101 2.43496 12.5274 2.43496C12.449 2.43496 12.374 2.45127 12.3022 2.4839C12.2304 2.51654 12.1619 2.56548 12.0966 2.63075L11.1177 3.60969C11.1829 3.83158 11.196 4.05021 11.1568 4.26558C11.1177 4.48094 11.0394 4.67999 10.9219 4.86273L8.76822 2.6699C8.95096 2.55243 9.14675 2.47738 9.35559 2.44475C9.56443 2.41212 9.77327 2.43496 9.98211 2.51327L10.9611 1.53433C11.1699 1.32549 11.4081 1.16233 11.6757 1.04486C11.9433 0.927389 12.2271 0.868652 12.5274 0.868652C13.1539 0.868652 13.6825 1.08402 14.1132 1.51475C14.544 1.94549 14.7593 2.47411 14.7593 3.10064V9.48333H16.3256V14.1822C16.3256 14.613 16.1723 14.9817 15.8655 15.2884C15.5588 15.5952 15.1901 15.7485 14.7593 15.7485C14.7593 15.9704 14.6843 16.1564 14.5342 16.3065C14.3841 16.4566 14.1981 16.5317 13.9762 16.5317H3.01205Z" fill="#202124" />
                        </svg>
                      </div>
                      <div>
                        <span className='font-thin text-sm'>
                          Bathrooms
                        </span>
                      </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                      <div className='flex items-center justify-center gap-1'>

                        <span>1550</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                          <path d="M2.72352 16.5478C2.15535 16.5478 1.67547 16.352 1.2839 15.9604C0.892321 15.5688 0.696533 15.089 0.696533 14.5208V1.89823C0.696533 1.45291 0.903838 1.14195 1.31845 0.965358C1.73306 0.788765 2.09392 0.854028 2.40104 1.16115L4.47409 3.2342L3.23026 4.47803L3.87521 5.12298L5.11904 3.87915L7.51457 6.27467L6.27074 7.5185L6.91568 8.16345L8.15951 6.91962L10.555 9.31515L9.31121 10.559L9.95616 11.2039L11.2 9.96009L13.5955 12.3556L12.3517 13.5994L12.9966 14.2444L14.2405 13.0006L16.0832 14.8433C16.3903 15.1504 16.4556 15.5113 16.279 15.9259C16.1024 16.3405 15.7914 16.5478 15.3461 16.5478H2.72352ZM3.4606 13.7837H11.1079L3.4606 6.13647V13.7837Z" fill="#202124" />
                        </svg>
                      </div>
                      <div>
                        <span className='font-thin text-sm'>
                          Square FT
                        </span>
                      </div>
                    </div>

                  </div>
                  <div className='propertyDetailsBtn'>
                    <button type='button ' className='flex gap-2 items-center' >
                      <span className='font-semibold'>View All</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                        <path d="M1.4 13L0 11.6L9.6 2H1V0H13V12H11V3.4L1.4 13Z" fill="white" />
                      </svg>

                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Guide */}
      <section className='guideSection'>
        <div className='guideContents w-xl'>
          <h2 className=' text-4xl font-bold'>The Guide</h2>
          <p className='text-center mt-4'>With BC Reside revolutionary new series Real Tours, you can see Canadian real estate like never before. Accompany us on a journey through the most desirable neighborhoods on the Lower Mainland, led by the top realtors in British Columbia.</p>
          <button className='guideBtn mt-4'>Explore the guide</button>

        </div>
      </section>

      {/* Nesletter */}
      <section className="newsletter">
        <div className="svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="217" height="217" viewBox="0 0 217 217" fill="none">
            <g clip-path="url(#clip0_146_1363)">
              <path d="M208.715 0.348319C208.612 0.380954 208.504 0.336028 208.402 0.373749L4.964 76.6629C2.73508 77.5013 1.15844 79.5187 0.885069 81.8904C0.6117 84.2622 1.68611 86.5839 3.67259 87.9062L48.2734 117.636L64.5899 185.813C64.6327 185.992 64.7429 186.135 64.8001 186.307C66.2666 190.78 71.8988 192.2 75.2683 188.83L107.185 156.914L156.251 189.625C159.806 192.009 164.707 190.229 165.893 186.08L216.752 8.07217C218.118 3.28121 213.62 -1.22663 208.715 0.348319ZM80.055 129.664C79.0022 130.731 78.6852 131.595 78.316 132.939C78.3114 132.964 78.3004 132.988 78.2957 133.012L71.2017 158.807L61.0942 116.571L159.56 49.0543L80.055 129.664Z" fill="#003430" />
              <path d="M42.6394 174.331C40.1562 171.848 36.1328 171.848 33.6496 174.331L1.86241 206.118C-0.620803 208.602 -0.620803 212.625 1.86241 215.108C4.34605 217.592 8.36861 217.592 10.8522 215.108L42.6394 183.321C45.1226 180.838 45.1226 176.815 42.6394 174.331Z" fill="#003430" />
              <path d="M42.6394 136.187C40.1562 133.704 36.1328 133.703 33.6496 136.187L1.86241 167.974C-0.620803 170.457 -0.620803 174.481 1.86241 176.964C4.34605 179.448 8.36861 179.448 10.8522 176.964L42.6394 145.177C45.1226 142.694 45.1226 138.67 42.6394 136.187Z" fill="#003430" />
            </g>
            <defs>
              <clipPath id="clip0_146_1363">
                <rect width="217" height="217" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </section>
    </>
  )
}

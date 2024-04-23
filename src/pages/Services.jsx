import './Services.css'
import { useState } from 'react'

import p1 from "../images/p1.png"
import Footer from '../components/Footer/Footer';
export default function Services() {
  const [service, setService] = useState("buy");
  const serviceButtonClick = (option) => {
    setService(option);
  };


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
      {/* Section For Services Nav */}
      <section className='sm:flex sm:justify-between mt-2 serviceCategories items-center'>
        <div className='text-center'>
          <h3 className='text-[18px] font-semibold'>SERIVCES</h3>
        </div>
        <div className="flex-1 flex-wrap servicesTypeBtns  flex justify-around items-center">
          <div className={`toBuy cursor-pointer ${service === 'buy' ? 'serviceActive' : ''}`} onClick={() => serviceButtonClick('buy')} >
            <button

            >To Buy Or Invest</button>
          </div>
          <div className={`toSell cursor-pointer ${service === 'sell' ? 'serviceActive' : ''}`}
            onClick={() => serviceButtonClick('sell')}>
            <button>To Sell</button>
          </div>
          <div className={`toRent cursor-pointer ${service === 'rent' ? 'serviceActive' : ''}`}
            onClick={() => serviceButtonClick('rent')}>
            <button >Rent Your Home</button>
          </div>
          <div className={`consultation cursor-pointer ${service === 'consultation' ? 'serviceActive' : ''}`}
            onClick={() => serviceButtonClick('consultation')}>
            <button >Consultation</button>
          </div>
        </div>
      </section>

      {service === 'buy' &&
        <>
          <section className="buySectionContents mt-2">
            <div className="buyHeroComponent">
              <div className='heroSectionSearch'>
                <div className='buyToSell '>
                  <button className={`bg-white rounded-tr-2xl rounded-tl-2xl ${selectedOption === 'buy' ? 'active' : hoveredButton === 'buy' ? 'hovered' : ''}`}
                    onClick={() => handleButtonClick('buy')}
                    onMouseEnter={() => handleButtonHover('buy')}
                    onMouseLeave={() => setHoveredButton(null)}>

                    Buy

                  </button>
                  <button className={`bg-white rounded-tr-2xl rounded-tl-2xl ${selectedOption === 'rent' ? 'active' : hoveredButton === 'sell' ? 'hovered' : ''}`}
                    onClick={() => handleButtonClick('rent')}
                    onMouseEnter={() => handleButtonHover('rent')}
                    onMouseLeave={() => setHoveredButton(null)}>
                    Rent

                  </button>
                  <button className={`bg-white rounded-tr-2xl rounded-tl-2xl ${selectedOption === 'sell' ? 'active' : hoveredButton === 'rent' ? 'hovered' : ''}`}
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
          </section>
          <section className='newListing mt-[60px]'>
            <div className="newListingHeadings">
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

              <div className='listingOverview flex flex-wrap justify-between '>
                <div className='property p-2   sm:w-[385.127px] bg-red-500 h-[520px] '>
                  <div className="listImage bg-green-950 rounded-xl p-2 h-[251.53px]">

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
                <div className='property p-2 sm:mt-0 mt-3 sm:w-[385.127px] bg-red-500 h-[520px] '>
                  <div className="listImage bg-green-950 rounded-xl p-2 h-[251.53px]">

                    <div className="distance">
                      2km away
                    </div>
                    <div className="type">
                      For rent
                    </div>
                    <div className="image">
                      <img src={p1} alt="" />

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
                <div className='property p-2 sm:mt-0 mt-3 sm:w-[385.127px] bg-red-500 h-[520px] '>
                  <div className="listImage bg-green-950 rounded-xl p-2 h-[251.53px]">

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
        </>
      }





      {service === 'sell' &&
        <>
          <div className="sellContents text-center" >

            <h1 className='toSellHeading' >Request a Free Consultation</h1>
            <p>Stay In Touch</p>
          </div>

          <div className='officeandContact flex flex-wrap justify-around'>
            <div className="office flex-1 flex flex-col gap-10">
              <div>
                <h2>OUR OFFICE</h2>
              </div>
              <div className='map '>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12925.094684797612!2d74.3546542!3d35.9158008!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e64951c45992c1%3A0x235ceb0933d57f0c!2sBecoders!5e0!3m2!1sen!2s!4v1713888626163!5m2!1sen!2s"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>
              <div>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas aliquid nihil voluptatibus ipsa vel hic nemo laudantium quis sapiente eligendi reprehenderit sunt temporibus minus aut illum, optio facilis est dolores.
              </div>

              <div className="contactInfo">
                <div className="PhoneNumber flex gap-10">

                  <span>Phone: </span>
                  <span>(604) 294-4141</span>
                </div>
                <div className='emailAddress flex gap-12'>
                  <span>Email:</span>
                  <span>example@gmail.com</span>
                </div>
                <div className='flex gap-7'>
                  <span>Address:</span>
                  <span>Suite 101-4126 Norland Ave,  British Columbia,Canada </span>
                </div>
              </div>

              <div className="socialLinks flex justify-around">
                <div className="facebook" >
                  <a href="https://www.fb.com" className="mx-auto " target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M13 10H17.5L17 12H13V21H11V12H7V10H11V8.128C11 6.345 11.186 5.698 11.534 5.046C11.875 4.40181 12.4018 3.87501 13.046 3.534C13.698 3.186 14.345 3 16.128 3C16.65 3 17.108 3.05 17.5 3.15V5H16.128C14.804 5 14.401 5.078 13.99 5.298C13.686 5.46 13.46 5.686 13.298 5.99C13.078 6.401 13 6.804 13 8.128V10Z" fill="#202124" />
                    </svg>
                  </a>
                </div>
                <div className="twitter">

                  <a href="https://www.fb.com" className="mx-auto" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                      <path d="M12.905 8.84651L12.905 8.84646C12.9194 8.06035 13.2418 7.3113 13.8028 6.76049C14.3639 6.20969 15.1188 5.90116 15.905 5.90129L12.905 8.84651ZM12.905 8.84651L12.877 10.4213M12.905 8.84651L12.877 10.4213M4.75811 7.80857L4.89001 7.91846C6.76679 9.48211 8.71781 10.4182 10.7495 10.6952C10.7495 10.6952 10.7495 10.6952 10.7495 10.6952L12.3104 10.9072L4.75811 7.80857ZM4.75811 7.80857L4.72759 7.97751M4.75811 7.80857L4.72759 7.97751M4.72759 7.97751C4.42576 9.64819 4.5683 11.0709 5.1479 12.3018C5.72718 13.532 6.73827 14.5605 8.15577 15.4519L8.15579 15.452M4.72759 7.97751L8.15579 15.452M8.15579 15.452L9.90279 16.55L9.954 16.4685M8.15579 15.452L9.954 16.4685M9.954 16.4685L9.90279 16.55C9.97196 16.5934 10.0294 16.6532 10.0702 16.724C10.1109 16.7948 10.1337 16.8745 10.1365 16.9562C10.1392 17.0378 10.122 17.1189 10.0862 17.1924C10.0504 17.2658 9.99716 17.3294 9.93112 17.3775L9.93101 17.3775M9.954 16.4685L9.93101 17.3775M9.93101 17.3775L8.33901 18.5405L8.11542 18.7039M9.93101 17.3775L8.11542 18.7039M8.11542 18.7039L8.39178 18.7211M8.11542 18.7039L8.39178 18.7211M8.39178 18.7211C9.3449 18.7805 10.2529 18.7385 11.0095 18.5884L11.0096 18.5884M8.39178 18.7211L11.0096 18.5884M11.0096 18.5884C13.3886 18.1134 15.3745 16.9794 16.7652 15.2211M11.0096 18.5884L16.7652 15.2211M12.877 10.4213C12.8757 10.4918 12.8594 10.5612 12.8293 10.625C12.7993 10.6887 12.7561 10.7454 12.7026 10.7912C12.649 10.8371 12.5864 10.8712 12.5188 10.8911C12.4513 10.9111 12.3803 10.9166 12.3105 10.9072L12.877 10.4213ZM16.7652 15.2211C18.1557 13.463 18.945 11.0883 18.945 8.14229M16.7652 15.2211L18.945 8.14229M18.945 8.14229C18.945 7.99668 18.8714 7.78474 18.744 7.55722M18.945 8.14229L18.744 7.55722M18.744 7.55722C18.6142 7.32559 18.4215 7.06508 18.1673 6.82049M18.744 7.55722L18.1673 6.82049M18.1673 6.82049C17.6587 6.33088 16.8999 5.90129 15.905 5.90129L18.1673 6.82049ZM20.4978 5.53842C20.8818 5.48388 21.3285 5.34345 21.916 5.01105C21.6101 6.49526 21.4321 7.16764 20.7642 8.08336L20.745 8.10969V8.14229C20.745 11.9415 19.578 14.7567 17.8258 16.7397C16.0726 18.7238 13.7277 19.8813 11.3624 20.3532C9.74529 20.6759 7.7544 20.5728 5.99643 20.2106C5.11813 20.0296 4.30077 19.7846 3.61983 19.4974C3.03727 19.2517 2.56009 18.9775 2.22956 18.6904C2.66065 18.6482 3.4114 18.5535 4.24366 18.3598C5.24355 18.1272 6.37173 17.7494 7.20306 17.141L7.31918 17.056L7.19904 16.9768C7.15724 16.9492 7.11178 16.9196 7.06301 16.8879C6.30477 16.3938 4.74648 15.3786 3.73155 13.5166C2.66714 11.5637 2.19257 8.66295 3.91362 4.42592C5.57889 6.34347 7.2726 7.66001 8.99504 8.3668L8.99505 8.36681C9.57662 8.60536 9.94255 8.72373 10.2318 8.79141C10.4509 8.84265 10.6261 8.86463 10.8117 8.88794C10.8703 8.89529 10.93 8.90278 10.9924 8.91135L11.2872 8.95189L11.1059 8.77077C11.131 7.8414 11.4254 6.93895 11.9539 6.17331C12.4904 5.39606 13.2442 4.79434 14.1211 4.4435C14.9979 4.09265 15.9588 4.00828 16.8833 4.20093C17.8079 4.39359 18.6551 4.85471 19.3189 5.52657L19.3485 5.55658L19.3907 5.55628C19.4934 5.55556 19.5972 5.55908 19.7036 5.56269C19.9483 5.57098 20.2068 5.57974 20.4978 5.53842Z" fill="#202124" stroke="#202124" strokeWidth="0.2" />
                    </svg>
                  </a>

                </div>
                <div className="instagram">

                  <a href="https://www.fb.com" className="mx-auto" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M15 1H5C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5V15C1 16.0609 1.42143 17.0783 2.17157 17.8284C2.92172 18.5786 3.93913 19 5 19H15C16.0609 19 17.0783 18.5786 17.8284 17.8284C18.5786 17.0783 19 16.0609 19 15V5C19 3.93913 18.5786 2.92172 17.8284 2.17157C17.0783 1.42143 16.0609 1 15 1Z" stroke="#202124" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M10 14C11.0609 14 12.0783 13.5786 12.8284 12.8284C13.5786 12.0783 14 11.0609 14 10C14 8.93913 13.5786 7.92172 12.8284 7.17157C12.0783 6.42143 11.0609 6 10 6C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10C6 11.0609 6.42143 12.0783 7.17157 12.8284C7.92172 13.5786 8.93913 14 10 14V14Z" stroke="#202124" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M15.5 5.5C15.7652 5.5 16.0196 5.39464 16.2071 5.20711C16.3946 5.01957 16.5 4.76522 16.5 4.5C16.5 4.23478 16.3946 3.98043 16.2071 3.79289C16.0196 3.60536 15.7652 3.5 15.5 3.5C15.2348 3.5 14.9804 3.60536 14.7929 3.79289C14.6054 3.98043 14.5 4.23478 14.5 4.5C14.5 4.76522 14.6054 5.01957 14.7929 5.20711C14.9804 5.39464 15.2348 5.5 15.5 5.5Z" fill="#202124" />
                    </svg>
                  </a>

                </div>
                <div className="linkedin">

                  <a href="https://www.fb.com" className="mx-auto" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M11.5 9.05C12.417 8.113 13.611 7.5 15 7.5C16.4587 7.5 17.8576 8.07946 18.8891 9.11091C19.9205 10.1424 20.5 11.5413 20.5 13V20.5H18.5V13C18.5 12.0717 18.1313 11.1815 17.4749 10.5251C16.8185 9.86875 15.9283 9.5 15 9.5C14.0717 9.5 13.1815 9.86875 12.5251 10.5251C11.8687 11.1815 11.5 12.0717 11.5 13V20.5H9.5V8H11.5V9.05ZM4.5 6C4.10218 6 3.72064 5.84196 3.43934 5.56066C3.15804 5.27936 3 4.89782 3 4.5C3 4.10218 3.15804 3.72064 3.43934 3.43934C3.72064 3.15804 4.10218 3 4.5 3C4.89782 3 5.27936 3.15804 5.56066 3.43934C5.84196 3.72064 6 4.10218 6 4.5C6 4.89782 5.84196 5.27936 5.56066 5.56066C5.27936 5.84196 4.89782 6 4.5 6ZM3.5 8H5.5V20.5H3.5V8Z" fill="#202124" />
                    </svg>
                  </a>

                </div>
              </div>

            </div>
            <div className='contactForm flex-1 flex flex-col sm:ml-5'>
              <h2>GET IN TOUCH</h2>
              <div className="formInputs justify-center  h-full flex flex-col gap-6">
                <div>

                  <input type="text" id='name' placeholder='Name' className='border-[2px]  w-full sm:w-[50%] p-2' />

                </div>
                <div>
                  <input type="number" id='mobile' placeholder='Mobile Number' className='border-[2px] w-full sm:w-[50%] p-2' />

                </div>
                <div>

                  <input type="email" id='email' placeholder='Email Address' className='border-[2px] w-full sm:w-[50%] p-2' />

                </div>

                <div>
                  <textarea name="message" placeholder='Message' id="message"  rows="10" className='border-[2px] w-full p-2'></textarea>

                </div>

                <div className='text-center '>
                  <button className='bg-[#003430] text-white p-5 rounded-full w-[25%]'>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>


        </>
      }
      {service === 'rent' &&
        <>
          <h1>rent</h1>

        </>
      }
      {service === 'consultation' &&
        <>
          <h1>Cons</h1>

        </>
      }


      {/* Nesletter */}
      <section className="newsletter mt-[60px]">
        <div className="svg justify-center mr-9 ">
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="217" viewBox="0 0 217 217" fill="none">
            <g clipPath="url(#clip0_146_1363)">
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

        <div className='newsletterContents  gap-5'>
          <h2 className=' text-4xl font-bold '>Subscribe to newsletter</h2>
          <p>Get the latest news and interesting offers and real estate</p>
          <div className=' newsLetterSubscribe '>
            <input className='border  border-gray-600 rounded emailInput' type="email" id="email" placeholder='Your E-Mail Address' ></input>
            <button className='newsletterBtn ml-3'>
              Subscribe
            </button>
          </div>
        </div>

      </section>


      {/* Footer */}
      <Footer />
    </>
  )
}

import React from 'react'
import "./Home.css"
export default function Home() {
  return (
    <div className='heroSectionContainer'>
      <div className='heroSectionContent'>

        <div className="heroSectionHeading">
          <h1>Where Dreams Find Their Address.</h1>
        </div>
        <div className='heroSectionSearch'>
          <div className='buyToSell'>
            <button className='buyToSellBtn'>
              Buy
            </button>
            <button className='buyToSellBtn'>
              Rent
            </button>
            <button className='buyToSellBtn'>
              Sell
            </button>

          </div>
          <div className='buyToSellInputs'>
            <input type="text"
              placeholder='City/Street'
              className='cityStreet'
            />

          </div>





        </div>
      </div>
    </div>
  )
}

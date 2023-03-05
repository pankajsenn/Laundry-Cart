import React from 'react'
import './ConfirmOrder.css';
const ConfirmOrder = (props) => {
  return (
    <>
      <div className='model'>
      </div>
      <div className='confirm-container'>
      <div className='confirm-msg'>
          <div id='img-div'>
            <img src="./tick.svg" alt="confirm" />
          </div>
          <div>
            <span id='success-span'>Order Created Successfully.</span>
            <span>You can track the delivery</span>
            <span>in "Orders" section</span>
            <button>Go to orders</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default ConfirmOrder;
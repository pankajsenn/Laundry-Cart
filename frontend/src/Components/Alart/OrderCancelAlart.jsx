import React from 'react'
import alart from '../../Assets/alart.jpg';
import '../../Components/Alart/orderCancelAlart.css';
const OrderCancelAlart = (props) => {
  const cancelProceed = () => {
    fetch('https://laundry-cart-24v2.onrender.com/order/edit', {
      method: 'PATCH',
      body: JSON.stringify({
        id: props.cancelDetails.id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((res)=>res.json())
    .then((data)=>{
      if(data.status==='success'){
        props.cancel({ ...props.cancelDetails, Value: false, id: null })
      }
    })
  }
  return (
    <>
      <div className='model'>
      </div>
      <div className='cancelAlart'>
        <header>
          <nav>
            <ul>
              <li>Alart</li>
              <li onClick={() => props.cancel({ ...props.cancelDetails, Value: false, id: null })}>&times;</li>
            </ul>
          </nav>
        </header>
        <div className='alart-msg'>
          <div>
            <img src={alart} alt="alart" />
          </div>
          <div>
            <span>Are you sure want to cancel the order</span>
            <span style={{ color: '#5861AE' }}>No:{props.cancelDetails.id}</span>
            <button onClick={cancelProceed}>Proceed</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderCancelAlart
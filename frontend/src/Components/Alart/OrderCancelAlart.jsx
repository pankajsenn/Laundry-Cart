import React from 'react'
import alart from '../../Assets/alart.jpg';
import '../../Components/Alart/orderCancelAlart.css';
const OrderCancelAlart = (props) => {
  console.log(props.cancelDetails.id, props.cancelDetails.Value)
  return (
    <>
      <div className='model'>
      </div>
      <div className='cancelAlart'>
      <header>
        <nav>
          <ul>
            <li>Alart</li>
            <li onClick={()=>props.cancel({...props.cancelDetails,Value:false,id:null})}>&times;</li>
          </ul>
        </nav>
      </header>
      <div className='alart-msg'>
          <div>
            <img src={alart} alt="alart" />
          </div>
          <div>
            <span>Are you sure want to cancel the order</span>
            <span style={{color:'#5861AE'}}>No:{props.cancelDetails.id}</span>
            <button>Proceed</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default OrderCancelAlart
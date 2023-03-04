import React, { useEffect, useState } from 'react'
import '../OrderHistory/orderHistory.css'
import logo from '../../Assets/eye.png'
import OrderHistorySummary from '../Summary/OrderHistorySummary';
import OrderCancelAlart from '../Alart/OrderCancelAlart';
const OrderHistory = () => {
  const [userOrderData, setUserOrderData] = useState(null);
  const [orderDataById, setOrderDataById] = useState(null);
  const [summary, setSummary] = useState(false);
  const[cancelAlart,setCancelAlart]=useState({
    "Value":false,
    "id":null
  });
  const getOrderHistory = () => {
    fetch("https://laundry-cart-24v2.onrender.com/order/get/previous/pankaj@gmail.com")
      .then(res => res.json())
      .then(data => setUserOrderData(data))
      .catch(e => console.log(e.message))
  }
  const orderHistoryById = async (id) => {
    try {
      const res = await fetch(`https://laundry-cart-24v2.onrender.com/order/get/past/${id}`);
      const data = await res.json();
      setOrderDataById(data);
      setSummary(true);
    }
    catch (e) {
      console.log(e.message);
    }
  }
  useEffect(() => {
    getOrderHistory()
  }, [cancelAlart.Value]);
  return (
    <div>
    {summary && <OrderHistorySummary data={orderDataById} summaryValue={setSummary} cancel={setCancelAlart} cancelValue={cancelAlart}/>}
    {cancelAlart.Value && <OrderCancelAlart cancel={setCancelAlart} cancelDetails={cancelAlart} />}
      <h3 id='order-h3'>Orders|{userOrderData?.Ordered?.length}</h3>
      <table className='content-table'>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Order Date & Time</th>
            <th>Store Location</th>
            <th>City</th>
            <th>Store Phone</th>
            <th>Total Items</th>
            <th>Price</th>
            <th>Status</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {userOrderData?.Ordered?.map((data, idx) => {
            return (
              <tr key={data._id}>
                <td>{data._id}</td>
                <td>{data.createdAt.split("T")[0]}</td>
                <td>JpNagar</td>
                <td>Bangalore</td>
                <td>+919988667755</td>
                <td>{data.products.length}</td>
                <td>{data.total_price}</td>
                <td>
                  {data.status==="Cancelled"?<span id='status-span'>{data.status}</span>:<span>{data.status}</span>}
                  {data.status==="Ready to pick up"?<span id='cancel-span' onClick={()=>setCancelAlart({...cancelAlart,Value:true,id:data._id})}>&nbsp;&nbsp;&nbsp;&nbsp;Cancel Order</span>:null}
                </td>
                <td><img id="eye-logo" src={logo} alt="View" onClick={() => orderHistoryById(data._id)} /></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default OrderHistory
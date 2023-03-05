import React, { useEffect } from 'react'
import './OrderSummary.css'
const OrderSummary = (props) => {
    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
          document.body.style.overflowY = 'auto';
        }
      }, [])
    const ConfirmFunction=()=>{
        fetch("https://laundry-cart-24v2.onrender.com/orders/add",{
            method:"POST",
            body:JSON.stringify({
            products: props.product,
            address:{
                city:"indore",
                state:"mp",
                dist:"dhar",
               pincode:454552
            },
            email:"pankaj@gmail.com",
            total_price:props.total
            }),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then((res)=>res.json())
        .then((data)=>{if(data.status==="success"){
            props.summaryPage(false);
            props.setconfirmorder(true);
        }})
        .catch(e=>console.log(e))
    }
    let totalprice=90;
    return (
        <>
            <div className='model'></div>
            <div className='summary-div'>
            <nav className='first-nav'>
                <ul>
                    <li>Summary</li>
                    <li id='close-logo' onClick={() => props.summaryPage(false)}>&times;</li>
                </ul>
            </nav>
            <nav className='second-nav'>
                <ul>
                    <li>Store Location</li>
                    <li>Jp Nagar</li>
                </ul>
                <ul>
                    <li>Store Address:</li>
                    <li>Near Phone booth , 10th road</li>
                </ul>
                <ul>
                    <li>Phone</li>
                    <li>919988776622</li>
                </ul>
            </nav>
            <table className='summary-table'>
                <h4>Order Details</h4>
                <tbody>
                    {
                        props.product.map((data, idx) => {
                           totalprice+=data.price*data.quantity;
                            return (
                                        <tr key={idx}>
                                            <td>{data.name}</td>
                                            <td>{data.washtype.join(",")}</td>
                                            <td>{`${data.quantity}X${data.price}  =`}</td>
                                            <td id='price'>{data.price*data.quantity}</td>
                                        </tr>
                                    )
                        })
                    }
                    <tr>    
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>
                        <span className='charges-desc'>Subtotal : </span> 
                        </td>
                              <td>
                              <span className='charges'> { props.total}</span>
                              </td>     
                    </tr>
                    <tr >
                        <td></td>
                        <td></td>
                        <td><span className='charges-desc'>Pickup Charge : </span> </td>
                        <td><span className='charges'>90</span></td> 
                    </tr>
                    <tr id='totalprice'>
                        <td></td>
                        <td></td>
                        <td>Total :</td>
                        <td>{
                         `Rs ${totalprice}`
                        }</td>
                    </tr>
                </tbody>
            </table>
            <h3>Address</h3>
            <div id='address-container'>
              <div id="address-container-1">
              <p>Home <img src='./tick.svg'/></p>
              <p>#223, 10th road, Jp Nagar, Bangalore</p>
              </div>
              <div id="address-container-2">
              <p>Other</p>
              <p>#223, 10th road, Jp Nagar, Bangalore</p>
              </div>
              <div id="address-container-3">
                Add New
              </div>
            </div>
            <div id='btn-div'>
            <button onClick={ConfirmFunction} id="confirm-btn">Confirm</button>
            </div>
        </div>
        </>
    )
   
}

export default OrderSummary;
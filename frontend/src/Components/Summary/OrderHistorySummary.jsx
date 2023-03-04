import React, { useEffect } from 'react'
import '../../Components/Summary/orderSummary.css'
const OrderHistorySummary = (props) => {
    useEffect(()=>{
        document.body.style.overflowY='hidden';
        return ()=>{
            document.body.style.overflowY='auto';
        }
    },[])
    const cancelFunction = () => {
        props.summaryValue(false)
        props.cancel({ ...props.cancelValue, Value: true, id: props.data.Ordered[0]._id })
    }
    return (
        <>
            <div className='model'></div>
            <div className='summary-div'>
                <nav className='first-nav'>
                    <ul>
                        <li>Summary</li>
                        <li id='close-logo' onClick={() => props.summaryValue(false)}>&times;</li>
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
                <div className='process-div'>
                    <span id="dot"></span>
                    <span id='process-name'>Picked up</span>
                    <span id='line'></span>
                    <span id="dot"></span>
                    <span id='process-name'>Washed</span>
                    <span id='line'></span>
                    <span id="dot"></span>
                    <span id='process-name'>Ironed</span>
                    <span id='line'></span>
                    <span id="dot"></span>
                    <span id='process-name'>Delivered</span>
                </div>
                <table className='summary-table'>
                    <h4>Order Deatils</h4>
                    <tbody>
                        {
                            props.data.Ordered.map((history, idx) => {
                                return (
                                    history.products.map((value) => {
                                        return (
                                            <tr>
                                                <td>{value.name}</td>
                                                <td>{value.washtype.join(",")}</td>
                                                <td>{`${value.quantity}X${value.price}=`}</td>
                                                <td>{Number(value.quantity * value.price)}</td>
                                            </tr>
                                        )
                                    })
                                )
                            })
                        }
                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                                <span className='charges-desc'>Sub Total</span>
                            </td>

                            <td>
                                <span className='charges'>{props.data.Ordered[0].total_price}</span>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>
                                <span className='charges-desc'>Pickup Charges</span>
                            </td>
                            <td>
                                <span className='charges'>90</span>
                            </td>
                        </tr>
                        <tr id='totalprice'>
                            <td></td>
                            <td></td>
                            <td>Total</td>
                            <td>{props.data.Ordered[0].total_price + 90}</td>
                        </tr>
                    </tbody>
                </table>
                <h3>Address</h3>
                <div id='address-container'>
                    <div id="address-container-1">
                        <p>Home</p>
                        <p>#223, 10th road, Jp Nagar, Bangalore</p>
                    </div>
                </div>
                <div id='btn-div'>
                    <button onClick={cancelFunction} id="cancel-btn">Cancel</button>
                </div>
            </div>
        </>
    )
}

export default OrderHistorySummary
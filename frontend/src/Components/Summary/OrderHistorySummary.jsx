import React from 'react'
import '../../Components/Summary/orderSummary.css'
const OrderHistorySummary = (props) => {
    console.log(props.cancelValue)
    const cancelFunction=()=>{
        props.summaryValue(false)
        props.cancel({...props.cancelValue,Value:true,id:props.data.Ordered[0]._id})
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
                                            <td>{`${value.washtype[0]},${value.washtype[1]}`}</td>
                                            <td>{`${value.quantity}X${value.price / value.quantity}=`}</td>
                                            <td>{value.price}</td>
                                        </tr>
                                    )
                                })
                            )
                        })
                    }
                    <button onClick={cancelFunction}>Cancel</button>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default OrderHistorySummary
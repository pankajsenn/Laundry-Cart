import React, { useEffect, useState } from "react";
import './CreateOrder.css';
import ConfirmOrder from "../ConfirmOrder/ConfirmOrder";
import OrderSummary from '../OrderSummary/OrderSummary';
function CreateOrder() {
    const [totalprice,settotalprice]= useState(0);
    const [confirmorder,setconfirmorder] = useState(false);
    const [productdetails,setproductdetails] = useState([]);
    const [Ordersummary,setOrderSummary] = useState(false)
    const [Shirts,setShirts] = useState({name:"Shirt",quantity:0,washtype:[],price:10});
    const [TShirts,setTShirts] = useState({name:"TShirt",quantity:0,washtype:[],price:15});
    const [Jeans,setJeans] = useState({name:"Jeans",quantity:0,washtype:[],price:25});
    const [Joggers,setJoggers] = useState({name:"Joggers",quantity:0,washtype:[],price:30});
    const [Boxers,setBoxers] = useState({name:"Boxers",quantity:0,washtype:[],price:10});
    const [Trousers,setTrousers] = useState({name:"Trousers",quantity:0,washtype:[],price:35});
    const [Others,setOthers] = useState({name:"Others",quantity:0,washtype:[],price:50});
    function getaddress(){
        fetch("")
    }
    function Proceed(){
        const product = [];
        let total = 0;
        let count=0;
        if(Shirts.quantity!=0){
            product.push(Shirts)
            total += Shirts.price*Shirts.quantity
            count++
        }
        if(TShirts.quantity!=0){
            product.push(TShirts)
            total += TShirts.price*TShirts.quantity
            count++
        }
        if(Jeans.quantity!=0){
            product.push(Jeans)
            total += Jeans.price*Jeans.quantity
            count++
        }
        if(Joggers.quantity!=0){
            product.push(Joggers)
            total += Joggers.price*Joggers.quantity
            count++
        }
        if(Boxers.quantity!=0){
            product.push(Boxers)
            total += Boxers.price*Boxers.quantity
            count++
        }
        if(Trousers.quantity!=0){
            product.push(Trousers)
            total += Trousers.price*Trousers.quantity
            count++
        }
        if(Others.quantity!=0){
            product.push(Others)
            total += Others.price*Others.quantity
            count++
        }
        if(count>0){
            settotalprice(total);
            setproductdetails(product);
            setOrderSummary(true)
        }
    }
    return (
        <>
            {
                Ordersummary && <OrderSummary product={productdetails} summaryPage={setOrderSummary} setconfirmorder={setconfirmorder} total={totalprice}/>
            }
            {
                 confirmorder && <ConfirmOrder setconfirmorder={setconfirmorder}/> 
            }
            <table id="table">
                <thead>
                    <tr>
                        <th id="product-type">Product Types</th>
                        <th>Quantity</th>
                        <th id="washtype">Wash Type</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr id="main">
                        <td id="card-container">
                            <div id="product-image" >
                                <img src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F0b%2F8f%2F0b8fc6bc3f1b4d6284225a3a148b9a387df1bf42.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"/>
                            </div>
                            <div id="descriptions">
                                <p id="desc-title">Jeans</p>
                                <p id="desc-para">Jeans are not easy to wash.</p>
                            </div>
                        </td>
                        <td id="input-container"><input id="input" onChange={(e)=>setJeans({...Jeans,quantity:e.target.value})} value={Jeans.quantity===0?"":Jeans.quantity}/></td>
                        <td id="img-container">
                            <div id="washing-machine">
                                {
                                  Jeans.washtype.includes("machine")?<img src="./colored-washingmachine.svg" alt="washing-machine" className="images" onClick={(e)=>{setJeans({...Jeans,washtype:Jeans.washtype.filter((value)=>value!=="machine"),price:Jeans.price-10})}}/>:
                                  <img src="./washing-machine.svg"  alt="washing-machine"  className="images" onClick={(e)=>{setJeans({...Jeans,washtype:[...Jeans.washtype,"machine"],price:Jeans.price+10})}}/>
                                }
                               
                            </div>
                            <div >
                                {
                                  Jeans.washtype.includes("ironing")?<img src="./colored-ironing.svg" alt="ironing" className="images" onClick={(e)=>{setJeans({...Jeans,washtype:Jeans.washtype.filter((value)=>value!=="ironing"),price:Jeans.price-10})}}/>:   
                                   <img src="./ironing.svg" alt="ironing" className="images" onClick={(e)=>{setJeans({...Jeans,washtype:[...Jeans.washtype,"ironing"],price:Jeans.price+5})}} />
                                }
                            </div>
                            <div >
                                {
                                Jeans.washtype.includes("bleach")?<img src="./colored-bleach.svg" alt="bleach" className="images" onClick={(e)=>{setJeans({...Jeans,washtype:Jeans.washtype.filter((value)=>value!=="bleach"),price:Jeans.price-10})}}/>:
                                <img src="./bleach.svg" alt="bleach" className="images" onClick={(e)=>{setJeans({...Jeans,washtype:[...Jeans.washtype,"bleach"],price:Jeans.price+15})}} />
                                }
                            </div>
                        </td>
                        <td className="price-td">
                            {
                            Jeans.quantity>0?`${Jeans.price} x ${Jeans.quantity}=${Jeans.price*Jeans.quantity}`:"__"
                            }
                           
                         </td>
                         <td>
                            {
                             Jeans.quantity>0?<button onClick={()=>{setJeans({name:"Jeans",quantity:0,washtype:[],price:25})}} className="reset-btn">Reset</button>:null
                            }
                         
                         </td>
                        
                    </tr>
                    <tr id="main">
                        <td id="card-container">
                            <div id="product-image" >
                                <img src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
                            </div>
                            <div id="descriptions">
                                <p id="desc-title">T-Shirts</p>
                                <p id="desc-para">T-Shirts should be washed with love.</p>
                            </div>
                        </td>
                        <td id="input-container"><input id="input" onChange={(e)=>setTShirts({...TShirts,quantity:e.target.value})} value={TShirts.quantity===0?"":TShirts.quantity}/></td>
                        <td id="img-container">
                            <div id="washing-machine">
                            {
                                  TShirts.washtype.includes("machine")?<img src="./colored-washingmachine.svg" alt="washing-machine" className="images" onClick={(e)=>{setTShirts({...TShirts,washtype:TShirts.washtype.filter((value)=>value!=="machine"),price:TShirts.price-10})}}/>:
                                  <img src="./washing-machine.svg"  alt="washing-machine"  className="images" onClick={(e)=>{setTShirts({...TShirts,washtype:[...TShirts.washtype,"machine"],price:TShirts.price+10})}}/>
                                }
                            </div>
                            <div >
                            {
                                  TShirts.washtype.includes("ironing")?<img src="./colored-ironing.svg" alt="ironing" className="images" onClick={(e)=>{setTShirts({...TShirts,washtype:TShirts.washtype.filter((value)=>value!=="ironing"),price:TShirts.price-10})}}/>:   
                                   <img src="./ironing.svg" alt="ironing" className="images" onClick={(e)=>{setTShirts({...TShirts,washtype:[...TShirts.washtype,"ironing"],price:TShirts.price+5})}} />
                                }
                            </div>
                            
                            <div >
                            {
                                TShirts.washtype.includes("bleach")?<img src="./colored-bleach.svg" alt="bleach" className="images" onClick={(e)=>{setTShirts({...TShirts,washtype:TShirts.washtype.filter((value)=>value!=="bleach"),price:TShirts.price-10})}}/>:
                                <img src="./bleach.svg" alt="bleach" className="images" onClick={(e)=>{setTShirts({...TShirts,washtype:[...TShirts.washtype,"bleach"],price:TShirts.price+15})}} />
                            }
                            </div>
                        </td>
                        <td className="price-td">
                            {
                             TShirts.quantity>0?`${TShirts.price} x ${TShirts.quantity}=${TShirts.price*TShirts.quantity}`:"__"
                            }
                           
                         </td>
                         <td>
                            {
                             TShirts.quantity>0?<button onClick={()=>{setTShirts({name:"TShirt",quantity:0,washtype:[],price:15})}} className="reset-btn">Reset</button>:null
                            }
                         
                         </td>
                        
                    </tr>
                    <tr id="main">
                        <td id="card-container">
                            <div id="product-image" >
                                <img src="https://images.unsplash.com/photo-1603252109360-909baaf261c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"/>
                            </div>
                            <div id="descriptions">
                                <p id="desc-title">Shirts</p>
                                <p id="desc-para">Shirts should be washed with care.</p>
                            </div>
                        </td>
                        <td id="input-container"><input id="input" onChange={(e)=>setShirts({...Shirts,quantity:e.target.value})}  value={Shirts.quantity===0?"":Shirts.quantity} /></td>
                        <td id="img-container">
                            <div id="washing-machine">
                            {
                                  Shirts.washtype.includes("machine")?<img src="./colored-washingmachine.svg" alt="washing-machine" className="images" onClick={(e)=>{setShirts({...Shirts,washtype:Shirts.washtype.filter((value)=>value!=="machine"),price:Shirts.price-10})}}/>:
                                  <img src="./washing-machine.svg"  alt="washing-machine"  className="images" onClick={(e)=>{setShirts({...Shirts,washtype:[...Shirts.washtype,"machine"],price:Shirts.price+10})}}/>
                                }
                            </div>
                            <div >
                            {
                                  Shirts.washtype.includes("ironing")?<img src="./colored-ironing.svg" alt="ironing" className="images" onClick={(e)=>{setShirts({...Shirts,washtype:Shirts.washtype.filter((value)=>value!=="ironing"),price:Shirts.price-10})}}/>:   
                                   <img src="./ironing.svg" alt="ironing" className="images" onClick={(e)=>{setShirts({...Shirts,washtype:[...Shirts.washtype,"ironing"],price:Shirts.price+5})}} />
                                }
                            </div>
                            
                            <div >
                            {
                                Shirts.washtype.includes("bleach")?<img src="./colored-bleach.svg" alt="bleach" className="images" onClick={(e)=>{setShirts({...Shirts,washtype:Shirts.washtype.filter((value)=>value!=="bleach"),price:Shirts.price-10})}}/>:
                                <img src="./bleach.svg" alt="bleach" className="images" onClick={(e)=>{setShirts({...Shirts,washtype:[...Shirts.washtype,"bleach"],price:Shirts.price+15})}} />
                            }
                            </div>
                        </td>
                        <td className="price-td">
                            {
                             Shirts.quantity>0?`${Shirts.price} x ${Shirts.quantity}=${Shirts.price*Shirts.quantity}`:"__"
                            }
                           
                         </td>
                         <td>
                            {
                             Shirts.quantity>0?<button onClick={()=>{setShirts({name:"Shirt",quantity:0,washtype:[],price:10})}} className="reset-btn">Reset</button>:null
                            }
                         
                         </td>
                    </tr>
                    <tr id="main">
                        <td id="card-container">
                            <div id="product-image" >
                                <img src="https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvdXNlcnN8ZW58MHx8MHx8&w=1000&q=80"/>
                            </div>
                            <div id="descriptions">
                                <p id="desc-title">Trousers</p>
                                <p id="desc-para">Trousers are the one who can trouble you.</p>
                            </div>
                        </td>
                        <td id="input-container"><input id="input" onChange={(e)=>setTrousers({...Trousers,quantity:e.target.value})}  value={Trousers.quantity===0?"":Trousers.quantity}/></td>
                        <td id="img-container">
                            <div id="washing-machine">
                            {
                                  Trousers.washtype.includes("machine")?<img src="./colored-washingmachine.svg" alt="washing-machine" className="images" onClick={(e)=>{setTrousers({...Trousers,washtype:Trousers.washtype.filter((value)=>value!=="machine"),price:Trousers.price-10})}}/>:
                                  <img src="./washing-machine.svg"  alt="washing-machine"  className="images" onClick={(e)=>{setTrousers({...Trousers,washtype:[...Trousers.washtype,"machine"],price:Trousers.price+10})}}/>
                                }
                            </div>
                            <div >
                            {
                                  Trousers.washtype.includes("ironing")?<img src="./colored-ironing.svg" alt="ironing" className="images" onClick={(e)=>{setTrousers({...Trousers,washtype:Trousers.washtype.filter((value)=>value!=="ironing"),price:Trousers.price-10})}}/>:   
                                   <img src="./ironing.svg" alt="ironing" className="images" onClick={(e)=>{setTrousers({...Trousers,washtype:[...Trousers.washtype,"ironing"],price:Trousers.price+5})}} />
                                }
                            </div>
                            
                            <div >
                            {
                                Trousers.washtype.includes("bleach")?<img src="./colored-bleach.svg" alt="bleach" className="images" onClick={(e)=>{setTrousers({...Trousers,washtype:Trousers.washtype.filter((value)=>value!=="bleach"),price:Trousers.price-10})}}/>:
                                <img src="./bleach.svg" alt="bleach" className="images" onClick={(e)=>{setTrousers({...Trousers,washtype:[...Trousers.washtype,"bleach"],price:Trousers.price+15})}} />
                            }
                            </div>
                        </td>
                        <td className="price-td">
                            {
                             Trousers.quantity>0?`${Trousers.price} x ${Trousers.quantity}=${Trousers.price*Trousers.quantity}`:"__"
                            }
                           
                         </td>
                         <td>
                            {
                             Trousers.quantity>0?<button onClick={()=>{setTrousers({name:"Trousers",quantity:0,washtype:[],price:35})}} className="reset-btn">Reset</button>:null
                            }
                         
                         </td>
                    </tr>
                    <tr id="main">
                        <td id="card-container">
                            <div id="product-image" >
                                <img src="https://images.unsplash.com/photo-1617952236317-0bd127407984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym94ZXIlMjBzaG9ydHN8ZW58MHx8MHx8&w=1000&q=80"/>
                            </div>
                            <div id="descriptions">
                                <p id="desc-title">Boxers</p>
                                <p id="desc-para">Boxers are the easiest for the washing.</p>
                            </div>
                        </td>
                        <td id="input-container"><input id="input" onChange={(e)=>setBoxers({...Boxers,quantity:e.target.value})} value={Boxers.quantity===0?"":Boxers.quantity}/></td>
                        <td id="img-container">
                            <div id="washing-machine">
                            {
                                  Boxers.washtype.includes("machine")?<img src="./colored-washingmachine.svg" alt="washing-machine" className="images" onClick={(e)=>{setBoxers({...Boxers,washtype:Boxers.washtype.filter((value)=>value!=="machine"),price:Boxers.price-10})}}/>:
                                  <img src="./washing-machine.svg"  alt="washing-machine"  className="images" onClick={(e)=>{setBoxers({...Boxers,washtype:[...Boxers.washtype,"machine"],price:Boxers.price+10})}}/>
                                }
                            </div>
                            <div >
                            {
                                  Boxers.washtype.includes("ironing")?<img src="./colored-ironing.svg" alt="ironing" className="images" onClick={(e)=>{setBoxers({...Boxers,washtype:Boxers.washtype.filter((value)=>value!=="ironing"),price:Boxers.price-10})}}/>:   
                                   <img src="./ironing.svg" alt="ironing" className="images" onClick={(e)=>{setBoxers({...Boxers,washtype:[...Boxers.washtype,"ironing"],price:Boxers.price+5})}} />
                                }
                            </div>
                            
                            <div >
                            {
                                Boxers.washtype.includes("bleach")?<img src="./colored-bleach.svg" alt="bleach" className="images" onClick={(e)=>{setBoxers({...Boxers,washtype:Boxers.washtype.filter((value)=>value!=="bleach"),price:Boxers.price-10})}}/>:
                                <img src="./bleach.svg" alt="bleach" className="images" onClick={(e)=>{setBoxers({...Boxers,washtype:[...Boxers.washtype,"bleach"],price:Boxers.price+15})}} />
                            }
                            </div>
                        </td>
                        <td className="price-td">
                            {
                             Boxers.quantity>0?`${Boxers.price} x ${Boxers.quantity}=${Boxers.price*Boxers.quantity}`:"__"
                            }
                           
                         </td>
                         <td>
                            {
                             Boxers.quantity>0?<button onClick={()=>{setBoxers({name:"Boxers",quantity:0,washtype:[],price:10})}} className="reset-btn">Reset</button>:null
                            }
                         
                         </td>
                    </tr>
                    <tr id="main">
                        <td id="card-container">
                            <div id="product-image" >
                                <img src="https://images.unsplash.com/photo-1579920896716-51bfb40ec2a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=417&q=80"/>
                            </div>
                            <div id="descriptions">
                                <p id="desc-title">Joggers</p>
                                <p id="desc-para">Joggers are loved by many so be careful while cleaning them.</p>
                            </div>
                        </td>
                        <td id="input-container"><input id="input" onChange={(e)=>setJoggers({...Joggers,quantity:e.target.value})} value={Joggers.quantity===0?"":Joggers.quantity}/></td>
                        <td id="img-container">
                            <div id="washing-machine">
                               {
                                  Joggers.washtype.includes("machine")?<img src="./colored-washingmachine.svg" alt="machine" className="images" onClick={(e)=>{setJoggers({...Joggers,washtype:Joggers.washtype.filter((value)=>value!=="machine"),price:Joggers.price-10})}}/>:   
                                   <img src="./washing-machine.svg" alt="machine" className="images" onClick={(e)=>{setJoggers({...Joggers,washtype:[...Joggers.washtype,"machine"],price:Joggers.price+5})}} />
                                }
                            </div>
                            <div >
                            {
                                  Joggers.washtype.includes("ironing")?<img src="./colored-ironing.svg" alt="ironing" className="images" onClick={(e)=>{setJoggers({...Joggers,washtype:Joggers.washtype.filter((value)=>value!=="ironing"),price:Joggers.price-10})}}/>:   
                                   <img src="./ironing.svg" alt="ironing" className="images" onClick={(e)=>{setJoggers({...Joggers,washtype:[...Joggers.washtype,"ironing"],price:Joggers.price+5})}} />
                                }
                            </div>
                            
                            <div >
                            {
                                Joggers.washtype.includes("bleach")?<img src="./colored-bleach.svg" alt="bleach" className="images" onClick={(e)=>{setJoggers({...Joggers,washtype:Joggers.washtype.filter((value)=>value!=="bleach"),price:Joggers.price-10})}}/>:
                                <img src="./bleach.svg" alt="bleach" className="images" onClick={(e)=>{setJoggers({...Joggers,washtype:[...Joggers.washtype,"bleach"],price:Joggers.price+15})}} />
                            }
                            </div>
                        </td>
                        <td className="price-td">
                            {
                            Joggers.quantity>0?`${Joggers.price} x ${Joggers.quantity}=${Joggers.price*Joggers.quantity}`:"__"
                            }
                           
                         </td>
                         <td>
                            {
                             Joggers.quantity>0?<button onClick={()=>{setJoggers({name:"Joggers",quantity:0,washtype:[],price:30})}} className="reset-btn">Reset</button>:null
                            }
                         
                         </td>
                        </tr>
                        <tr id="main">
                        <td id="card-container">
                            <div id="product-image" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4-czZpX_uOwLag5ItD25HxLqf24qChZU-A&usqp=CAU" alt="product"/>
                            </div>
                            <div id="descriptions">
                                <p id="desc-title">Others</p>
                                <p id="desc-para">There are many dresses which are also washed,dry clean here.</p>
                            </div>
                        </td>
                        <td id="input-container"><input id="input" onChange={(e)=>setOthers({...Others,quantity:e.target.value})}  value={Others.quantity===0?"":Others.quantity}/></td>
                        <td id="img-container">
                            <div id="washing-machine">
                            {
                                  Others.washtype.includes("machine")?<img src="./colored-washingmachine.svg" alt="machine" className="images" onClick={(e)=>{setOthers({...Others,washtype:Others.washtype.filter((value)=>value!=="machine"),price:Others.price-10})}}/>:   
                                   <img src="./washing-machine.svg" alt="machine" className="images" onClick={(e)=>{setOthers({...Others,washtype:[...Others.washtype,"machine"],price:Others.price+5})}} />
                                }
                            </div>
                            <div >
                            {
                                   Others.washtype.includes("ironing")?<img src="./colored-ironing.svg" alt="ironing" className="images" onClick={(e)=>{setOthers({...Others,washtype:Others.washtype.filter((value)=>value!=="ironing"),price:Others.price-10})}}/>:   
                                   <img src="./ironing.svg" alt="ironing" className="images" onClick={(e)=>{setOthers({...Others,washtype:[...Others.washtype,"ironing"],price:Others.price+5})}} />
                                }
                            </div>
                            <div >
                            {
                                Others.washtype.includes("bleach")?<img src="./colored-bleach.svg" alt="bleach" className="images" onClick={(e)=>{setOthers({...Others,washtype:Others.washtype.filter((value)=>value!=="bleach"),price:Others.price-10})}}/>:
                                <img src="./bleach.svg" alt="bleach" className="images" onClick={(e)=>{setOthers({...Others,washtype:[...Others.washtype,"bleach"],price:Others.price+15})}} />
                            }
                            </div>
                        </td>
                        <td className="price-td">
                            {
                            Others.quantity>0?`${Others.price} x ${Others.quantity}=${Others.price*Others.quantity}`:"__"
                            }
                           
                         </td>
                         <td>
                            {
                             Others.quantity>0?<button onClick={()=>{setOthers({name:"Boxers",quantity:0,washtype:[],price:50})}} className="reset-btn">Reset</button>:null
                            }
                         
                         </td>
                        </tr>
                </tbody>


            </table>
            <div id="buttons">
                <button className="below-buttons" id="cancel">Cancel</button>
                <button className="below-buttons" id="proceed" onClick={Proceed}>Proceed</button>
            </div>
        </>
    )
}
export default CreateOrder;
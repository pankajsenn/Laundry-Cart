const Orders = require('../model/Order');
const router = require('express').Router();

router.post("/orders/add", async (req, res) => {
    try {
        const products = req.body.products;
        const _id = "OR"+ Date.now();
        const email = req.body.email;
        const address = req.body.address;
        const total_price=req.body.total_price;

        const orderdetails = {products,_id,email,address,total_price}

        const Ordered = await Orders.create(orderdetails);
        res.status(200).json({
            status: "success",
            Ordered
        })
    }
    catch (e) {
        res.status(500).json({
            status: "failure",
            Message: e.message
        })
    }
})
router.get("/order/get/past/:order_id",async(req,res)=>{
    try {
        const order_id = req.params.order_id;
        const Ordered = await Orders.find({_id:order_id});
        if(Ordered.length==0){
            res.status(500).json({
                status: "failure",
                Message: "Order does not exists"
            })
        }
        else{
            res.status(200).json({
                status: "success",
                Ordered
            })
        }
        
    }
    catch(e){
        res.status(500).json({
            status: "failure",
            Message: e.message
        })
    }
})

router.get("/order/get/previous/:email",async(req,res)=>{
    try {
        const email = req.params.email;
        const Ordered = await Orders.find({email});
        res.status(200).json({
            status: "success",
            Ordered
        })
    }
    catch(e){
        res.status(500).json({
            status: "failure",
            Message: e.message
        })
    }
})

router.patch('/order/edit',async(req,res)=>{
    try{
        const _id=req.body.id;
        await Orders.findByIdAndUpdate(_id,{status:"Cancelled"})
        res.status(200).json({
            status:'success'
        })
    }
    catch(e){
        res.status(500).json({
            status:"Failure"
        })
    }
})
module.exports = router;
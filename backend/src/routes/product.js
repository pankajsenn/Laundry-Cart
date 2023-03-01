const Product = require('../model/Product');
const router = require('express').Router();

router.post("/products/add", async (req, res) => {
    try {
       const {title,price,image,description} = req.body;
       const product = {
        title:title,
        price:price,
        imageurl:image,
        description:description
       };
       await Product.create(product);
       res.status(200).json({
        status: "success",
        product
    })
    }
    catch (e) {
        res.status(500).json({
            status: e.message
        })
    }
})
router.get("/product/get",async(req,res)=>{
    try{
      const product = await Product.find();
      res.status(200).json({
        status: "success",
        product
      })
    }catch(e){
        res.status(500).json({
            status: e.message
        })
    }
})
module.exports = router;
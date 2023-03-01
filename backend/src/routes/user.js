const User = require('../model/User');
const router = require('express').Router();
const bcrypt = require('bcrypt');
router.post("/api/register",async(req,res)=>{
    try {
        const { email, password, name,phone ,address } = req.body;
        const user_exist = await User.findOne({ email: email });
        if (user_exist) {
            res.status(422).json({ message: "User already exists !" ,statusCode:422});
        }
        else {
            const encrypt_password = await bcrypt.hash(password, 10);
        const signupdetail = {
            email: email,
            password: encrypt_password,
            name: name,
            phone: phone,
            address : address
        };
            await User.create(signupdetail);
            res.status(200).json({
                status: "success",
                signupdetail
            })
        }
    }
    catch (e) {
        res.status(500).json({
            status: e.message
        })
    }

})

router.get("/api/login",async(req,res)=>{
    const { email, password } = req.body;
    const logindetail = await User.findOne({ email: email });
    if (logindetail) {
        if (await bcrypt.compare(password, logindetail.password)) {
            res.status(200).send(logindetail);
        } else {
            res.status(401).send({ error: "invaild Password" , statusCode:401 });
        }
    } else {
        res.status(403).send({ error: "Please go to signup page and create account" , statusCode:403});
    }
})
module.exports = router;
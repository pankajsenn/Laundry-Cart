const cors = require("cors");
const port = 3001||process.env.PORT;
const app = require('../src/app');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
mongoose.set('strictQuery', true);
mongoose.connect(process.env.connection_url,{ useNewUrlParser: true, useUnifiedTopology: true },(err) => {
    if (err) {
        console.log("mongo connection failed ", err);
    }
    else {
        console.log("mongo connected succesfully");
    }
})

app.listen(port,()=>{console.log(`server is up at ${port}`)});
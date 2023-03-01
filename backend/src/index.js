const cors = require("cors");
const port = 3001;
const app = require('../src/app');
const mongoose = require("mongoose");

const connection_url = "mongodb+srv://group17:group17@cluster17.dpgpu3w.mongodb.net/LaundryCart?retryWrites=true&w=majority"

mongoose.set('strictQuery', true);
mongoose.connect(connection_url, (err) => {
    if (err) {
        console.log("mongo connection failed ", err);
    }
    else {
        console.log("mongo connected succesfully");
    }
})

app.listen(port,()=>{console.log(`server is up at ${port}`)});
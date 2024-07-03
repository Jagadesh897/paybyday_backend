const express = require("express");

const app = express();
const cors = require("cors");
// a Connect/Express middleware that can be used to enable CORS with various options 

const mainRouter = require('./routes/index')


app.use(express.json());//body parser
app.use(cors()); 
app.use('/api/v1',mainRouter);
app.listen(3000)
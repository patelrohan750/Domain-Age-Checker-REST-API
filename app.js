const express = require('express');
const app = express();
const domainRoute = require('./routes/router');

const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("Hi i am Live");
})

app.use('/api', domainRoute);

const start = async () => {
    try {
       app.listen(PORT,()=>{
        console.log(`${PORT} Yes I am connected`);
       })
    } catch (error) {
        console.log(error)
    }
}

start();
const express = require('express');

const app = express();
const PORT = 5050;

app.listen(PORT, ()=> console.log(`Server Started at ${PORT}`));

app.get('/users', (req, res)=>{
    return res.status(200).json({success: true, message: "Get User API is working"});
})
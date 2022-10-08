const categoryroutes=require('./routes/category.routes');
const bodyParser=require('body-parser');
const express= require('express');
const {serverport}=require('./config/serverconfig');
const app= express();
app.use(bodyParser.urlencoded({extended: true}));

categoryroutes(app);

app.listen(serverport,()=>{
    console.log("server is listening to port",serverport);
})
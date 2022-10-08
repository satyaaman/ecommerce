const categorycontroller=require('../controller/category.controller');

const routes= (app)=>{
    app.get('/ecom/api/v1/category',categorycontroller.getcategory);

    app.post('/ecom/api/v1/category',categorycontroller.createcategory);

    app.get('/ecom/api/v1/category/:id',categorycontroller.getcategorybyid);

    app.get('/ecom/api/v1/category/categorybyname',categorycontroller.getcategorybyname);
}

module.exports=routes;
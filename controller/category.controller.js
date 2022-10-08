const {createnewcategory,getallcategory,getcategoryid,getcategoryname}= require('../services/category.services');

const getcategory= async(req,res)=>{
    const allcategorydata= await getallcategory();
    return res.json({
        message:'aman is best developer of world',
        success:true,
        code:200,
        data:allcategorydata
    });
}
const createcategory= async(req,res)=>{
    const response = await createnewcategory(req.body);
    return res.json({
        message:'succesfully created the category',
        success:true,
        code:201,
        data:response
    });
}

const getcategorybyid = async(req,res)=>{
    const response=await getcategoryid(req.params.id);
    return res.json({
        message:'succesfully fetched the category',
        success:true,
        code:200,
        data:response
    });
}
const getcategorybyname=async(req,res)=>{
    const response=await getcategoryname(req.query.name);
    return res.json({
        message:'succesfully fetched the category',
        success:true,
        code:200,
        data: response
    });
}

module.exports={
    createcategory,
    getcategory,
    getcategorybyid,
    getcategorybyname
}
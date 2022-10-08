const {category1}=require('../models/index');

const getallcategory =async()=>{
    const allcategorydata=await category1.findAll();
    return allcategorydata;

}

const createnewcategory= async(data)=>{
    const newcategory = await category1.create({
        name: data.name,
        decription: data.decription,
    })
    return newcategory;
}

const getcategoryid= async(iddata)=>{
    const response= await category1.findAll({
        where:{
            id:iddata
        }
    })
    return response;

}

const getcategoryname= async(namedata)=>{
    const response= await category1.findAll({
        where: {
            name:namedata
        }
    })
    return response;
}
module.exports={
    getallcategory,
    createnewcategory,
    getcategoryid,
    getcategoryname
}
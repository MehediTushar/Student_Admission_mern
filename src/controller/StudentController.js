const StudentModel=require('../model/StudentModel');

//create
exports.createStudent=async(req,res)=>{
    let reqBody=req.body;
    try{
        let result=await StudentModel.create(reqBody);
        res.status(200).json({status:"success",data:result})
    }
    catch (e){
        res.status(200).json({status:"fail",data:e})
    }
}

//delete
exports.deleteStudent=async(req,res)=>{
    let id=req.params.id;
    let query={_id:id};
    try{
        let result=await StudentModel.deleteOne(query);
        res.status(200).json({status:"success",data:result})
    }
    catch (e){

        res.status(200).json({status:"fail",data:e})

    }
}

//update
exports.updateStudent=async(req,res)=>{
    let id=req.params.id;
    let reqBody=req.body;
    let query={_id:id};
    try{
        let result=await StudentModel.updateOne(query,reqBody);
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}

//read

exports.listStudent=async(req,res)=>{
    try{
        let result=await StudentModel.find();
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}

exports.studentByID=async(req,res)=>{
    try{
        let id=req.params.id;
        let query={_id:id};
        let result=await StudentModel.find(query);
        res.status(200).json({status:"success",data:result})
    }
    catch (e) {
        res.status(200).json({status:"fail",data:e})
    }
}
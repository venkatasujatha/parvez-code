const { dataSource } = require('../../../database');
const { student } = require('../../entities/studententity');
const studentRepo = dataSource.getRepository('student');
const appConst = require('../../constants');

const add =  async(req, res) => {
  try {
    const resp =  await studentRepo
      .createQueryBuilder()
      .insert()
      .into(student)
      .values(req.body)
      .execute();
    res.status(201).json({
      status: appConst.status.success,
      response: resp.count,
      message: null,
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      status: appConst.status.fail,
      response: null,
      message: err.message,
    });
  }
};

const findstudent=async(req,res)=>{
  try
  {
    const resp=await studentRepo.findOneBy({id: req.params.id});
    res
    .status(201)
    .json({status: appConst.status.success, response: resp, message: null})
  }
  catch(err)
  {
    console.log(err.message)
    res
    .status(400)
    .json({status: appConst.status.fail,response:null,message:err.message})
  }
};

const findall=async(req,res)=>{
  try
  {
    const records=await studentRepo.find();
    const totalcount=await studentRepo.count();
    res
    .status(201)
    .json({status: appConst.status.success, response: {records,totalcount}, message: null})
  }
  catch(err)
  {
    console.log(err.message);
    res.status(400)
    .json({status:appConst.status.fail,response:null,message:err.message})
  }
}

const updatestudent=async (req,res)=>{
  try
  {
    await studentRepo.update(req.body.where.id, req.body.data);
    const resp = await studentRepo.findBy({id: req.body.where.id});
    res
    .status(200)
    .json({status:appConst.status.success,response:resp,message:null})
  }
  catch(err)
  {
    res
    .status(400)
    .json({status:appConst.status.fail,response:null,message:err.message})
  }
}

const deletestudent=async(req,res)=>{
  try
  {
    await studentRepo.delete({id: req.params.id});
    const resp="Deleted successfully";
    res
    .status(201)
    .json({status:appConst.status.success,response:resp,message:null})
  }
  catch(err)
  {
    res
    .status(400)
    .json({status:appConst.status.fail,response:null,message:err.message})
  }
}


module.exports = {add,findstudent,findall,updatestudent,deletestudent}

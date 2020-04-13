const db = require('../app-util/dbconfig');
const script = require('../app-util/Script');

exports.login = async (username)=>{
    const query = await db.query(script.login,{
        replacements: {
            username
          },
          type: db.QueryTypes.SELECT
    });
    return query[0];
}

exports.teach = async (id)=>{
    const query = await db.query(script.teach,{
        replacements: {
            id
          },
          type: db.QueryTypes.SELECT
    });
    return query;
}

exports.createTeach = async (id,subject,detail,code,subject_km,detail_km)=>{
    const query = await db.query(script.createTeach,{
        replacements: {
            id,
            subject,
            detail,
            code,
            subject_km,
            detail_km
          },
    });
    return {code:200,message:"Successed"};
}

exports.updateTeacher = async (id,fname,lname,fname_km,lname_km,sex,phone,phone1,experience,address,dob)=>{
    const query = await db.query(script.updateTeacher,{
        replacements: {
            id,
            fname,
            lname,
            fname_km,
            lname_km,
            sex,
            phone,
            phone1,
            experience,
            address,
            dob
          },
    });
    return {code:200,message:"Successed"};
}

exports.changePwdTeacher = async (id,hashPwd)=>{
    const query = await db.query(script.changePwdTeacher,{
        replacements: {
            id,
            hashPwd
          },
    });
    return {code:200,message:"Successed"};
}

exports.getTeacher = async (id)=>{
    const query = await db.query(script.getTeacher,{
        replacements: {
            id
          },
          type: db.QueryTypes.SELECT
    });
    return query[0];
}
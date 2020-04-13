const bcrypt = require('bcrypt');
const dateFormat = require('dateformat');

const model = require('../app-models/model-all')

exports.login = async (req,res,next)=>{
    try {
        const username = req.body.username;
        const pwd = req.body.pwd;
        const teacher = await model.login(username);
        if(teacher){
            const hash = teacher.teacher_password;
            const isEqual = await bcrypt.compare(pwd,hash);
            if(isEqual){
                if(teacher.teacher_status == 1){
                    res.send({
                        code:200,
                        id:teacher.teacher_id,
                        fname:teacher.teacher_firstname,
                        lname:teacher.teacher_lastname,
                        fname_kh:teacher.teacher_firstname_kh,
                        lname_kh:teacher.teacher_lastname_kh,
                        sex:teacher.teacher_sex,
                        email:teacher.teacher_email,
                        phone:teacher.teacher_phone,
                        phone1:teacher.teacher_phone1,
                        experience:teacher.teacher_experience,
                        address:teacher.teacher_address,
                        dob:dateFormat(teacher.teacher_dob,"dd/mmmm/yyyy"),
                        date:dateFormat(teacher.teacher_register_date,"dd/mmmm/yyyy"),
        
                    });
                }else{
                    const err = Error("Teacher is inactive!");
                    err.code = 402;
                    next(err);
                }                
            }else{
                const err = Error("Incorrect Usename Password!");
                err.code = 401;
                next(err);
            }
        }else{
            const err = Error("Incorrect Usename Password!");
                err.code = 401;
                next(err);
        }
        
    } catch (error) {
        const err = Error("Bad Request!");
        err.code = 400;
        next(err);
    }
}

exports.teach = async (req,res,next)=>{
    try {
        const id = req.body.id;
        const teach = await model.teach(id);
        if(teach){
            res.send({code:200,teach});
        }else{
            const err = Error("Don't have Teacher!");
            err.code = 401;
            next(err);
        }
    } catch (error) {
        const err = Error("Bad Request!");
        err.code = 400;
        next(err);
    }
}

exports.createTeach = async (req,res,next)=>{
    try {
        const id = req.body.id;
        const subject = req.body.subject;
        const detail = req.body.detail;
        const code = req.body.code;
        const subject_km = req.body.subject_km;
        const detail_km = req.body.detail_km;
        const result = await model.createTeach(id,subject,detail,code,subject_km,detail_km);
        if(result){
            res.send(result);
        }else{
            const err = Error("Server Error");
            err.code = 500;
            next(err);
        }
    } catch (error) {
        const err = Error("Bad Request!");
        err.code = 400;
        next(err);
    }
}

exports.updateTeacher = async(req,res,next)=>{
    try {
        const id = req.body.id;
        const fname = req.body.fname;
        const lname = req.body.lname;
        const fname_km = req.body.fname_km;
        const lname_km = req.body.lname_km;
        const sex = req.body.sex;
        const phone = req.body.phone;
        const phone1 = req.body.phone1;
        const experience = req.body.experience;
        const address = req.body.address;
        const dob = req.body.dob;
        const update = await model.updateTeacher(id,
            fname,
            lname,
            fname_km,
            lname_km,
            sex,
            phone,
            phone1,
            experience,
            address,
            dob);
        if(update){
            const teacher = await model.getTeacher(id);
            if(teacher){
                res.send({
                    code:200,
                    id:teacher.teacher_id,
                    fname:teacher.teacher_firstname,
                    lname:teacher.teacher_lastname,
                    fname_kh:teacher.teacher_firstname_kh,
                    lname_kh:teacher.teacher_lastname_kh,
                    sex:teacher.teacher_sex,
                    email:teacher.teacher_email,
                    phone:teacher.teacher_phone,
                    phone1:teacher.teacher_phone1,
                    experience:teacher.teacher_experience,
                    address:teacher.teacher_address,
                    dob:dateFormat(teacher.teacher_dob,"dd/mmmm/yyyy"),
                    date:dateFormat(teacher.teacher_register_date,"dd/mmmm/yyyy"),
                });
            }else{
                const err = Error("Don't have Teacher!");
                err.code = 401;
                next(err);
            }
        }else{
            const err = Error("Don't have Teacher!");
            err.code = 401;
            next(err);
        }
    } catch (error) {
        const err = Error("Bad Request!");
        err.code = 400;
        next(err);
    }
}

exports.changePwdTeacher = async(req,res,next)=>{
    try {
        const id = req.body.id;
        const pwd = req.body.pwd;
        const hashPwd = await bcrypt.hash(pwd,12);
        const change = await model.changePwdTeacher(id,hashPwd);
        if(change){
            res.send(change);
        }else{
            const err = Error("Don't have Teacher!");
            err.code = 401;
            next(err);        
        }
    } catch (error) {
        const err = Error("Bad Request!");
        err.code = 400;
        next(err);
    }
}

const bcrypt = require('bcrypt');
const dateFormat = require('dateformat');

const model = require('../app-models/model-all')

exports.login = async (req,res,next)=>{
    try {
        const username = req.body.username;
        const pwd = req.body.pwd;
        const teacher = await model.login(username);
        const hash = teacher.teacher_password;
        const isEqual = await bcrypt.compare(pwd,hash);

        if(isEqual){
            res.send({
                id:teacher.teacher_id,
                fname:teacher.teacher_firstname,
                lname:teacher.teacher_lastname,
                email:teacher.teacher_email,
                phone:teacher.teacher_phone,
                phone1:teacher.teacher_phone1,
                experience:teacher.teacher_experience,
                address:teacher.teacher_address,
                dob:dateFormat(teacher.teacher_dob,"dd/mmmm/yyyy"),
                date:dateFormat(teacher.teacher_register_date,"dd/mmmm/yyyy"),
                fname_kh:teacher.teacher_firstname_kh,
                lname_kh:teacher.teacher_lastname_kh,

            });
        }else{
            const err = Error("Incorrect Usename Password!");
            err.code = 200;
            next(err);
        }
    } catch (error) {
        const err = Error("Bad Request!");
        err.code = 400;
        next(err);
    }
}
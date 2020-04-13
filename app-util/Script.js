exports.login = "SELECT * FROM teacher WHERE teacher_username = :username OR teacher_email = :username";
exports.teach = "SELECT teach_id AS id,"+
"teach_subject AS subject_en,"+
"teach_detail AS detail_en,"+
"teach_subject_kh AS subject_km,"+
"teach_detail_kh AS detail_km,"+
"teach_code AS code_teach FROM teach WHERE teach_teacher = :id AND teach_status = '1'";
exports.createTeach = "INSERT INTO teach (teach_teacher, teach_subject, teach_detail, teach_code, teach_subject_kh, teach_detail_kh, teach_status) "+
"VALUES (:id, :subject, :detail, :code, :subject_km, :detail_km, '1')";
exports.updateTeacher = "UPDATE teacher SET "+
"teacher_firstname = :fname, "+
"teacher_lastname = :lname, "+
"teacher_firstname_kh = :fname_km, "+
"teacher_lastname_kh = :lname_km, "+
"teacher_sex = :sex, "+
"teacher_phone = :phone, "+
"teacher_phone1 = :phone1, "+
"teacher_experience = :experience, "+
"teacher_address = :address, "+
"teacher_dob = :dob "+
"WHERE teacher_id = :id";
exports.getTeacher = "SELECT * FROM teacher WHERE teacher_id = :id";
exports.changePwdTeacher = "UPDATE teacher SET teacher_password = :hashPwd WHERE teacher_id = :id";
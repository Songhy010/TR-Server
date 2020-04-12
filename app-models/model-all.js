const db = require('../app-util/dbconfig');
const script = require('../app-util/Script');

exports.login = async (user_name,user_phone,user_type)=>{
    const query = await db.query(script.login,{
        replacements: {
            user_name,
            user_phone,
            user_type
          },
          type: db.QueryTypes.SELECT
    });
    return query[0];
}
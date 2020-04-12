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
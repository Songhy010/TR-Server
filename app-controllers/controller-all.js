exports.login = async (req,res,next)=>{
    const username = req.body.username;
    const pwd = req.body.pwd;
    res.send({username,pwd});
}
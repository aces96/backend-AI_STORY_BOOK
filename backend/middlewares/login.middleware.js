

exports.loginMiddleware = (req,res,next)=> {

        if(req.body.fullName == '' || req.body.password == ''){
            res.json({
                message: 'fullname and password are required'
            })
        }
}
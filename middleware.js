const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require("./config");

const authMiddleware = (req,res,next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(403).json({msg:"1"})
    }
    const token = authHeader.split(' ')[1];
    try{
        const decoded = jwt.verify(token,JWT_SECRET)
        if(decoded.userId){
            req.userId = decoded.userId;
            next()
        }
        else{
            return res.status(403).json({msg:"2"})
        }
        
    }
    catch(err){
        return res.status(403).json({msg:"3"})
    }

};
module.exports = {
    authMiddleware
}
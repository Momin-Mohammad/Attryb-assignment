
const CheckLoggedIn=(req,res,next)=>{
    let email = req.headers.email;
console.log(email)
    if(email){
        next();
    }else{
        res.send({msg:"Please Login first"})
    }

}

module.exports = CheckLoggedIn;
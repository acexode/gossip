const mongoose = require("mongoose");
const bycrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    email:{
        type: String,
        unique:true,
        required:true
    },
    username:{
        type: String,
        unique:true,
        required:true
    },
    password:{
        type: String,        
        required:true
    }
    
})



userSchema.pre("save", function(next){
    
    const user = this;
    console.log(this)
    if(this.isModified("password") ||this.isNew ){       
        bycrypt.genSalt(10,function(err,salt){
            console.log(salt)
            if(err){
                return next(err)
            }
            bycrypt.hash(user.password,salt,(err,hash)=>{
                console.log(err)
                if(err){
                    return next(err)
                }
                user.password = hash;
                console.log(hash)
                next()
            })
        })
    }else{
        return next()
    }
});

userSchema.methods.comparePassword = function(pwd,next){    
    bycrypt.compare(pwd,this.password,function(err,result){        
        if(err){
            return next(err)
        }
        next(null,result)
    })
};
module.exports = mongoose.model("Author",userSchema)



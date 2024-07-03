const mongoose = require('mongoose')
const { Types } = require('mongoose')

mongoose.connect('mongodb+srv://havocjaga756:7708677984Jp@cluster0.w3isd66.mongodb.net/')

const userSchema = new mongoose.Schema({
    username :{
        type: String,
        required: true,
        unique:true,
        trim: true,
        lowercase:true,
        minLenght: 3,
        maxLenght: 30
    },
    password : {
        type: String,
        required: true,
        minLenght: 6
    },

    firstName :{
        type: String,
        required: true,
        trim: true,
        maxLenght: 50
    },
    lastName : {
        type: String,
        required: true,
        trim : true,
        maxLenght : 50
    }
})

const User = mongoose.model("User",userSchema)

const accountSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : true
    },
    balance : {
        type : Number,
        required : true
    }

})
const Account = mongoose.model('Account',accountSchema)
module.exports = {
    User,
    Account
}
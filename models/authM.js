import mongoose from "mongoose";
var Schema = mongoose.Schema
import jwt from 'jsonwebtoken'

const authSchema = new mongoose.Schema({


    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String
    },
    cPassword: {
        type: String
    },
    phone: {
        type: Number,
    },
    gender: {
        type: String
    },
    age: {
        type: Number,
    },
    address: {
        type: String
    },
    city: {
        type: String,
    },
    state: {
        type: String
    },
    zip: {
        type: String
    },
    image: {
        type: String
    },
    cloudinary_id: {
        type: String,
    },
    token: {
        type: String,
    },
    isAdmin:
    {
        type: Boolean,
        default: false
    },
    isVarified: {
        type: Number,
        default: 0,
    }
}, { versionKey: false })


authSchema.methods.generateTokens = async function () {

    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, 'privatekey', {

        expiresIn: "24h"
    })
    return token
}

const Auth = mongoose.model('auth', authSchema)

export default Auth
import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
    username: { type: String, requierd: true },
    password: { type: String, required: true },
    birth:    { type: Date, required: false }
})

//UserSchema.methods

module.exports = model('User', UserSchema, 'users')


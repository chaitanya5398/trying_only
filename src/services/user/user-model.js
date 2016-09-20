'use strict';

// user-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const userSchema = new Schema({
  facebookId: { type: String },
  facebook: { type: Schema.Types.Mixed },
  googleId: { type: String },
  google: { type: Schema.Types.Mixed },
  fname: {type:String,required: true},
  lname: {type:String,required:true},
  username: {type:String, required:true, unique: true},
  email: {type: String, required: true, unique: true, validator: validator.isEmail, message: "{VALUE} is not a valid email."},

  password: { type: String, required: true },
  dob: {type:Date,required:true},
  gender: {type:String, required:true, enum: ['male','female','other'] },
  occupation: {type:String, required:true, enum:['student','employee','other'] },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
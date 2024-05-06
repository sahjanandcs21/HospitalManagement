const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const Appointment  = require('./appointment');
const User = require('./user');
const doctorSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    tc: {
        type:String,
        required:true,
        unique:true
    },
    phoneNumber: {
        type:String,
        required:true,
        unique:true
    },
    address: {
        type:String,
        required:true,
        unique:true
    },
    isAuthorized: {
        type: Boolean,
        default: true
    },
    mySecretary: {
        type:String,
        index:true,
        unique:true,
        sparse:true
    },
    doctorSection: {
        type:String,
        required:true
    },
    patientAppointments: [{
        type: Schema.Types.ObjectId,
        ref: 'Appointment'
    }],
    patients: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]


});

doctorSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Doctor', doctorSchema);
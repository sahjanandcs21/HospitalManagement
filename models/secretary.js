const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const secretarySchema = new Schema({
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
    myDoctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    patientAppointments: [{
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    }]
});

secretarySchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Secretary', secretarySchema);
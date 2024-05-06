const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');
const Doctor = require('./doctor');

const appointmentSchema = new Schema({
    appointmentTime: {
        type:String,
        required:true
    },
    appointmentDate: {
        type:String,
        required:true
    },
    appointmentSection: {
        type:String,
        required:true
    },

    appointmentOwner: {
        type:String,
        required:true
    },
    
    /*appointmentOwner: {
        type: Schema.Types.ObjectId,
        ref: 'currentUser'
    }*/

    appointmentDoctor: {
        type: String,
        required: true
    },
    appointmentCondition: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model("Appointment", appointmentSchema);


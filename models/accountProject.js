const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({

    name:{
        type: String,
        required: [true, "This field empty? "]
    },

    company:{
        type: mongoose.Schema.Types.ObjectId, ref:'companys', required:true
    },

    people:
    [{type: Schema.Types.ObjectId, ref:'companyinsides'}],
    
});

module.export = mongoose.model('projects', projectSchema);
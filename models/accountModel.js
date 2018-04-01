const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    email: {
        type: String,
        required: [true, "This field empty? "],
        unique: true
    },

    password: {
        type: String,
        required: [true, "Need to fill "]
    },

    company:
    [{type: Schema.Types.ObjectId, ref:'companys'}]
});

const accountCompany = new Schema({
    companyName:{
       type: String, 
       required: [true, "This field empty? "]
    },
    
    user:{
        type: mongoose.Schema.Types.ObjectId, ref:'users', required: true
    },
    
    company_sekunder:
    [{type: Schema.Types.ObjectId, ref:'companyinsides'}],
    
    project:
    [{type: Schema.Types.ObjectId, ref:'projects'}],

    people:
    [{type: Schema.Types.ObjectId, ref:'peoples'}],

    team:
    [{type: Schema.Types.ObjectId, ref:'teams'}],

    archive:
    [{type: Schema.Types.ObjectId, ref:'archives'}]
    
});

const companyLainSchema = new Schema({
    name:{
        type: String,
        required: [true, "This field empty? "]
    },

    address:{
        type: String
    },
    
    website:{
        type: String
    },

    phone: {
        type: Number   
    },

    usd: {
        type: Number
    },

    otherInfo: {
        type: String
    },

    company_primer:{
        type: mongoose.Schema.Types.ObjectId, ref:'companys', required: true
    },

    people:
    [{type: Schema.Types.ObjectId, ref:'peoples'}],
});

const manyPeople = new Schema({
    email:{
        type:String
    },

    position:{
        type:String
    },
    
    company:
    [{type: Schema.Types.ObjectId, ref:'companyinsides'}],

    team:
    [{type: Schema.Types.ObjectId, ref:'teams'}],

    project:{
        type: Array
    },

    company_primer:{
        type: mongoose.Schema.Types.ObjectId, ref:'companys', required: true
    },

    archive:{
        type: String
    }

});

const theTeam = new Schema({
    name:{
        type:String
    },

    people:{
        type: Array
    },

    company:{
        type: mongoose.Schema.Types.ObjectId, ref:'companys', required: true
    },

    total:{
        type: Number
    }
});

const manyArchive = new Schema({
    name:{
        type: String
    },

    email:{
        type: String
    },

    posisi:{
        type: String
    },

    company_primer:{
        type: String
    }

})

module.export = mongoose.model('users', accountSchema);
module.export = mongoose.model('companys', accountCompany);
module.export = mongoose.model('companyinsides', companyLainSchema);
module.export = mongoose.model('peoples', manyPeople);
module.export = mongoose.model('teams', theTeam);
module.export = mongoose.model('archives', manyArchive);
//module.export = mongoose.model('companys', companySchema)

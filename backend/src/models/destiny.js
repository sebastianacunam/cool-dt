import mongoose from "mongoose";


const destinySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        required:true,
    },
    country:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    picture:{
        type:String,
        required:true,
    },
},
    {
        timestamps: true,
    }
);

const Destiny = mongoose.model("Destiny", destinySchema);
export default Destiny;

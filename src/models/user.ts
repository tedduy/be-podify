import { Model, ObjectId, Schema, model } from "mongoose";

// interface User
interface UserDocument {
    name: string;
    email: string;
    password: string;
    verified: boolean;
    avatar: {url: string, publicId: string};
    tokens: string[];
    favorite: ObjectId[];
    followers: ObjectId[];
    followings: ObjectId[];
}

const userSchema = new Schema<UserDocument>({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    avatar:{
        type: Object,
        url: String,
        publicId: String,
    },
    verified:{
        type: Boolean,
        default: false,
    },
    favorite: [{
        type: Schema.Types.ObjectId,
        ref: "Audio",
    }],
    followers: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    followings: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    // 2 ways to declare array of string type
    // tokens: [{
    //     type: String,
    // }]
    tokens:[String],
},{timestamps: true})

export default model("User", userSchema) as Model<UserDocument>
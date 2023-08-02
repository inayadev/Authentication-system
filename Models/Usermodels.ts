import mongoose, {Document} from "mongoose"
interface userName {
fullname: string,
email:string,
password:string

}

interface MyUser extends userName, Document{};


const mainUser = new mongoose.Schema(
    {
 fullname:{
    type:String,
    required:[true, "please enter your fullname"]
 },
 email:{
    type:String,
    required:[true, "please enter your email"],
    lowercase:true,
    trim:true,
    unique:true
 },
 password:{
    type:String,
    required:[true, "please enter a password"],
    min:[6, "please enter at least 6 characters"]
 }
}, {timestamps:true})

const Usermodel = mongoose.model<MyUser>("User", mainUser)
export default Usermodel
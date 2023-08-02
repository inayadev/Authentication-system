import {Router} from "express"
import { Register } from "../Controller/Usercontroller"

const allroute = Router()


allroute.route("Register").post(Register)




export default allroute
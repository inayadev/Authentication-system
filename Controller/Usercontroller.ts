import { Request,Response } from "express";
import Usermodel from "../Models/Usermodels";

export const Register =async (req:Request, res:Response):Promise<Response> => {
    try {
        const{email,password,fullname}= req.body
        const createuser = await Usermodel.create({
            email,password,fullname
        })
         return res.status(200).json({
            message: "successfull",
            data:createuser
         })

    } catch (error) {
        return res.status(400).json({
            message:"failed",
        error: error
        })
        
    }
    
}
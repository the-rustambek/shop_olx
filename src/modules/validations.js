const joi = require("joi");

module.exports = class Validations{
    static async signUpValidation(data){
        return await joi.object({
            name:joi.string().required().min(3).max(32).trim().error(new Error("Name is invalid")),
            email: joi.string().required().trim().lowercase().error(new Error("Email is invalid")),
            password:joi.string().required().error(new Error("Password is invalid"))
        }).validateAsync(data);
    }
}
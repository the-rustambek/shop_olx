const joi = require("joi");

module.exports = class Validations{
    static async signUpValidation(data){
        return await joi.object({
            name:joi.string().required().min(3).max(32).trim().error(new Error("Name is invalid")),
        }).validateAsync(data);
    }
}
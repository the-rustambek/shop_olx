const joi = require("joi");

module.exports = class Validations {
    static async signUpValidation(data) {
        return await joi.object({
            name: joi.string().required().min(3).max(32).trim().error(new Error("Name is invalid")),
            email: joi.string().required().trim().lowercase().error(new Error("Email is invalid")),
            password: joi.string().required().error(new Error("Password is invalid"))
        }).validateAsync(data);
    }

    static async loginValidation(data) {
        return await joi.object({

            email: joi.string().required().trim().lowercase().error(new Error("Email is invalid")),
            password: joi.string().required().error(new Error("Password is invalid"))
        }).validateAsync(data);
    }


    static async addAdsValidation(data) {
        return await joi.object({
            title: joi.string().required().trim().min(3).max(128).error(new Error("Sarlavhada xato bor")),
            number: joi.string()
            .required()
            .error(new Error("Raqam o'zbekistonni emas"))
            .pattern(/^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/),
            address: joi.string().required().min(3).max(128).error(new Error("Addresda xato bor")),
            category: joi.string().required().error(new Error("Categoryada xato bor")),
            file: joi.string(),
            price: joi.number().required().min(0).error(new Error("NARXDA raqamda xato bor")),
            description: joi.string().required().min(8).max(1024).error(new Error("Description da xato bor")),
        }).validateAsync(data);
    }
}
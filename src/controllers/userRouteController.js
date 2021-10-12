const {
    signUpValidation,
    loginValidation
} = require("../modules/validations");
// const {
//     userVerifyGetController
// } = require("../routes/userRoute");
const users = require("../models/userModels");
const {
    generateHash,
    compareHash
} = require("../modules/bcrypt");
const {
    email: sendMail
} = require("../modules/email");
const {
    createToken
} = require("../modules/jwt");
const {
    isValidObjectId
} = require("mongoose");
const ads = require("../models/adsModel");
const sessions = require("../models/sessionsModel");

module.exports = class userRouteController {
    static async userRegGetController(req, res) {
        res.render("reg");
    }
    static async userLoginGetController(req, res) {
        res.render("login");
    }

    static async userSignUpPostController(req, res) {
        try {
            const {
                name,
                email,
                password
            } = await signUpValidation(req.body);

            const user = await users.create({
                name,
                email,
                password: await generateHash(password)
            });



            // await sendMail(
            //     email,
            //     "Iltimos pochtangizni tasdiqlang",
            //     "Pochtangizni tasdiqlash uchun link",
            //     `<a href="http://localhost:8080/users/verify/${user._id}"/>Tasdiqlash</a>`
            // );
            console.log(`http://localhost:8080/users/verify/${user._id}`)


            res.redirect("/users/login");
        } catch (error) {
            console.log(error);
            res.render("reg", {
                error: error + "",
            });

        }

    }
    static async userVerifyGetController(req, res) {
        try {
            const
                id = req.params.id;
            if (!id) throw new Error("Verification kalit xato");

            if (!isValidObjectId(id)) throw new Error("Verification kalit xato");

            const user = await users.findOne({
                _id: id,
            })

            if (!user) throw new Error("Verification kalit xato");
            let x = await users.updateOne({
                _id: id,
            }, {
                isVerified: true
            });

            res.cookie("token", await createToken({
                id: user._id,
            })).redirect("/");
            console.log(user);
        } catch (error) {
            res.render("login", {
                error: error + "",
            })
        }
    }
    static async userLoginPostController(req, res) {
        try {
            const {
                email,
                password
            } =await  loginValidation(req.body);

            const user = await users.findOne({
                email:email,
            });

            if(!user) throw new Error("User topilmadi");

            if(!(await compareHash(password, user.password)))
            throw new Error("Parol xato");

await sessions.deleteMany({
    owner_id:user._id,
    user_agent:req.headers["user-agent"],
})

            const session = await sessions.create({
                owner_id:user._id,
                user_agent:req.headers["user-agent"],
            });

            // console.log(session);

            res.cookie("token",await createToken({
                session_id:session._id,
            })).redirect("/");



        } catch (error) {

            res.render("login",{
                error: error + "",
            })
        }
    }

    static async userExitGetController(req,res){
        res.clearCookie("token").redirect("/");
    }



static async userProfileGetController(req,res){
    
const valid = isValidObjectId(req.params?.id);

if(!valid){
    res.redirect("/");
    return 0;
}


    const user = await users.findById(req.params?.id);

    if(!user){
        res.redirect("/");
        return 0;
    }

    const user_ads = await ads.find({
        owner_id: user._id,
    })

    res.render("profile",{
        user:user,
        profile:user,
        isOwnProfile:req.user._id.equals(user._id),
        user_ads,

    });
}


static async userSessionGetController(req,res){
    try{
        const user_sessions =  await sessions.find({
            owner_id:req.user._id,
        });

        res.render("sessions",{
            user: req.user,
            user_sessions,
        });
    }
    catch(error){
        console.log(error);
        res.redirect("/");
    }
}



static async userSessionDeleteController(req,res){
    try{
        const session_id = isValidObjectId(req.params?.id)
   
   if(!session_id) throw new Error("Session id is invalid");

   await sessions.deleteOne({
       owner_id:req.user._id,
       _id:     req.params?.id,
   });
   res.redirect("/users/sessions");

    }
    catch(error){
        console.log(error);
res.redirect("/users/sessions");
    }
}

};
const bcrypt = require("bcrypt");

module.exports.generateHash = async function generataHash(data){
    return bcrypt.hash(data, await bcrypt.genSalt(10));
};

module.exports.compareHash = async function compareHash(data, hash){
    return await bcrypt.compare(data, hash);
}
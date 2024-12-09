const bcrypt = require("bcryptjs");

const makeHash = async password => {
    try {
        const salt = await bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(password, salt);
        return hashedPassword;
    } catch (error) {
        console.log("Error Hashing Password");
    }
};
const compareHashed = async (password, hashedPassword) => {
    try {
        return await bcrypt.compareSync(password, hashedPassword);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {makeHash,compareHashed}
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config("../../.env");
const secretKey = process.env.SECRET_KEY;
const expiresIn = process.env.EXPIRES_IN;

const encodeJWT = async payload => {
    return jwt.sign(payload, secretKey, { expiresIn });
};
const decodeJWT = async token => {
    try {
        return jwt.verify(token, secretKey);
    } catch (err) {
        return null;
    }
};
const setCookie = async (res, value) => {
    res.cookie("e-store", value, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httponly: false,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    });
    return true;
};

module.exports = {
    encodeJWT,
    decodeJWT,
    setCookie
};

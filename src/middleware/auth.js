const jwt = require("jsonwebtoken")

const authentication = async function (req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
    console.log(token);
    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });
    next()
};

const authorization = async function (req, res, next) {
    let token = req.headers["x-auth-token"]
    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key")
    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId
    if (!decodedToken) return res.send({ status: false, msg: "token in Valid" })
    if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: "You Are LoggedIn But Not Authorised For This Activity" })
    next()
}

module.exports.authentication = authentication
module.exports.authorization = authorization
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try {
    let data = req.body;
    let savedData = await userModel.create(data);
    console.log(res.newAtribute);
    res.status(201).send({ msg: savedData });
  }
  catch (error) {
    return res.status(500).send({ status: false, msg: "Server Error" });
  }
};

const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(401).send({
        status: false,
        msg: "username or the password is not correct",
      });
    // Once the login is successful, create the jwt token with sign function
    // Sign function has 2 inputs:
    // Input 1 is the payload or the object containing data to be set in token
    // The decision about what data to put in token depends on the business requirement
    // Input 2 is the secret (This is basically a fixed value only set at the server. This value should be hard to guess)
    // The same secret will be used to decode tokens 
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "thorium",
        organisation: "FunctionUp",
      },
      "functionup-plutonium-very-very-secret-key"
    );
    res.setHeader("x-auth-token", token);
    res.status(201).send({ status: true, token: token });
  }
  catch (error) {
    return res.status(500).send({ status: false, msg: "Server Error" })
  }
};

const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    console.log(userId)
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.status(404).send({ status: false, msg: "No such user exists" });
    res.status(200).send({ status: true, data: userDetails });
  }
  catch (error) {
    res.status(500).send({ status: false, msg: "Server Error" })
  }
};

const updateUser = async function (req, res) {
  try {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send("No such user exists");
    }
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, { new: true });
    res.status(201).send({ status: true, data: updatedUser });
  }
  catch (error) {
    res.status(500).send({ status: false, msg: "Server Error" })
  }
};

const DeleteUser = async function (req, res) {
  try {
    let userId = req.params.userId
    let user = await userModel.findById(userId);
    if (!user) {
      return res.send("No Such User Exists")
    }
    let DeleteUsers = await userModel.findOneAndUpdate({ _id: userId }, [{ $set: { isDeleted: true } }], { new: true });
    res.send({ status: true, data: DeleteUsers })
  }
  catch (error) {
    res.status(500).send({ status: false, msg: "Server Error" })
  }
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.DeleteUser = DeleteUser;

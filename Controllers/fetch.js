const Users = require('../Schema/userData')
const ObjectId = require('mongoose').Types.ObjectId;


const fetchAllImages = async (req, res) => {
    const usersList = await Users.find();
    if (usersList) {
        res.status(200).send(usersList)
    }
}


module.exports = { fetchAllImages }
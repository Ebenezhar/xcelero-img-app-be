const Users = require('../Schema/userData')
const ObjectId = require('mongoose').Types.ObjectId;


const fetchAllImages = async (req, res) => {
    const imagefiles = await Users.find();
    if (imagefiles) {
        res.status(200).send(imagefiles)
    }
}


module.exports = { fetchAllImages }
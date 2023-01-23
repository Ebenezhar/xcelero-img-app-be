const Users = require('../Schema/userData')
const updateDetails = async (req, res) => {

    try {
        let output = await Users.aggregate([
            {
                '$unwind': {
                    'path': '$images'
                }
            }, {
                '$match': {
                    'images.fileName': `${req.params.fname}`
                }
            }
        ])
        output[0].images.ownerDetails.ownerName = req.body.ownerName
        output[0].images.ownerDetails.ownerphoneNumber = req.body.ownerphoneNumber
        output[0].images.ownerDetails.ownerEmail = req.body.ownerEmail
        output[0].images.ownerDetails.category = req.body.category
        let replace = output[0].images
        let id = output[0]._id

        let response = await Users.updateOne({ "_id": id }, { "$pull": { "images": { "fileName": `${req.params.fname}` } } })
        let finalresult = await Users.updateOne({ "_id": id },
            { "$push": { "images": replace } })
        if (finalresult.acknowledged) {
            res.status(200).send({ message: "File Updated successfully" })
        }

    } catch (error) {
        res.status(400).send(error.message)
    }

}
module.exports = { updateDetails }
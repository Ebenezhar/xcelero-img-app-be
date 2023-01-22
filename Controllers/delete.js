const Users = require('../Schema/userData')

const deleteImage = async (req, res) => {
    console.log(req.params.fname);
    let list = await Users.aggregate([
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
    console.log(list);
    let id = list[0]._id
    console.log(id);
    let response = await Users.update({ "_id": id }, { "$pull": { "images": { "fileName": `${req.params.fname}` } } })
    console.log(response);
    if (response.acknowledged) {
        res.status(200).send({ message: "Successfully deleted" })
    }
}
module.exports = { deleteImage }
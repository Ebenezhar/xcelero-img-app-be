const Users = require('../Schema/userData')


const postImages = async (req, res) => {
    try {
        let imagesArray = []
        req.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.mimetype,
                ownerDetails: {
                    ownerName: req.body.ownerName,
                    ownerphoneNumber: req.body.ownerphoneNumber,
                    ownerEmail: req.body.ownerEmail,
                    category: req.body.category,
                }
            }
            imagesArray.push(file);
        });
        const files = new Users({
            category: req.body.category,
            images: imagesArray
        })
        await files.save()
        res.status(200).send({ message: 'Files saved successfully' })
    } catch (error) {
        res.status(400).send(error.message)
    }
}
module.exports = { postImages }
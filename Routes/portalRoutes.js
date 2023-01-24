const express = require('express');
const { deleteImage } = require('../Controllers/delete');
const { fetchAllImages } = require('../Controllers/fetch');
const { postImages } = require('../Controllers/post');
const { updateDetails } = require('../Controllers/puts');
const { upload } = require('../helpers/filehelpers');
const router = express.Router();

router.post('/postimages', upload.array('files'), postImages)
router.get('/fetchallimages', fetchAllImages)
router.delete('/deleteimage/:fname', deleteImage)
router.post('/updatedetails', updateDetails)
module.exports = router;

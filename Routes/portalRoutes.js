const express = require('express');
const { fetchAllImages } = require('../Controllers/fetch');
const { postImages } = require('../Controllers/post');
const { upload } = require('../helpers/filehelpers');
const router = express.Router();

router.post('/postimages', upload.array('files'), postImages)
router.get('/fetchallimages', fetchAllImages)
module.exports = router;

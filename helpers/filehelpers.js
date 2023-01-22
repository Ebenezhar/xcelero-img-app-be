const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, callbacks) => {
        callbacks(null, 'uploads')
    },
    filename: (req, file, callbacks) => {
        callbacks(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })
module.exports = { upload }
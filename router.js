const { Router } = require('express');

const SaveImage = require('./controllers/saveImage');

const router = Router();

router.post('/image', SaveImage.save);

module.exports = router;

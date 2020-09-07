const { Router } = require('express');
const router = Router();

const { sendText } = require('../controller/helloWord');

// TODO: Controller

router.post('/api/hellow', sendText);

module.exports = router;

const { Router } = require('express');
const router = Router();

// TODO: Controller

router.post('/api/hellow', (req, res) => {
  const body = req.body;

  res.status(400).json({
    ok: true,
    data: body,
  });
});

module.exports = router;

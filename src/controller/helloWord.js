const sendText = (req, res) => {
  const { body } = req;

  res.status(400).json({
    ok: true,
    data: body,
  });
};

module.exports = {
  sendText,
};

const sendText = (req, res) => {
  const { body } = req;
  if (body.text) {
    res.status(200).json({
      ok: true,
      data: body,
    });
  } else {
    res.status(400).json({
      msg: 'Debe enviar algun texto',
    });
  }
};

module.exports = {
  sendText,
};

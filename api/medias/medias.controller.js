const mediaController = {
  browseFile: (req, res) => {
    const body = req.body;
    console.log(req.file.filename);
    console.log(body);
    return res.json({
      status: "success",
      message: `http://${process.env.APP_HOST}:${process.env.APP_PORT}/media/${req.file.filename}`,
    });
  },
};

module.exports = mediaController;

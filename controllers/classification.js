const Classification = require("../models/Classification");

exports.index = async (req, res) => {
  try {
    const classifications = await Classification.getAll();
    res.render("classifications", { classifications });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching classifications");
  }
};

exports.create = async (req, res) => {
  try {
    const classification = await Classification.create(req.body.name);
    res.redirect("/classifications");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating classification");
  }
};

// GET detail view
exports.inventory_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Inventory detail: " + req.params.id);
};

// Handle inventory error
exports.inventory_error = function (err, req, res, next) {
  if (err.kind === "not_found") {
    res.status(404).send({
      message: `Not found Inventory with id ${req.params.id}.`,
    });
  } else {
    res.status(500).send({
      message: "Error retrieving Inventory with id " + req.params.id,
    });
  }
};

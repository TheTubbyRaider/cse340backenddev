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
exports.management = (req, res) => {
  res.render('inventory/management', {
    title: 'Inventory Management'
  });
}
exports.addClassification = (req, res) => {
  res.render('inventory/add-classification', { 
    title: 'Add Classification'
  });
}

exports.createClassification = async (req, res) => {
  const classification = await Inventory.createClassification(req.body);
  
  if(classification) {
    // rebuild navbar
    res.redirect('/inventory/management');
  } else {
    res.render('inventory/add-classification', {
      errors: ['Error creating classification']
    });
  }
}

exports.addInventory = (req, res) => {
  res.render('inventory/add', {
    title: 'Add Inventory',
    classifications: utils.buildClassifications() 
  });
}

exports.createInventory = async (req, res) => {
  const inventory = await Inventory.createInventory(req.body);
  
  if(inventory) {
    res.redirect('/inventory/management');
  } else {
    res.render('inventory/add', {
      errors: ['Error creating inventory']
    });
  }
}
const Inventory = require('../models/inventory');

exports.management = (req, res) => {
  res.render('inventory/management');
}

exports.addClassification = (req, res) => {
  res.render('inventory/add-classification'); 
}

exports.createClassification = async (req, res) => {
  const result = await Inventory.createClassification(req.body);
  
  if(result.success) {
    res.redirect('/inventory/management');
  } else {
    res.render('inventory/add-classification', {
      errors: result.errors
    });
  }
}

// Inventory controller functions

exports.addInventory = (req, res) => {
  res.render('inventory/add');
} 

exports.createInventory = async (req, res) => {
  // Handle inventory insert
}

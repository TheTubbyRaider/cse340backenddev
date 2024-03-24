router.get("/inventory/:id", async (req, res) => {
  try {
    const inventory = await Inventory.findById(req.params.id);
    res.render("inventory/detail", {
      inventory: inventory,
    });
  } catch (err) {
    console.error(err);
    res.redirect("/");
  }
});
router.get('/management', inventoryController.management);

router.get('/add-classification', inventoryController.addClassification);

router.post('/add-classification', 
  inventoryValidation.validateClassification,
  inventoryController.createClassification);

  router.get('/add', inventoryController.addInventory);

router.post('/add',
  inventoryValidation.validateInventory,
  inventoryController.createInventory);  

const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventory');
const inventoryValidation = require('../middleware/inventoryValidation');

// Management view route
router.get('/management', inventoryController.management);

// Add classification routes
router.get('/add-classification', inventoryController.addClassification); 

router.post('/add-classification',
  inventoryValidation.validateClassification, 
  inventoryController.createClassification);

// Add inventory routes  
router.get('/add', inventoryController.addInventory);

router.post('/add', 
  inventoryValidation.validateInventory,
  inventoryController.createInventory);

module.exports = router;

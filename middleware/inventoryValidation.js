exports.validateClassification = (req, res, next) => {
    // validate data
    
    const errors = [];
    
    if (errors.length > 0) {
      res.render('inventory/add-classification', {
        errors: errors
      });
    } else {
      next(); 
    }
  }
exports.account = (req, res) => {

    if(req.user.accountType === 'Client') {
      res.render('account/management', {
        firstName: req.user.firstName,
        accountType: 'Client'
      });
    } else {
      res.render('account/management', {
        firstName: req.user.firstName,
        accountType: req.user.accountType,
        inventoryLink: true
      });
    }
  
  }
  
exports.updateAccount = (req, res) => {
  if (req.user) {
    res.render("account/update", {
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
    });
  } else {
    res.redirect("/login");
  }
};

exports.updateAccountInfo = (req, res) => {
  if (req.user) {
    // Update user account info in database
    req.user.firstName = req.body.firstName;
    req.user.lastName = req.body.lastName;
    req.user.email = req.body.email;
    req.user.save();

    res.redirect("/account");
  } else {
    res.redirect("/login");
  }
};

exports.changePassword = (req, res) => {
  if (req.user) {
    // Validate current password
    if (req.user.validatePassword(req.body.currentPassword)) {
      // Update password in database
      req.user.password = req.body.newPassword;
      req.user.save();

      res.redirect("/account");
    } else {
      res.render("account/update", {
        error: "Current password is invalid",
      });
    }
  } else {
    res.redirect("/login");
  }
};
const Account = require("../models/account");

exports.updateAccount = async (req, res) => {
  const { firstName, lastName, email } = req.body;

  // Validate input
  const result = await Account.updateAccount(req.user.id, {
    firstName,
    lastName,
    email,
  });

  if (result.success) {
    req.flash("success_msg", "Account updated successfully!");
  } else {
    req.flash("error_msg", result.message);
  }

  res.redirect("/account");
};

exports.changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  // Validate input
  const result = await Account.changePassword(
    req.user.id,
    currentPassword,
    newPassword
  );

  if (result.success) {
    req.flash("success_msg", "Password updated successfully!");
  } else {
    req.flash("error_msg", result.message);
  }

  res.redirect("/account");
};
exports.logout = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};

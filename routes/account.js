router.get("/update", requireAuth, accountController.getUpdateAccount);

router.post("/update", requireAuth, accountController.postUpdateAccountInfo);

router.post(
  "/change-password",
  requireAuth,
  accountController.postChangePassword
);
router.get("/logout", requireAuth, accountController.logout);

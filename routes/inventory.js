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

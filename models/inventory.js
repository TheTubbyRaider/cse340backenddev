async function getById(id) {
  return await Inventory.findById(id);
}

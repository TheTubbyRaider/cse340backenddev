async function getById(id) {
  return await Inventory.findById(id);
}

async function createClassification(data) {
  const classification = await Classification.create(data);
  return classification;
}

async function createInventory(data) {

  const newInventory = new Inventory(data);
  await newInventory.save();
}

const db = require('../config/database');

async function createClassification(data) {
  let query = `
    INSERT INTO classifications (name)
    VALUES (?);
  `;

  let values = [
    data.name
  ];

  try {
    await db.execute(query, values);
    return { success: true };
  } catch (error) {
    return { success: false, errors: [error.message] };
  }

}

async function createInventory(data) {
  // Inventory insert query 
}

module.exports = {
  createClassification,
  createInventory
}

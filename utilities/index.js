function buildInventoryDetailHTML(inventoryItem) {
  return `
    <div class="inventory-detail">
      <h2>${inventoryItem.name}</h2>
      <p>${inventoryItem.description}</p>
      <p>Price: $${inventoryItem.price}</p>
      <p>In Stock: ${inventoryItem.inStock}</p>
    </div>
  `;
}

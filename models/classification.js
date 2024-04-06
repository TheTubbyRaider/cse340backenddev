const db = require("../config/database");

class Classification {
  static async create(name) {
    const [row] = await db.execute(
      "INSERT INTO classifications (name) VALUES (?)",
      [name]
    );
    return row;
  }

  static async update(id, name) {
    const [result] = await db.execute(
      "UPDATE classifications SET name = ? WHERE id = ?",
      [name, id]
    );
    return result.affectedRows > 0;
  }

  static async delete(id) {
    const [result] = await db.execute(
      "DELETE FROM classifications WHERE id = ?",
      [id]
    );
    return result.affectedRows > 0;
  }

  static async getAll() {
    const [rows] = await db.execute("SELECT * FROM classifications");
    return rows;
  }
}

module.exports = Classification;

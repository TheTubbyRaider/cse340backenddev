const db = require("../config/database");

module.exports = {
  updateAccount: async (id, data) => {
    let query = `
      UPDATE accounts 
      SET first_name = ?, last_name = ?, email = ?
      WHERE id = ?
    `;

    let values = [data.firstName, data.lastName, data.email, id];

    try {
      await db.execute(query, values);
      return { success: true };
    } catch (err) {
      return { success: false, message: "Error updating account" };
    }
  },

  changePassword: async (id, currentPassword, newPassword) => {
    // 1. Verify current password
    const user = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    if (!user || !bcrypt.compareSync(currentPassword, user.password)) {
      return { success: false, message: "Invalid current password" };
    }

    // 2. Hash new password
    const hashedPassword = bcrypt.hashSync(newPassword, 10);

    // 3. Update password in DB
    await db.query("UPDATE users SET password = ? WHERE id = ?", [
      hashedPassword,
      id,
    ]);
    return { success: true };
  },
};

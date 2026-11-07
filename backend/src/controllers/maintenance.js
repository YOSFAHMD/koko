const db = require('../config/db');

// تسجيل صيانة
exports.logMaintenance = async (req, res) => {
    const { equipment_id, description, date } = req.body;
    try {
        const result = await db.query('INSERT INTO maintenance (equipment_id, description, date) VALUES ($1, $2, $3) RETURNING *', [equipment_id, description, date]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// الحصول على سجلات الصيانة
exports.getAllMaintenanceRecords = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM maintenance');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

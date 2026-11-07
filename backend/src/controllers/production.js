const db = require('../config/db');

// إضافة قراءة جديدة
exports.addProductionReading = async (req, res) => {
    const { equipment_id, reading, date } = req.body;
    try {
        const result = await db.query('INSERT INTO production_readings (equipment_id, reading, date) VALUES ($1, $2, $3) RETURNING *', [equipment_id, reading, date]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// الحصول على جميع القراءات
exports.getAllProductionReadings = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM production_readings');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

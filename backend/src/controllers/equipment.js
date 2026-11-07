const db = require('../config/db'); // إعداد قاعدة البيانات

// إضافة معدات جديدة
exports.addEquipment = async (req, res) => {
    const { name, type } = req.body;
    try {
        const result = await db.query('INSERT INTO equipment (name, type) VALUES ($1, $2) RETURNING *', [name, type]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// الحصول على جميع المعدات
exports.getAllEquipment = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM equipment');
        res.status(200).json(result.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// تحديث معدات
exports.updateEquipment = async (req, res) => {
    const { id } = req.params;
    const { name, type } = req.body;
    try {
        const result = await db.query('UPDATE equipment SET name = $1, type = $2 WHERE id = $3 RETURNING *', [name, type, id]);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// حذف معدات
exports.deleteEquipment = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM equipment WHERE id = $1', [id]);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

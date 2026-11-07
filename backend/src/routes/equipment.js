const express = require('express');
const { addEquipment, getAllEquipment, updateEquipment, deleteEquipment } = require('../controllers/equipment');

const router = express.Router();

// مسارات المعدات
router.post('/', addEquipment); // إضافة معدات جديدة
router.get('/', getAllEquipment); // الحصول على جميع المعدات
router.put('/:id', updateEquipment); // تحديث معدات
router.delete('/:id', deleteEquipment); // حذف معدات

module.exports = router;
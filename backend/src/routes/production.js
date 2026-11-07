const express = require('express');
const { addProductionReading, getAllProductionReadings } = require('../controllers/production');

const router = express.Router();

// مسارات قراءات الإنتاج
router.post('/', addProductionReading); // إضافة قراءة جديدة
router.get('/', getAllProductionReadings); // الحصول على جميع القراءات

module.exports = router;
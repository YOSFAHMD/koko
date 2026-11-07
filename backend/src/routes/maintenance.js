const express = require('express');
const { logMaintenance, getAllMaintenanceRecords } = require('../controllers/maintenance');

const router = express.Router();

// مسارات الصيانة
router.post('/', logMaintenance); // تسجيل صيانة
router.get('/', getAllMaintenanceRecords); // الحصول على سجلات الصيانة

module.exports = router;
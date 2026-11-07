const express = require('express');
const { createUser, authenticateUser } = require('../controllers/user');

const router = express.Router();

// مسارات المستخدمين
router.post('/', createUser); // إنشاء مستخدم
router.post('/login', authenticateUser); // تسجيل الدخول

module.exports = router;
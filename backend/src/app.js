const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg'); // كما يمكن استخدام MySQL
const equipmentRoutes = require('./routes/equipment');
const productionRoutes = require('./routes/production');
const maintenanceRoutes = require('./routes/maintenance');
const userRoutes = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 5000;

// إعداد المحلل
app.use(bodyParser.json());

// إعداد قواعد البيانات
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

// إضافة الطرق
app.use('/api/equipment', equipmentRoutes);
app.use('/api/production', productionRoutes);
app.use('/api/maintenance', maintenanceRoutes);
app.use('/api/user', userRoutes);

// خطأ 404
app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});

// تشغيل التطبيق
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

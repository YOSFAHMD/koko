import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">لوحة التحكم</Link></li>
                <li><Link to="/equipment">المعدات</Link></li>
                <li><Link to="/readings">إدخال القراءات</Link></li>
                <li><Link to="/maintenance">إدارة الأعطال والصيانة</Link></li>
                <li><Link to="/reports">التقارير</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
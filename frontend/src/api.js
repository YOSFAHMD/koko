const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchEquipment = async () => {
    const response = await fetch(`${API_BASE_URL}/equipment`);
    return response.json();
};

// إضافة المزيد من الطلبات هنا حسب الحاجة

import { https } from "./config"
export const userServ = {
    login: (login) => {
        return https.post('/api/QuanLyNguoiDung/DangNhap', login)

    },

    register: (userInfo) => {
        return https.post('/api/QuanLyNguoiDung/DangKy', userInfo);
    }

};






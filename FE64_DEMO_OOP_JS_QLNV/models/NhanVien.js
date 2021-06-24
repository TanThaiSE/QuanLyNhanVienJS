class NhanVien {
    constructor(maNv, tenNv, chucVu, luongCb, gioLamViec) {
        this.maNv = maNv;
        this.tenNv = tenNv;
        this.chucVu = chucVu;
        this.luongCb = luongCb;
        this.gioLamViec = gioLamViec;
        this.tongLuong = () => {
            return this.luongCb * this.gioLamViec;
        }
        this.xepLoai = () => {
            if (this.gioLamViec >= 120) {
                return "nhân viên xuất sắc";
            }
            else if (this.gioLamViec >= 100 && this.gioLamViec < 120) {
                return "nhân viên giỏi";
            }
            else if (this.gioLamViec >= 80 && this.gioLamViec < 100) {
                return "nhân viên khá";
            }
            else if (this.gioLamViec >= 50 && this.gioLamViec < 80) {
                return "nhân viên trung bình";
            }
            else {
                return "nhân viên sắp bị đuổi việc";
            }
        }
    }
}
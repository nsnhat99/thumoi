
# Trang Web Thư Mời Sự Kiện Trường Tiểu Học

Đây là dự án trang web tĩnh (HTML, CSS, JavaScript) cho sự kiện "Đón học sinh lớp 1 - Khai mạc CLB hè" của trường Tiểu học Đông Ngạc A.

## Cách Triển Khai Lên GitHub Pages

Bạn có thể dễ dàng đưa trang web này lên mạng miễn phí bằng GitHub Pages. Hãy làm theo các bước sau:

### Yêu Cầu
- Bạn cần có một tài khoản GitHub.
- Bạn cần chuẩn bị các tệp ảnh sau:
    1.  Ảnh chân dung của cô giáo, đặt tên là `cogiao.jpg`.
    2.  Một thư mục tên là `thuvien`.
    3.  Bên trong thư mục `thuvien`, bạn cần có 6 bức ảnh, được đặt tên lần lượt là `1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`, `5.jpg`, `6.jpg`.

### Các Bước Thực Hiện

1.  **Tạo một Repository mới trên GitHub:**
    *   Đăng nhập vào GitHub.
    *   Nhấp vào dấu `+` ở góc trên bên phải và chọn `New repository`.
    *   Đặt tên cho repository của bạn (ví dụ: `thu-moi-su-kien`).
    *   Chọn `Public`.
    *   Nhấp vào `Create repository`.

2.  **Tải các tệp dự án lên:**
    *   Trong trang repository của bạn, nhấp vào `Add file` > `Upload files`.
    *   Kéo và thả tất cả các tệp và thư mục của dự án vào vùng tải lên. Cấu trúc của bạn nên trông như sau:
        ```
        /
        ├── index.html
        ├── index.css
        ├── index.js
        ├── README.md
        ├── cogiao.jpg
        └── thuvien/
            ├── 1.jpg
            ├── 2.jpg
            ├── 3.jpg
            ├── 4.jpg
            ├── 5.jpg
            └── 6.jpg
        ```
    *   Sau khi các tệp đã được tải lên, nhấp vào `Commit changes`.

3.  **Kích hoạt GitHub Pages:**
    *   Trong repository của bạn, đi tới tab `Settings`.
    *   Ở menu bên trái, chọn `Pages`.
    *   Trong phần `Build and deployment`, dưới mục `Source`, chọn `Deploy from a branch`.
    *   Dưới mục `Branch`, đảm bảo bạn đã chọn `main` và thư mục là `/(root)`.
    *   Nhấp vào `Save`.

4.  **Hoàn Tất!**
    *   GitHub sẽ bắt đầu xây dựng trang web của bạn. Quá trình này có thể mất vài phút.
    *   Sau khi hoàn tất, bạn sẽ thấy một thông báo màu xanh lá cây với đường link đến trang web của bạn. Đường link sẽ có dạng: `https://<TÊN_NGƯỜI_DÙNG>.github.io/<TÊN_REPOSITORY>/`
    *   Ví dụ: `https://johndoe.github.io/thu-moi-su-kien/`

Chúc mừng! Trang web của bạn bây giờ đã có thể truy cập công khai.

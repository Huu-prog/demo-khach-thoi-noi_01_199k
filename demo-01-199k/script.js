document.addEventListener("DOMContentLoaded", function () {
    const wishesForm = document.getElementById("wishes-form");
    const wishesList = document.getElementById("wishes-list");

    // Xử lý gửi lời chúc trực tiếp
    wishesForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameInput = document.getElementById("sender-name");
        const messageInput = document.getElementById("sender-message");

        const name = nameInput.value.trim();
        const message = messageInput.value.trim();

        if (name && message) {
            // Tạo phần tử hiển thị lời chúc mới
            const wishCard = document.createElement("div");
            wishCard.classList.add("wish-card");
            wishCard.innerHTML = `
                <h4>${escapeHtml(name)}</h4>
                <p>${escapeHtml(message)}</p>
            `;

            // Đưa lên đầu danh sách
            wishesList.prepend(wishCard);

            // Reset form và thông báo
            nameInput.value = "";
            messageInput.value = "";
            alert("Cảm ơn bạn đã gửi lời chúc yêu thương đến bé!");
        }
    });

    // Hàm chống lỗi XSS bảo mật cơ bản khi nhập dữ liệu
    function escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, function (m) { return map[m]; });
    }
});

// --- XỬ LÝ ZOOM ẢNH ALBUM ---
document.addEventListener("DOMContentLoaded", function () {
    const albumImages = document.querySelectorAll(".album-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.querySelector(".lightbox-close");

    albumImages.forEach(img => {
        img.addEventListener("click", function () {
            lightbox.classList.add("active");
            lightboxImg.src = this.src;
        });
    });

    // Đóng khi bấm nút X
    lightboxClose.addEventListener("click", function () {
        lightbox.classList.remove("active");
    });

    // Đóng khi bấm vào vùng nền tối xung quanh ảnh
    lightbox.addEventListener("click", function (e) {
        if (e.target !== lightboxImg) {
            lightbox.classList.remove("active");
        }
    });
});
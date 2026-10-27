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
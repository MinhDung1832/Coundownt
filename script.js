// Thời điểm Tết Âm lịch 2026: 00:00:00 - 17/02/2026 (giờ địa phương)
const tet2026 = new Date(2026, 1, 17, 0, 0, 0); // Tháng trong JS bắt đầu từ 0

function updateCountdown() {
    const now = new Date();
    const diff = tet2026 - now;

    if (diff <= 0) {
        document.getElementById("message").innerText =
            "Chúc mừng năm mới! Chúc mừng Tết Âm lịch 2026 🎉";

        document.getElementById("days").innerText = 0;
        document.getElementById("hours").innerText = 0;
        document.getElementById("minutes").innerText = 0;
        document.getElementById("seconds").innerText = 0;
        return;
    }

    const totalSeconds = Math.floor(diff / 1000);

    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
}

// Cập nhật mỗi giây
setInterval(updateCountdown, 1000);
updateCountdown();

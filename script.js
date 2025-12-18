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

    // Tính toán số giây làm việc còn lại (bỏ qua thứ 7 và chủ nhật)
    const totalSeconds = Math.floor(calculateWorkingSeconds(now, tet2026));

    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
}

// Hàm tính tổng số giây (bỏ qua Thứ 7 và Chủ Nhật)
function calculateWorkingSeconds(start, end) {
    if (start >= end) return 0;

    let totalSeconds = 0;
    let current = new Date(start);

    while (current < end) {
        // Tìm thời điểm 00:00:00 của ngày hôm sau
        let nextMidnight = new Date(current);
        nextMidnight.setHours(24, 0, 0, 0);

        // Điểm kết thúc của đoạn thời gian này (là nửa đêm hoặc là thời điểm đích)
        let segmentEnd = (nextMidnight < end) ? nextMidnight : end;

        // Kiểm tra ngày hiện tại có phải là ngày làm việc không (0: CN, 6: T7)
        let day = current.getDay();
        if (day !== 0 && day !== 6) {
            totalSeconds += (segmentEnd - current) / 1000;
        }

        // Chuyển sang ngày tiếp theo
        current = nextMidnight;
    }

    return totalSeconds;
}

function updateChristmasBanner() {
    const banner = document.getElementById("christmas-banner");
    const textEl = document.getElementById("christmas-text");
    if (!banner || !textEl) return;

    const now = new Date();
    const currentYear = now.getFullYear();
    let christmas = new Date(currentYear, 11, 25, 0, 0, 0);
    if (now > christmas) {
        christmas = new Date(currentYear + 1, 11, 25, 0, 0, 0);
    }
    const ms = christmas - now;
    const daysLeft = Math.floor(ms / (1000 * 60 * 60 * 24));

    if (daysLeft <= 14) {
        banner.classList.add("visible");
        if (daysLeft > 0) {
            textEl.innerText = `Giáng Sinh sắp đến: còn ${daysLeft} ngày!`;
        } else {
            textEl.innerText = "Giáng Sinh đã đến!";
        }
    } else {
        banner.classList.remove("visible");
        textEl.innerText = "";
    }
}

function initSnow() {
    const container = document.getElementById("snow-container");
    if (!container || container.childElementCount > 0) return;

    const count = 80;
    for (let i = 0; i < count; i++) {
        const flake = document.createElement("div");
        flake.className = "snowflake";
        const size = Math.round(3 + Math.random() * 6);
        const left = Math.round(Math.random() * 100);
        const fall = (8 + Math.random() * 10).toFixed(2);
        const drift = (3 + Math.random() * 4).toFixed(2);
        const delay = (Math.random() * 8).toFixed(2);
        flake.style.width = size + "px";
        flake.style.height = size + "px";
        flake.style.left = left + "%";
        flake.style.opacity = (0.4 + Math.random() * 0.5).toFixed(2);
        flake.style.animationDuration = `${fall}s, ${drift}s`;
        flake.style.animationDelay = `${delay}s, 0s`;
        container.appendChild(flake);
    }
}

function initSnow() {
    const container = document.getElementById("snow-container");
    if (!container || container.childElementCount > 0) return;
    const count = 80;
    for (let i = 0; i < count; i++) {
        const flake = document.createElement("div");
        flake.className = "snowflake";
        const size = Math.round(3 + Math.random() * 6);
        const left = Math.round(Math.random() * 100);
        const fall = (8 + Math.random() * 10).toFixed(2);
        const drift = (3 + Math.random() * 4).toFixed(2);
        const delay = (Math.random() * 8).toFixed(2);
        flake.style.width = size + "px";
        flake.style.height = size + "px";
        flake.style.left = left + "%";
        flake.style.opacity = (0.4 + Math.random() * 0.5).toFixed(2);
        flake.style.animationDuration = `${fall}s, ${drift}s`;
        flake.style.animationDelay = `${delay}s, 0s`;
        container.appendChild(flake);
    }
}

function initFireworks() {
    const container = document.getElementById("fireworks-container");
    if (!container) return;
    if (window._fwTimer) return;

    function spawnFirework() {
        const x = Math.round(Math.random() * 90) + "%";
        const y = Math.round(Math.random() * 60) + "%";
        const sparks = 14;
        const firework = document.createElement("div");
        firework.className = "firework";
        firework.style.left = x;
        firework.style.top = y;

        for (let i = 0; i < sparks; i++) {
            const s = document.createElement("span");
            s.className = "spark";
            const angle = (360 / sparks) * i + (Math.random() * 10 - 5);
            const dist = 20 + Math.random() * 45;
            const colors = ["#ffd857", "#ff6b6b", "#9b5de5", "#00f5d4", "#f15bb5", "#f71735"];
            s.style.setProperty("--angle", angle + "deg");
            s.style.setProperty("--distance", dist + "px");
            s.style.setProperty("--color", colors[Math.floor(Math.random() * colors.length)]);
            firework.appendChild(s);
        }

        container.appendChild(firework);
        setTimeout(() => { firework.remove(); }, 1500);
    }

    window._fwTimer = setInterval(spawnFirework, 1800);
}

function updateSeasonalEffects() {
    const now = new Date();
    const year = now.getFullYear();
    const afterChristmasStart = new Date(year, 11, 26, 0, 0, 0);
    const snowEl = document.getElementById("snow-container");
    const fwEl = document.getElementById("fireworks-container");

    if (!snowEl || !fwEl) return;

    if (now >= afterChristmasStart) {
        if (snowEl) snowEl.style.display = "none";
        if (fwEl) fwEl.style.display = "block";
        initFireworks();
    } else {
        if (fwEl) {
            fwEl.style.display = "none";
            if (window._fwTimer) { clearInterval(window._fwTimer); window._fwTimer = null; }
            while (fwEl.firstChild) fwEl.removeChild(fwEl.firstChild);
        }
        if (snowEl) snowEl.style.display = "block";
        initSnow();
    }
}

setInterval(function() { updateCountdown(); updateChristmasBanner(); updateSeasonalEffects(); }, 1000);
updateCountdown();
updateChristmasBanner();
updateSeasonalEffects();
initSnow();

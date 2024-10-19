const eventDate = new Date('2024-10-20T19:00:00');

// Cập nhật countdown mỗi giây
const countdownInterval = setInterval(() => {
    const now = new Date();
    const timeLeft = eventDate - now;

    // Tính toán các thông số
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Hiển thị kết quả
    document.getElementById('countdown').innerText = `
        ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây
    `;

    // Hiển thị kết quả
    document.querySelector('#countdown-container h1').innerText = `Đếm ngược đến ngày kỷ niệm ${eventDate.getDate()}/${eventDate.getMonth() + 1} sắp tới...!`;

    // Nếu thời gian hết
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerText = 'Chúc mừng ngày kỷ niệm!';
    }
}, 1000);

const anniversaryDate = new Date('2023-06-22T00:00:00');

// Hàm cập nhật kết quả
const updateTime = setInterval(() => {
    const now = new Date();
    // Tính toán độ chênh lệch thời gian
    const timeDiffInMillis = now - anniversaryDate;

    // Chuyển đổi mili giây thành từng đơn vị thời gian
    const seconds = Math.floor(timeDiffInMillis / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(seconds / (3600 * 24));

    // Tính số năm và tháng
    const years = Math.floor(days / 365);
    const months = Math.floor((days % 365) / 30);
    const weeks = Math.floor((days % 365) % 30 / 7)
    const remainingDays = Math.floor(days % 365 % 30 % 7);

    // Tính giờ, phút, giây còn lại
    const remainingHours = now.getHours();
    const remainingMinutes = now.getMinutes();
    const remainingSeconds = now.getSeconds();

    // Hiển thị kết quả
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        ${years} năm, ${months} tháng, ${weeks} tuần, ${remainingDays} ngày, 
        ${remainingHours} giờ, ${remainingMinutes} phút, ${remainingSeconds} giây
    `;
}, 1000)


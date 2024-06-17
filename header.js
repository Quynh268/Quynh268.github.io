let lastScrollTop = 0;
const menu = document.getElementById('menu');

window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Khi cuộn xuống, ẩn menu
        menu.style.top = '-200px'; // Điều chỉnh giá trị này tùy thuộc vào chiều cao menu của bạn
    } else {
        // Khi cuộn lên, hiển thị menu
        menu.style.top = '0';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Đặt lại vị trí cuộn cuối cùng
});

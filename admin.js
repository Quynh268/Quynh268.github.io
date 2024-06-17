///////////////Chart///////////////
var canvas = document.getElementById('myChart');
var ctx = canvas.getContext('2d');

var dpr = window.devicePixelRatio - 0.5;
var rect = canvas.getBoundingClientRect();
canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;
ctx.scale(dpr, dpr);

ctx.font = '14px Arial';

var data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    values: [10, 30, 40, 70, 60, 40, 45, 60, 50, 30, 76, 85]
};

//Vẽ biểu đồ
var maxValue = 90;
var stepSize = 10;
var yScale = (canvas.height - 20) / maxValue;
var xScale = canvas.width / (data.labels.length + 1);

//Vẽ đường
ctx.beginPath();
ctx.moveTo(xScale, canvas.height - 20 - data.values[0] * yScale);
for (var i = 1; i < data.values.length; i++) {
    ctx.lineTo((i + 1) * xScale, canvas.height - 20 - data.values[i] * yScale);
}
ctx.stroke();

//Màu biểu đồ
ctx.lineTo((data.labels.length) * xScale, canvas.height - 20);
ctx.lineTo(xScale, canvas.height - 20);
ctx.closePath();
ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
ctx.fill();

//Nhãn và đường lưới
ctx.fillStyle = '#000';
for (var i = 0; i <= maxValue; i += stepSize) {
    var y = canvas.height - 20 - i * yScale;
    ctx.fillText(i, 0, y);
    ctx.beginPath();
    ctx.moveTo(xScale, y);
    ctx.lineTo(canvas.width - xScale, y);
    ctx.strokeStyle = '#ddd';
    ctx.stroke();
}

//Nhãn cho trục x
ctx.textAlign = 'center';
for (var i = 0; i < data.labels.length; i++) {
    var x = (i + 1) * xScale;
    ctx.fillText(data.labels[i], x, canvas.height - 5);
}

////////////////Chart Thống kê////////////////////
var canvas = document.getElementById('myChart2');
var ctx = canvas.getContext('2d');

canvas.width = 1050;
canvas.height = 200;

ctx.font = '14px Arial';

var data = [
{ month: '1', profit: 40, payback: 60, cost: 20 },
{ month: '2', profit: 25, payback: 35, cost: 45 },
{ month: '3', profit: 35, payback: 50, cost: 35 },
{ month: '4', profit: 78, payback: 89, cost: 45 },
{ month: '5', profit: 25, payback: 35, cost: 45 },
{ month: '6', profit: 30, payback: 53, cost: 59 },
{ month: '7', profit: 88, payback: 35, cost: 45 },
{ month: '8', profit: 32, payback: 18, cost: 63 },
{ month: '9', profit: 20, payback: 72, cost: 68 },
{ month: '10', profit: 25, payback: 45, cost: 45 },
{ month: '11', profit: 30, payback: 40, cost: 50 },
{ month: '12', profit: 40, payback: 20, cost: 50 }
];

// Cài đặt cho biểu đồ
var barWidth = 18;
var barSpacing = 6;
var sectionSpacing = 15;
var baseY = canvas.height - 30; // Điểm bắt đầu từ dưới cùng của canvas

// Vẽ đường lưới và nhãn phần trăm
for (var i = 0; i <= maxValue; i += 10) {
var y = baseY - (i / maxValue) * (canvas.height - 40);
ctx.beginPath();
ctx.moveTo(30, y);
ctx.lineTo(canvas.width - 30, y);
ctx.strokeStyle = '#ddd';
ctx.stroke();

// Vẽ nhãn phần trăm
ctx.fillStyle = '#000';
ctx.textAlign = 'right';
ctx.fillText(i + '%', 35, y + 0);
}

// Vẽ biểu đồ
data.forEach(function(item, index) {
var sectionX = 50 + index * (3 * barWidth + 2 * barSpacing + sectionSpacing);

// Vẽ cột Lợi nhuận
ctx.fillStyle = '#F9C200'; // Màu sắc cho Lợi nhuận
var profitHeight = item.profit * 3; // Cao 3 lần giá trị để dễ nhìn
ctx.fillRect(sectionX, baseY - profitHeight, barWidth, profitHeight);

// Vẽ cột Hoàn vốn
ctx.fillStyle = '#6176FE'; // Màu sắc cho Hoàn vốn
var paybackHeight = item.payback * 3;
ctx.fillRect(sectionX + barWidth + barSpacing, baseY - paybackHeight, barWidth, paybackHeight);

// Vẽ cột Chi phí
ctx.fillStyle = '#09AD95'; // Màu sắc cho Chi phí
var costHeight = item.cost * 3;
ctx.fillRect(sectionX + 2 * (barWidth + barSpacing), baseY - costHeight, barWidth, costHeight);

// Vẽ nhãn cho tháng
ctx.fillStyle = '#000';
ctx.textAlign = 'center';
ctx.fillText(item.month, sectionX + barWidth * 1.5 + barSpacing, baseY + 20);
});
//////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    var today = new Date();
    var date = ('0' + today.getDate()).slice(-2) + '/' +
            ('0' + (today.getMonth() + 1)).slice(-2) + '/' +
            today.getFullYear();

    var timeElements = document.querySelectorAll('.row3-time');
    timeElements.forEach(function(element) {
        element.textContent = date;
    });
    ////////////////////////////////////
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    var date = ('0' + yesterday.getDate()).slice(-2) + '/' +
            ('0' + (yesterday.getMonth() + 1)).slice(-2) + '/' + yesterday.getFullYear();
    var yesElements = document.querySelectorAll('.row3-yes');
    yesElements.forEach(function(element) {
        element.textContent = date;
    });
});
//////////////////////////////Welcome/////////////////////////////////
document.addEventListener('DOMContentLoaded', (event) => {
    // Tạo thông báo
    let alertBox = document.createElement('div');
    alertBox.textContent = 'Đăng nhập thành công với tài khoản Admin. Chào mừng bạn quay trở lại!';
    alertBox.style.position = 'fixed';
    alertBox.style.left = '50%';
    alertBox.style.top = '20px';
    alertBox.style.transform = 'translateX(-50%)';
    alertBox.style.backgroundColor = '#4CAF50';
    alertBox.style.color = 'white';
    alertBox.style.padding = '10px';
    alertBox.style.borderRadius = '5px';
    alertBox.style.zIndex = '1000';
    alertBox.style.textAlign = 'center';
    alertBox.style.zIndex = '9999';
    document.body.appendChild(alertBox);

    // Ẩn thông báo sau 1,5 giây
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 1500);
});
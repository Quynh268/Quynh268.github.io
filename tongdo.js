function displayCartItems() {
    var t = localStorage.getItem('cartItems'); // Lấy dữ liệu từ localStorage
    $('#xacnhan').empty(); // Xóa nội dung cũ trước khi thêm mới
    var total = 0; // Khởi tạo biến total

    // Kiểm tra xem dữ liệu có tồn tại không
    if (t) {
        var cartItemsArray = JSON.parse(t); // Chuyển đổi chuỗi JSON thành mảng
        cartItemsArray.forEach(function (item, index) {
            // Chuyển đổi giá trị item.gia và các giá trị cộng thêm thành số nguyên
            let itemgia = parseInt(item.gia, 10);

            if (item.size === "size m") {
                itemgia += 5000;
            }
            if (item.size === "size l") {
                itemgia += 10000;
            }
            if (item.topping === "Thạch sương sáo") {
                itemgia += 10000;
            }
            if (item.topping === "kem phô mai") {
                itemgia += 15000;
            }
            if (item.topping === "Trân châu trắng") {
                itemgia += 10000;
            }
            if (item.topping === "Trân châu đường đen") {
                itemgia += 10000;
            }
            if (item.topping === "Thạch dứa") {
                itemgia += 10000;
            }
            if (item.topping === "Thạch dừa") {
                itemgia += 10000;
            }

            // Cộng giá trị vào tổng
            total += itemgia*item.soluong;

            let itemduong = item.duong || "Không áp dụng";
            let itemda = item.da || "Không áp dụng";
            let itemsize = item.size || "Không áp dụng";
            let itemtopping = item.topping || "Không áp dụng";

            $('#xacnhan').append(`
                <div style=" margin-top: 5px;">
                <li class="list-group-item d-flex justify-content-between align-items-center modal-body_ text_b" style="font-family: 'Times New Roman', Times, serif;">
                    <img src="${item.img}" class="img-thumbnail" style="width: 50px; height: 50px;">
                    ${item.name} - ${(itemgia*item.soluong).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ -x${item.soluong}
                </li>
                <li class="list-group-item justify-content-between align-items-center modal-body_ text_b">
                    <ul style="font-style:italic; font-size:10px;">
                        <li>Đường: ${itemduong}</li>
                        <li>Đá: ${itemda}</li>
                        <li>Size: ${itemsize}</li>
                        <li>Topping: ${itemtopping}</li>
                    </ul>
                </li>
                </div>
            `);
        });

        // Hiển thị tổng giá trị
        $('#xacnhan').append(`
             <div style=" margin-top: 5px;">
            <li class="list-group-item d-flex justify-content-between align-items-center modal-body_ text_b" style="font-family: 'Times New Roman', Times, serif;">
                <strong>Tổng cộng:</strong> ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ 
            </li>
        `);
    } else {
        console.log('Không có dữ liệu được lưu trong localStorage cho cartItems');
    }
}
function removeCartItem(index) {
    var t = localStorage.getItem('cartItems');
    if (t) {
        var cartItemsArray = JSON.parse(t);
        cartItemsArray.splice(index, 1); // Xóa một mục tại vị trí index
        localStorage.setItem('cartItems', JSON.stringify(cartItemsArray)); // Cập nhật localStorage
        displayCartItems(); // Cập nhật lại hiển thị giỏ hàng
    }
}
displayCartItems();

window.addEventListener('storage', function (event) {
    if (event.key === 'cartItems') {
        displayCartItems();
    }
});
document.getElementById('update_cart').addEventListener('click', function() {
    displayCartItems();
});
document.addEventListener('DOMContentLoaded', function() {
    // Xóa tất cả dữ liệu localStorage khi nhấn nút "Xóa dữ liệu"
    document.getElementById('detele_data').addEventListener('click', function() {
        localStorage.clear();
        console.log("Đã xóa tất cả dữ liệu trong localStorage");
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Lắng nghe sự kiện hide.bs.modal
    $('#hoanthanh').on('hide.bs.modal', function (event) {
        // Kiểm tra xem sự kiện được gây ra bởi nút đóng (Close) hay không
        if (!$(event.relatedTarget).hasClass('btn-secondary')) {
            event.preventDefault(); // Ngăn chặn việc ẩn modal
        }
    });
});


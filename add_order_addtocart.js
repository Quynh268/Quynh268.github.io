document.addEventListener('DOMContentLoaded', function () {
    var orderButtons = document.querySelectorAll('.lienhe');
    var modalTitle = document.querySelector('.modal-title_');
    var productName = document.querySelector('#name_product');
    var productPrice = document.querySelector('#gia_product');
    var productImg = document.querySelector('#hinh_anh_product');

    orderButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var name = this.parentNode.querySelector('.name').textContent;
            var price = this.parentNode.querySelector('.gia').textContent;
            //var price= this.parentNode.querySelector('.gia').textContent.trim();
            var imgSrc = this.parentNode.parentNode.querySelector('.sanpham img').getAttribute('src');

            modalTitle.textContent = "Món bạn lựa chọn: " + name;
            productName.textContent = "Sản phẩm: " + name;
            productPrice.textContent = price;
            productImg.src = imgSrc;
            
            console.log(price);
        });
    });
    
});
//  
//document.addEventListener('',funtion())// khởi tạo sự kiện 
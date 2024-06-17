let cartCount = 0; // khai báo biến đếm
let cartItems = []; // khai báo mảng , danh sách đồ của giỏ hàng

// cập nhật số lượng phần tử trong giỏ hàng 
function updateCartCounter() {
    $('#cart-number').text(cartCount);
}

// lấy giá trị trong bảng dropdow 
$('.bi-cart-plus').click(function () {
    const productName = $('#name_product').text();// lấy giá trị tên trong bảng 
    //const productPrice = ($('#gia_product'));
    //const productPrice = 
   // const productPrice = parseFloat($(this).closest('#order').find('#gia_product').text().replace(/[^0-9,]/g, '').replace(/,/g, '.'));// lấy giá trị giá 
   const productPrice = parseFloat($(this).closest('#order').find('#gia_product').text().replace(/[^\d,]/g, '').replace(/,/g, '.'));
   //const productPrice = $(this).closest('#order').find('#gia_product').text()/*.replace(/[^\d]/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.')*/;
   const productImage = $('#hinh_anh_product').attr('src');
    const productIce = $('#da').val();
    const productSugar = $('#duong').val();
    const productSize = $('#size').val();
    const productTopping = $('#topping').val();
    const productnumber = document.getElementById("soluong").value;
    cartItems.push({ name: productName, gia: productPrice, img: productImage, da: productIce, duong: productSugar, size: productSize, topping: productTopping, soluong: productnumber });
    cartCount++;
    updateCartCounter();
    renderCartItems();
    saveCartData();
    console.log(productPrice)
});

// Function to render cart items in the modal
function renderCartItems() {
    $('#cartItems').empty();
    let total = 0;
    cartItems.forEach((item, index) => {
        let itemgia = item.gia;
        if (item.size === "size m") {
            itemgia = itemgia + 5000;
        }
        if (item.size === "size l") {
            itemgia = itemgia + 10000;
        }
        if (item.topping === "Thạch sương sáo") {
            itemgia = itemgia + 10000;
        }
        if (item.topping === "kem phô mai") {
            itemgia = itemgia + 15000;
        }
        if (item.topping === "Trân châu trắng") {
            itemgia = itemgia + 10000;
        }
        if (item.topping === "Trân châu đường đen") {
            itemgia = itemgia + 10000;
        }
        if (item.topping === "Thạch dứa") {
            itemgia = itemgia + 10000;
        }
        if (item.topping === "Thạch dừa") {
            itemgia = itemgia + 10000;
        }
        let itemduong = item.duong;
        if (item.duong === undefined) {
            itemduong = "Không áp dụng";
        }
        let itemda = item.da;
        if (item.da === undefined) {
            itemda = "Không áp dụng";
        }
        let itemsize = item.size;
        if (item.size === undefined) {
            itemsize = "Không áp dụng";
        }
        let itemtopping = item.topping;
        if (item.topping === undefined) {
            itemtopping = "Không áp dụng";
        }
        if(item.soluong===''){
            item.soluong=1;
        }
        total += itemgia*item.soluong;
        $('#cartItems').append(`
            <div style=" margin-top: 5px;">
            <li class="list-group-item d-flex justify-content-between align-items-center modal-body_ text_b" style="font-family: 'Times New Roman', Times, serif;">
                <img src="${item.img}" class="img-thumbnail" style="width: 50px; height: 50px;">
                ${item.name} - ${(itemgia*item.soluong).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} -x${item.soluong}
                <button class="btn btn-danger btn-sm remove-from-cart" data-index="${index}">Remove</button>
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
        console.log(itemgia);
    });
    $('#total').text(`Total: ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ`);
}

// Function to save cart data to local storage
function saveCartData() {
    console.log("Saving cart data...");
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartCount', cartCount);
}

// Function to load cart data from local storage
// Function to load cart data from local storage
function loadCartData() {
    console.log("Loading cart data...");
    const storedCartItems = localStorage.getItem('cartItems');
    const storedCartCount = localStorage.getItem('cartCount');
    if (storedCartItems) {
        cartItems = JSON.parse(storedCartItems);
        cartCount = parseInt(storedCartCount);
    }
    updateCartCounter();
    renderCartItems();
}

// Load cart data from local storage when the page loads
$(document).ready(function () {
    loadCartData();
});

// Function to search products and display them
function searchProducts(query) {
    let products = $('.frame_5_1');
    products.hide();
    products.each(function () {
        let productName = $(this).find('.name').text().toLowerCase();
        if (productName.includes(query.toLowerCase())) {
            $(this).show();
        }
    });
}

// Search input keyup event
$('#search_inp').keyup(function () {
    let query = $(this).val().trim();
    searchProducts(query);
});

// Remove from cart button click event using event delegation
$(document).on('click', '.remove-from-cart', function () {
    const index = $(this).data('index');
    cartItems.splice(index, 1); // Remove the item from the cart
    cartCount--; // Decrement cart count
    updateCartCounter(); // Update the cart counter display
    renderCartItems(); // Render the cart items in the modal
    saveCartData(); // Save the cart data to local storage
});


document.getElementById('thongbao_').addEventListener('click', function() {
    $('#thongbao').modal('show');
    setTimeout(function() {
        $('#thongbao').modal('hide');
    }, 1000); // Ẩn modal sau 2 giây
});


/*let cartCount = 0;
    let cartItems = [];
    // Function to update the cart counter display
    function updateCartCounter() {
        $('#cart-number').text(cartCount); // Update the cart count display
    }

    // Function to render cart items in the modal
    function renderCartItems() {
        $('#cartItems').empty();
        let total = 0; // Initialize total amount
        cartItems.forEach((item, index) => {
            total += item.price; // Add the price of each item to the total amount
            $('#cartItems').append(`
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <img src="${item.image}" class="img-thumbnail" style="width: 50px; height: 50px;">
                ${item.name} - ${item.price.toFixed(3)}đ
                <button class="btn btn-danger btn-sm remove-from-cart" data-index="${index}">Remove</button>
                <div>Ghi chú</div>
            </li>
            
            `);
        });
        // Display total amount in an element with id 'total'
        $('#total').text(`Total: ${total.toFixed(3)} đ`);
    }

    // Function to save cart data to local storage
    function saveCartData() {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('cartCount', cartCount);
    }

    // Function to load cart data from local storage
    function loadCartData() {
        const storedCartItems = localStorage.getItem('cartItems');
        const storedCartCount = localStorage.getItem('cartCount');
        if (storedCartItems) {
            cartItems = JSON.parse(storedCartItems);
            cartCount = parseInt(storedCartCount);
        }
        updateCartCounter();
        renderCartItems();
    }

    // Load cart data from local storage when the page loads
    loadCartData();

    // Add to cart button click event
    $('.bi-cart-plus').click(function () {
        const productName = $(this).closest('.frame_5_1').find('.name').text();
        const productPrice = parseFloat($(this).closest('.frame_5_1').find('.gia').text());
        const productImage = $(this).closest('.frame_5_1').find('.sanpham img').attr('src');

        cartItems.push({ name: productName, price: productPrice, image: productImage });
        cartCount++; // Increment cart count
        updateCartCounter(); // Update the cart counter display
        renderCartItems(); // Render the cart items in the modal
        saveCartData(); // Save the cart data to local storage
    });

    // Function to search products and display them
    function searchProducts(query) {
        let products = $('.frame_5_1');
        products.hide(); // Hide all products

        // Show products whose name contains the search query
        products.each(function () {
            let productName = $(this).find('.name').text().toLowerCase();
            if (productName.includes(query.toLowerCase())) {
                $(this).show();
            }
        });
    }
    // Search input keyup event
    $('#search_inp').keyup(function () {
        let query = $(this).val().trim();
        searchProducts(query);
    });
    // Remove from cart button click event
    $(document).on('click', '.remove-from-cart', function () {
        const index = $(this).data('index');
        cartItems.splice(index, 1); // Remove the item from the cart
        cartCount--; // Decrement cart count
        updateCartCounter(); // Update the cart counter display
        renderCartItems(); // Render the cart items in the modal
        saveCartData(); // Save the cart data to local storage
    });*/
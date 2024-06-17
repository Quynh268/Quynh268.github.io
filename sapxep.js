$(document).ready(function () {
    // Lưu danh sách sản phẩm ban đầu khi trang tải
    let originalProducts = $('.frame_5').html();

    // Function to sort products by price
    function sortProductsByPrice(order) {
        let products = $('.frame_5_1');

        // Convert NodeList to array for easier manipulation
        let productsArray = Array.from(products);

        // Sort products by price
        productsArray.sort(function (a, b) {
            let priceA = parseFloat($(a).find('.gia').text().split(',')[0]); // Lấy số trước dấu phẩy của giá sản phẩm a
            let priceB = parseFloat($(b).find('.gia').text().split(',')[0]); // Lấy số trước dấu phẩy của giá sản phẩm b
            if (order === 'asc') {
                return priceA - priceB;
            } else if (order === 'desc') {
                return priceB - priceA;
            }
        });

        // Empty and append sorted products to container
        let productContainer = $('.frame_5');
        productContainer.empty();
        productsArray.forEach(function (product) {
            productContainer.append(product);
        });

        // Gắn kết lại sự kiện click cho nút "Thêm vào giỏ hàng"
        attachAddToCartEvent();
    }

    // Sự kiện click cho nút "Sắp xếp"
    $('#sortButton').click(function () {
        let selectedValue = $('#sortSelect').val();
        if (selectedValue === 'asc') {
            sortProductsByPrice('asc');
        } else if (selectedValue === 'desc') {
            sortProductsByPrice('desc');
        } else if (selectedValue === 'default') {
            // Đặt lại danh sách sản phẩm về trạng thái ban đầu nếu lựa chọn là mặc định
            $('.frame_5').html(originalProducts);
            // Gắn kết lại sự kiện click cho nút "Thêm vào giỏ hàng"
            attachAddToCartEvent();
        }
    });

    // Function to add product to cart
    function addToCart(product) {
        // Thực hiện logic thêm vào giỏ hàng ở đây
        $(document).ready(function () {
            let cartCount = 0;
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
                    </li>`);
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
            });
        });
        
        
    }

    // Function to attach click event to "Add to Cart" button
    function attachAddToCartEvent() {
        $('.frame_5').on('click', '.bi-cart-plus', function () {
            addToCart($(this).closest('.frame_5_1'));
        });
    }

    // Gắn kết sự kiện click cho nút "Thêm vào giỏ hàng" ban đầu
    attachAddToCartEvent();
});

$(document).ready(function () {
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
    $('#search_inp_product').keyup(function () {
        let query = $(this).val().trim();
        searchProducts(query);
    });
});

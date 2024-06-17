document.getElementById('search_inp').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const links = document.querySelectorAll('a');
    const resultDropdown = document.getElementById('resultDropdown');
    resultDropdown.innerHTML = '';

    // Dùng Set để đảm bảo không có kết quả trùng lặp
    const addedLinks = new Set();

    if (searchQuery) {
        links.forEach(link => {
            const linkText = link.textContent.toLowerCase();
            if (linkText.includes(searchQuery) && !addedLinks.has(linkText)) {
                addedLinks.add(linkText);
                const resultItem = document.createElement('a');
                resultItem.className = 'dropdown-item';
                resultItem.href = link.href;
                resultItem.textContent = link.textContent;
                resultDropdown.appendChild(resultItem);
            }
        });
        resultDropdown.classList.add('show');
    } else {
        resultDropdown.classList.remove('show');
    }
});
document.addEventListener('click', function(e) {
    const resultDropdown = document.getElementById('resultDropdown');
    if (!e.target.closest('.input-group') && resultDropdown.classList.contains('show')) {
        resultDropdown.classList.remove('show');
    }
});
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// signUpButton.addEventListener('click', () => {
//     container.classList.add("right-panel-active");
// });
// signInButton.addEventListener('click', () => {
//     container.classList.remove("right-panel-active");
// });
signUpButton.addEventListener('click', () => {
    if (window.innerWidth > 768) {
        container.classList.toggle("right-panel-active");
    } else {
        container.classList.add("right-panel-active");
    }
});
signInButton.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        container.classList.toggle("right-panel-active");
    } else {
        container.classList.remove("right-panel-active");
    }
});

/////////////////////////////////////////
document.getElementById('pass').addEventListener('input', function(event) {
    var pass = this.value.length;
    if (pass < 4) {
        this.style.borderColor = "red";
    } else if (pass < 8) {
        this.style.borderColor = "orange";
    } else {
        this.style.borderColor = "green";
    }
});
////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

    function handleAuth(event) {
        const emailInput = document.querySelector('.sign-in-container input[name="email"]');
        const enteredEmail = emailInput ? emailInput.value.trim().toLowerCase() : '';
        const passwordInput = document.querySelector('.sign-in-container input[name="password"]');
        const enteredPassword = passwordInput ? passwordInput.value.trim() : '';
        
        if (!enteredEmail || !enteredPassword) {
            showCustomAlert('Thông tin chưa được nhập đầy đủ!');
        } else if (enteredEmail !== "admin@gmail.com" || enteredPassword !== "archive") {
            showCustomAlert('Thông tin không đúng. Vui lòng kiểm tra lại!');
        } else {
            window.location.href = "./admin.html";
        }
    }
    const signIn = document.getElementById('myButton');
    if (signIn) {
        signIn.addEventListener('click', handleAuth);
    }

    function showCustomAlert(message) {
        var alertBox = document.createElement('div');
        alertBox.innerHTML = message;
        alertBox.className = 'custom-alert';
        document.body.appendChild(alertBox);
        // Thông báo biến mất từ từ
        setTimeout(function() {
            alertBox.classList.add('hide');
            setTimeout(function() {
                document.body.removeChild(alertBox);
            }, 500);
        }, 1000);
    }
    /////////////////////////////////
    const signUpBtn = document.querySelector('.sign-up-container button');
    if (signUpBtn) {
        signUpBtn.addEventListener('click', function() {
            const emailInput = document.querySelector('.sign-up-container input[name="email"]');
            const enteredEmail = emailInput ? emailInput.value : '';
            const passwordInput = document.querySelector('.sign-up-container input[name="password"]');
            const enteredPassword = passwordInput ? passwordInput.value : '';
            const passwordConfirm = document.querySelector('.sign-up-container input[name="confirm"]');
            const enteredPasswordConfirm = passwordConfirm ? passwordConfirm.value : '';
            if (!enteredEmail || !enteredPassword || !enteredPasswordConfirm) {
                showCustomAlert('Không được bỏ trống bất kỳ mục nào!');
            } else if (enteredEmail === "admin@gmail.com") {
                showCustomAlert('Gmail chỉ được sử dụng cho Admin ở phần đăng nhập');
            } else if (!enteredEmail.includes('@gmail.com')) {
                showCustomAlert('Định dạng Email không đúng. Vui lòng kiểm tra lại!');
            } else if (enteredPassword !== enteredPasswordConfirm) {
                showCustomAlert('Mật khẩu không khớp. Vui lòng kiểm tra lại!');
            } else {
                window.location.href = "./acc.html";
            }
        });
    }
});
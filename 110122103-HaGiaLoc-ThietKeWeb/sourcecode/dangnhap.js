function openModal()
{
    document.getElementById("login-modal").style.display="block";
}

function closeModal() {
    document.getElementById("login-modal").style.display="none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("login-modal")) {
        closeModal();
    }
}

	//LOGIN
// Lưu thông tin người dùng khi đăng ký
function registerUser(username, password) {
    localStorage.setItem(username, password);
}

// Kiểm tra tài khoản người dùng khi đăng nhập
function checkCredentials(username, password) {
    return localStorage.getItem(username) === password;
}

// Hiển thị tên người dùng và ẩn form đăng nhập
function showUsername(username) {
    const userInfo = document.getElementById("user-info");
    userInfo.innerHTML = "Xin chào, <br>" + username;
    userInfo.style.display = "block";

    const loginBtn = document.getElementById("login-btn");
    loginBtn.style.display = "none";

    closeModal();

    const logoutBtn = document.getElementById("logout-btn");
    logoutBtn.style.display = "flex";
}

// Đăng xuất
function logout() {
    localStorage.removeItem("loggedInUser");
    location.reload(); // Tải lại trang
}

window.onload = function() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const errorDisplay = document.getElementById("error-msg");

    // Xử lý đăng nhập
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        if (checkCredentials(username, password)) {
            localStorage.setItem("loggedInUser", username);
            showUsername(username);
        } else {
            errorDisplay.innerHTML = "Sai tên người dùng hoặc mật khẩu.";
            errorDisplay.style.display = "block";
        }
    });

    // Xử lý đăng ký
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const regUsername = document.getElementById("register-email").value;
        const regPassword = document.getElementById("register-password").value;

        registerUser(regUsername, regPassword);
        document.getElementById("register-form").reset();
        errorDisplay.innerHTML = "Đăng ký thành công!";
    });

    // Kiểm tra nếu người dùng đã đăng nhập trước đó
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        showUsername(loggedInUser);
    }

    // Xử lý đăng xuất
    const logoutBtn = document.getElementById("logout-btn");
    logoutBtn.addEventListener("click", logout);
};
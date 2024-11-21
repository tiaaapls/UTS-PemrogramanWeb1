document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const namaLengkap = document.getElementById("namalengkap").value;
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailRegex.test(email)) {
        alert("Masukkan email yang valid.");
        return;
      }

      const user = { namaLengkap, username, email, password };
      localStorage.setItem("user", JSON.stringify(user));

      alert("Registrasi berhasil! Silakan login.");
      window.location.href = "login.html"; 
    });
  }

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const user = JSON.parse(localStorage.getItem("user"));

      if (user && email === user.email && password === user.password) {
        alert("Login berhasil!");
        window.location.href = "menu.html"; 
      } else {
        alert("Email atau password salah. Silakan coba lagi.");
      }
    });
  }
});

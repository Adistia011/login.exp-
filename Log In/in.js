const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
  ];
  
  function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (!usernameInput || !passwordInput) {
      errorMessage.textContent = 'Username dan password harus diisi.';
      return;
    }

    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);
  
    if (user) {
      alert('Login berhasil! Redirect ke halaman beranda...');
    } else {
      errorMessage.textContent = 'Username atau password salah.';
    }
  }
  
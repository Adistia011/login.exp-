<?php
$users = [
  'user1' => 'password1',
  'user2' => 'password2',
];

$usernameInput = $_POST['username'];
$passwordInput = $_POST['password'];

if (empty($usernameInput) || empty($passwordInput)) {
  header('Location: index.html?error=Username dan password harus diisi.');
  exit();
}

if (array_key_exists($usernameInput, $users) && $users[$usernameInput] === $passwordInput) {
  echo 'Login berhasil! Redirect ke halaman beranda...';
} else {
  header('Location: index.html?error=Username atau password salah.');
  exit();
}
?>

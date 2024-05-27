document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  var storedUser = JSON.parse(localStorage.getItem('user'));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    alert('Login bem sucedido!');
    localStorage.setItem('logado', true);
    window.location.href = '../index.html';
  } else {
    alert('Falha no login! Verifique seu email e senha.');
  }
});
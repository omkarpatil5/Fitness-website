document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-btn');
    const loginOverlay = document.getElementById('login-btn');
  
    loginButton.addEventListener('click', function() {
      loginOverlay.classList.toggle('hidden');
    });
  });
  
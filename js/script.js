buttonDark = document.getElementById('button-dark');



buttonDark.addEventListener('click', function() {
    // Togglamos una clase en el <body> para cambiar entre modos claro y oscuro
    document.body.classList.toggle('dark-mode');
});
document.addEventListener('DOMContentLoaded', () => {
    function cerrarNav() {
        const cerrar = document.getElementById('botonCerrarNav');
        const nav = document.getElementById('headerNav');
        const hamburgerBtn = document.getElementById('menuHamburguesa');

        cerrar.addEventListener('click', () => {
            nav.classList.add('ocultar');
            nav.classList.remove('mostrar');
        });

        hamburgerBtn.addEventListener('click', () => {
            nav.classList.add('mostrar');
            nav.classList.remove('ocultar');
          });
    };

    cerrarNav();
});
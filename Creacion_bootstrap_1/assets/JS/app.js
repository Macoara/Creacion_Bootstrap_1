document.addEventListener("DOMContentLoaded", function() {
    const botonArriba = document.getElementById("btn-ir-arriba");
    if (!botonArriba) return;

    const toggleBoton = function() {
        if (window.scrollY > 150) {
            botonArriba.classList.add("visible");
        } else {
            botonArriba.classList.remove("visible");
        }
    };

    window.addEventListener("scroll", toggleBoton);
    toggleBoton();

    botonArriba.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });
});
    
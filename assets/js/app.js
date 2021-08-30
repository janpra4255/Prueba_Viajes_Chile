$(function() {
    /*
    Scroll 
    Permite crear cambiar navbar de transparente a color 
    */
    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $('nav').addClass("fondo-navbar");
        } else {
            $('nav').removeClass("bg-transparent");
        }
    });


    /*
    ScrollTop 
    En esta caso, se utilizó para dar animación al momento de hacer click en el menú del navbar
    */
    $("a").click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var gato = this.hash;
            $("html, body").animate({
                scrollTop: $(gato).offset().top

            }, 900, function() {
                window.location.hash = gato;
            })
        }
    });

    /*
    Tooltip 
    Muestra un pequeño mensaje en el h3 ubicado en el footer
    */
    $('[data-toggle="tooltip"]').tooltip()

    /*
    Popover 
    Genera 3 pequeñas ventanas en los div contenedores el ícono Font Awesome en la sección Quienes Somos
    */
    $('[data-toggle="popover1"]').popover();
    $('[data-toggle="popover2"]').popover();
    $('[data-toggle="popover3"]').popover();
});
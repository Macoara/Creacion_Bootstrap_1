// El código se ejecuta de forma segura una vez que el HTML está completamente cargado
$(document).ready(function() {

    // 1. Diferencia entre .html() y .text()
    $('#btn-html').click(function() {
        $('#caja-texto').html('<b>Texto en negrita</b>');
    });
    $('#btn-text').click(function() {
        $('#caja-texto').text('<b>Texto en negrita Cambi texto solo</b>');
    });

    // 2. Cambiar un atributo (la ruta de la imagen)
    $('#btn-attr').click(function() {
        $('#mi-imagen').attr('src', 'assets/img/im2.png');
    });

    // 3. Leer del input e insertar en la lista
    $('#btn-append').click(function() {
        let fruta = $('#mi-input').val(); // Lee lo que hay en el input
        $('#mi-lista').append('<li>' + fruta + '</li>'); // Lo mete al final de la lista
    });
    $('#btn-prepend').click(function() {
        let fruta = $('#mi-input').val();
        $('#mi-lista').prepend('<li>' + fruta + '</li>'); // Lo mete al inicio de la lista
    });

    // 4. Crear un elemento hermano o destruir el elemento
    $('#btn-after').click(function() {
        $('#bloque-alerta').after('<p>Nuevo párrafo abajo</p>');
    });
    $('#btn-remove').click(function() {
        $('#bloque-alerta').remove(); // Desaparece por completo
    });

        // Ir arriba (smooth scroll: native when available, jQuery fallback)
        $("#btn-ir-arriba").click(function() {
            if ('scrollBehavior' in document.documentElement.style) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                $("html, body").animate({ scrollTop: 0 }, 600);
            }
        });
        
            // Mostrar/ocultar el botón según la posición de scroll
            function toggleScrollButton() {
                if ($(window).scrollTop() > 200) {
                    $('#btn-ir-arriba').addClass('visible');
                } else {
                    $('#btn-ir-arriba').removeClass('visible');
                }
            }

            // Ejecutar al cargar y al hacer scroll
            toggleScrollButton();
            $(window).on('scroll', toggleScrollButton);

            });
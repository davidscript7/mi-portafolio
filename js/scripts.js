// Esperar a que el documento esté completamente cargado
$(document).ready(function() {
    
    // Mensaje de bienvenida en consola
    console.log('Portafolio de Héctor Gallego cargado correctamente');
    
    // Efecto suave al hacer clic en enlaces internos
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        
        if ($target.length) {
            $('html, body').animate({
                scrollTop: $target.offset().top - 70
            }, 800);
        }
    });
    
    // Animación de habilidades al hacer scroll
    $(window).on('scroll', function() {
        $('.skill-item').each(function() {
            var elementTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();
            
            if (elementTop < windowBottom - 50) {
                $(this).addClass('animate__animated animate__fadeInUp');
            }
        });
    });
    
    // Efecto hover en cards de proyectos
    $('.card').hover(
        function() {
            $(this).css('cursor', 'pointer');
        },
        function() {
            $(this).css('cursor', 'default');
        }
    );
    
    // Limpiar video al cerrar modal
    $('.modal').on('hidden.bs.modal', function () {
        var iframe = $(this).find('iframe');
        var src = iframe.attr('src');
        iframe.attr('src', '');
        iframe.attr('src', src);
    });
    
    // Efecto de escritura en el título (opcional)
    function typeWriter(element, text, speed) {
        var i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Activar navbar al hacer scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('shadow');
        } else {
            $('.navbar').removeClass('shadow');
        }
    });
    
    // Prevenir que los modales se cierren al hacer clic en el video
    $('.modal-body').on('click', function(e) {
        e.stopPropagation();
    });
    
    // Log para debugging
    console.log('jQuery version:', $.fn.jquery);
    console.log('Bootstrap loaded:', typeof bootstrap !== 'undefined');
    
});
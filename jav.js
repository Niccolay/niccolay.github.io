document.addEventListener('DOMContentLoaded', function() {
    var enlaces = document.querySelectorAll('.enlace');

    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
            var targetId = this.getAttribute('href').substring(1); // Obtener el ID del objetivo
            scrollToTarget(targetId);
        });
    });

    function scrollToTarget(targetId) {
        var targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
        }
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // ID del video de YouTube
    var videoId = 'rjBHugEYUog';

    // Contenedor del video
    var videoContainer = document.getElementById('video-container');

    // Crear el iframe del video de YouTube con reproducción automática y controles
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&controls=1');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('allowfullscreen', 'true');

    // Agregar el iframe al contenedor del video
    videoContainer.appendChild(iframe);

    // Desmutear el video al hacer clic en el contenedor del video
    videoContainer.addEventListener('click', function() {
        // Si el video está silenciado, desmutearlo
        if (iframe.contentWindow && iframe.contentWindow.postMessage) {
            iframe.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
        }
    });
});

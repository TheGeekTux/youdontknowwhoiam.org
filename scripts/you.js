// Variable para registrar si el usuario se encuentra haciendo scroll
let isScrolling = false;
let scrollTimeout;

// Detectar cuando el usuario hace scroll (baja o sube en la página)
window.addEventListener('scroll', function() {
    isScrolling = true;

    // Si el usuario deja de moverse por 150 milisegundos, asumimos que terminó de bajar
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
        isScrolling = false;
    }, 150);
}, { passive: true });

// Detectar clics en cualquier parte de la pantalla
document.addEventListener('click', function() {
    // Si el clic ocurrió mientras se estaba bajando/scrolleando, no hacemos nada
    if (isScrolling) {
        return;
    }

    // Buscar el reproductor de audio del index
    const audio = document.getElementById('idiot-audio');
    
    if (audio) {
        // Si el audio ya se está reproduciendo, lo pausamos
        if (!audio.paused) {
            audio.pause();
        } else {
            // Si el audio estaba pausado o no había iniciado, lo reproducimos
            audio.play().catch(function(error) {
                console.log("La reproducción fue prevenida por el navegador hasta una interacción válida:", error);
            });
        }
    }
});

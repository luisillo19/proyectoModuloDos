document.addEventListener("DOMContentLoaded", function() {
    // Fecha de finalización: viernes a las 20:00
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + (5 - targetDate.getDay() + 7) % 7); // Set to next Friday
    targetDate.setHours(20, 0, 0, 0); // Set time to 20:00:00

    function updateCountdown() {
        const now = new Date();
        const timeRemaining = targetDate - now;

        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            window.location.href = "index.html"; 
            return;
        };

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.querySelector('.contador__dias').textContent = `${days}d`;
        document.querySelector('.contador__horas').textContent = hours.toString().padStart(2, '0');
        document.querySelector('.contador__minutos').textContent = minutes.toString().padStart(2, '0');
        document.querySelector('.contador__segundos').textContent = seconds.toString().padStart(2, '0');
    };

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Inicializa la cuenta regresiva
});



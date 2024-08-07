// Configura la fecha del evento
const eventDate = new Date("2024-12-25T13:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = "¡El evento ha comenzado!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

const audio = document.getElementById('background-audio');
const audioToggleBtn = document.getElementById('audio-toggle');
let isPlaying = true;

audioToggleBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        audioToggleBtn.innerHTML = '<i class="fa fa-play"></i>';
    } else {
        audio.play();
        audioToggleBtn.innerHTML = '<i class="fa fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});
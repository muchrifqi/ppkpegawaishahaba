document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById("loadingScreen");
    const countdownElement = document.getElementById("countdown");

    let countdown = 3;

    // Update countdown setiap detik
    const countdownInterval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;

        // Redirect ke halaman baru setelah countdown selesai
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            window.location.href = "https://shahaba-presensi.netlify.app/index.html";
        }
    }, 1000);
});

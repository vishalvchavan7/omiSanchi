document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleLanguage");
    const countdownContainer = document.getElementById("countdown");
    let isMarathi = false;

    function updateCountdown() {
        const targetDate = new Date("2025-02-23T17:00:00");
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
            countdownContainer.innerHTML = isMarathi ? "महत्वाचा दिवस आला आहे! 🎉" : "The big day is here! 🎉";
            return;
        }

        const timeLeft = {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        };

        function translateNumber(num) {
            const marathiNumbers = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
            return num.toString().split("").map(digit => isMarathi ? marathiNumbers[digit] : digit).join("");
        }

        countdownContainer.innerHTML = `
            <div>${translateNumber(timeLeft.days)} <br> ${isMarathi ? "दिवस" : "Days"}</div>
            <div>${translateNumber(timeLeft.hours)} <br> ${isMarathi ? "तास" : "Hours"}</div>
            <div>${translateNumber(timeLeft.minutes)} <br> ${isMarathi ? "मिनिटे" : "Minutes"}</div>
            <div>${translateNumber(timeLeft.seconds)} <br> ${isMarathi ? "सेकंद" : "Seconds"}</div>
        `;
    }

    setInterval(updateCountdown, 1500);
    updateCountdown();

    toggleButton.addEventListener("click", () => {
        isMarathi = !isMarathi;
        toggleButton.innerText = isMarathi ? "English" : "मराठी";
        updateCountdown();
    });
});

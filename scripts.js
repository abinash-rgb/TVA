document.addEventListener("DOMContentLoaded", function () {
    const timezones = ["America/New_York", "Europe/London", "Asia/Tokyo","Asia/Kolkata","Asia/Kabul","Europe/Tirane", "Australia/Sydney"];

    function updateClocks() {
        const clockContainer = document.getElementById("clockContainer");
        clockContainer.innerHTML = "";

        timezones.forEach(timezone => {
            const clockDiv = document.createElement("div");
            clockDiv.classList.add("clock");

            const timezoneName = timezone.replace("/", " ");
            const clockTitle = document.createElement("h2");
            clockTitle.textContent = timezoneName;

            const clockTime = document.createElement("span");

            clockDiv.appendChild(clockTitle);
            clockDiv.appendChild(clockTime);
            clockContainer.appendChild(clockDiv);

            updateClock(clockTime, timezone);
        });
    }

    function updateClock(clockElement, timezone) {
        const options = { timeZone: timezone, hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const timeString = new Date().toLocaleTimeString('en-US', options);
        clockElement.textContent = timeString;
    }

    // Initial update
    updateClocks();

    // Update clocks every second
    setInterval(updateClocks, 1000);
});

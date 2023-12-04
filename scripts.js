document.addEventListener("DOMContentLoaded", function () {
    const timezones = ["Antarctica/Mawson","Pacific/Pago_Pago","Antarctica/Mawson","Antarctica/McMurdo","Antarctica/Palmer","Antarctica/Rothera","Antarctica/Vostok","America/Antigua",
    "America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentia/Mendoza","America/Argentina/Rio_Gallegos",
    "America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Aruba","Antarctica/Macquarie","Australia/Adelaide",
    "Australia/Brisbane","Australia/Broken_Hill","Australia/Darwin","Australia/Eucla","Australia/Hobart","Australia/Lindeman","Australia/Lord_Howe","Australia/Melbourne","Australia/Perth","Australia/Sydney",
    "Europe/Vienna","Asia/Baku","America/Nassau","Asia/Bahrain","Asia/Dhaka","America/Barbados","Europe/Minsk","Europe/Brussels","America/Belize","Atlantic/Bermuda","Asia/Thimphu","America/La_Paz","America/Kralendijk",
    "Europe/Sarajevo","Africa/Gaborone","America/Araguaina","America/Bahia","America/Belem","America/Boa_Vista","America/Campo_Grande","America/Cuiaba","America/Eirunepe","America/Fortaleza","America/Maceio","America/Manaus",
    "America/Noronha","America/Porto_Velho","America/Recife","America/Rio_Branco","Indian/Chagos","Asia/Brunei","Africa/Ouagadougou","Africa/Bujumbura","Asia/Phnom_Penh","Africa/Douala","America/Atikokan","America/Blanc-Sablon",
    "America/Cambridge_Bay","America/Creston","America/Dawson","America/Dawson_Creek","America/Edmonton","America/Fort_Nelson","America/Glace_Bay","America/Goose_Bay","America/Halifax","America/Inuvik","America/Iqaluit","America/Moncton",
    "America/Rankin_Inlet","America/Regina","America/Resolute","America/St_Johns","America/Swift_Current","America/Toronto","America/Vancouver","America/Whitehorse","America/Winnipeg"," Atlantic/Cape_Verde"," America/Cayman", "Africa/Ndjamena", 
    "America/Punta_Arenas"," America/Santiago","Pacific/Easter"," Asia/Shanghai"," Asia/Urumqi","Indian/Christmas ","Indian/Cocos","America/Bogota","Indian/Comoro"];

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

function updateTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const timeDisplayElement = document.getElementById("timeDisplay");

    // Format the time as HH:MM:SS
    const formattedTime = `${hours}:${padZero(minutes)}:${padZero(seconds)}`;

    // Update the content of the element with the current time
    timeDisplayElement.textContent = formattedTime;
}

function padZero(num) {
    return (num < 10 ? "0" : "") + num;
}

// Update the time initially and then every second
updateTime();
setInterval(updateTime, 1000);

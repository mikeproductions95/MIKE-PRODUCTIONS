document.addEventListener('DOMContentLoaded', function() {
    // Set the date we're counting down to
    // IMPORTANT: Change this to your desired launch date and time!
    // Format: "Month Day, Year Hour:Minute:Second"
    const launchDate = new Date("May 26, 2025 00:00:00").getTime();

    // Update the countdown every 1 second
    const countdownInterval = setInterval(function() {

        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the launch date
        const distance = launchDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the respective elements
        document.getElementById("days").innerHTML = formatTime(days);
        document.getElementById("hours").innerHTML = formatTime(hours);
        document.getElementById("minutes").innerHTML = formatTime(minutes);
        document.getElementById("seconds").innerHTML = formatTime(seconds);

        // If the countdown is finished, write some text
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown').innerHTML = "<h2>We are live! Welcome to Mike Productions!</h2>";
            document.querySelector('.updates-message').style.display = 'none'; // Hide the updates message
            document.querySelector('h2').innerHTML = "Explore our new website!"; // Change the main subtitle
            document.querySelector('p').innerHTML = ""; // Clear the original paragraph
        }
    }, 1000); // Update every 1 second

    // Helper function to add leading zero for single digits
    function formatTime(time) {
        return time < 10 ? "0" + time : time;
    }
});
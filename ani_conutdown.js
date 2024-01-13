
    // Set the initial countdown value
    var count = 3;

    // Function to update the countdown and display it
    function updateCountdown() {
        document.getElementById("countdown").innerHTML = count;

        // Check if the countdown has reached 0
        if (count === 0) {
            // Perform any action when the countdown reaches 0
            document.getElementById("countdown").innerHTML = "Go!";
            // You can add additional actions here

        } else {
            // Decrement the countdown
            count--;

            // Schedule the next update after 1000ms (1 second)
            setTimeout(updateCountdown, 1000);
        }
    }

    // Start the countdown when the page loads
let timer; // Variable to hold the timer
let isRunning = false; // Flag to check if timer is running
let seconds = 0; // Timer value in seconds

// Get references to the DOM elements
const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

// Function to update the timer display
function updateDisplay() {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Function to start the timer
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
}

// Function to stop the timer
function stopTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    updateDisplay();
}

// Event listeners for buttons
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

// Initialize the display
updateDisplay();

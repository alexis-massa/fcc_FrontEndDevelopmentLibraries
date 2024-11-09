// Initial Variables
let sessionLength = 25       // Default session length in minutes
let breakLength = 5          // Default break length in minutes
let timeLeft = sessionLength * 60 // Time left in seconds
let isRunning = false        // Tracks if the timer is running
let isSession = true         // Tracks if it's a session or break
let timerInterval            // Variable for interval

const CLASS_BORDER_RUNNING = 'border-success'
const CLASS_BORDER_PAUSED = 'border-warning'
const CLASS_BORDER_BREAK = 'border-info'

$(document).ready(() => {
  // Update initial display
  $('#session-length').text(sessionLength)
  $('#break-length').text(breakLength)
  $('#time-left').text(formatTime(timeLeft))

  // Event Listeners
  $('#break-decrement').on('click', () => updateBreakLength(-1))
  $('#break-increment').on('click', () => updateBreakLength(1))
  $('#session-decrement').on('click', () => updateSessionLength(-1))
  $('#session-increment').on('click', () => updateSessionLength(1))
  $('#start_stop').on('click', toggleTimer)
  $('#reset').on('click', resetTimer)
})


// Helper Functions
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`
}

// Functions to Update Lengths
const updateBreakLength = (change) => {
  if (!isRunning) {
    breakLength = Math.min(60, Math.max(1, breakLength + change))
    $('#break-length').text(breakLength)
  }
}

const updateSessionLength = (change) => {
  if (!isRunning) {
    sessionLength = Math.min(60, Math.max(1, sessionLength + change))
    $('#session-length').text(sessionLength)
    timeLeft = sessionLength * 60  // Reset the timer display
    $('#time-left').text(formatTime(timeLeft))
  }
}

// Toggle Timer (Start/Pause)
const toggleTimer = () => {
  if (isRunning) {
    clearInterval(timerInterval) // Pause the timer
    $('#time-left').removeClass(CLASS_BORDER_RUNNING)  // Remove running class
    $('#time-left').addClass(CLASS_BORDER_PAUSED)    // Add paused class
  } else {
    timerInterval = setInterval(countdown, 1000) // Start the timer
    $('#time-left').removeClass(CLASS_BORDER_PAUSED) // Remove paused class
    $('#time-left').addClass(CLASS_BORDER_RUNNING)   // Add running class
  }
  isRunning = !isRunning
}

// Countdown Logic
const countdown = () => {
  if (timeLeft > 0) {
    timeLeft--
    $('#time-left').text(formatTime(timeLeft))
  } else {
    // Switch between session and break
    isSession = !isSession
    timeLeft = (isSession ? sessionLength : breakLength) * 60
    $('#timer-label').text(isSession ? 'Session' : 'Break')
    $('#time-left').text(formatTime(timeLeft))

    if (isSession) {
      $('#time-left').removeClass(CLASS_BORDER_BREAK) // Remove break class
      $('#time-left').addClass(CLASS_BORDER_RUNNING)  // Add running class for session
    } else {
      $('#time-left').removeClass(CLASS_BORDER_RUNNING) // Remove session class
      $('#time-left').addClass(CLASS_BORDER_BREAK)     // Add break class
    }

    playSound() // Placeholder for sound function
  }
}

// Reset Timer
const resetTimer = () => {
  clearInterval(timerInterval)
  isRunning = false
  isSession = true
  sessionLength = 25
  breakLength = 5
  timeLeft = sessionLength * 60

  // Reset Display
  $('#session-length').text(sessionLength)
  $('#break-length').text(breakLength)
  $('#timer-label').text('Session')
  $('#time-left').text(formatTime(timeLeft))

  // Reset Audio
  $('#beep')[0].pause()
  $('#beep')[0].currentTime = 0

  $('#time-left').removeClass(CLASS_BORDER_RUNNING)
  $('#time-left').removeClass(CLASS_BORDER_BREAK)
  $('#time-left').addClass(CLASS_BORDER_PAUSED)
}

// Placeholder const to =  play soun=>d
const playSound = () => {
  $('#beep')[0].play()
}

# 💻 Project : 25 + 5 Clock

Build an app that is functionally similar to this: https://clock.freecodecamp.rocks/.

[**View on CodePen**](https://codepen.io/alexis-massa/pen/WNVadmv)

## User Stories :
- [x] I can see an element with `id="break-label"` that contains a string (e.g. "Break Length").
- [x] I can see an element with `id="session-label"` that contains a string (e.g. "Session Length").
- [x] I can see two clickable elements with corresponding IDs: `id="break-decrement"` and `id="session-decrement"`.
- [x] I can see two clickable elements with corresponding IDs: `id="break-increment"` and `id="session-increment"`.
- [x] I can see an element with a corresponding `id="break-length"`, which by default (on load) displays a value of `5`.
- [x] I can see an element with a corresponding `id="session-length"`, which by default displays a value of `25`.
- [x] I can see an element with a corresponding `id="timer-label"`, that contains a string indicating a session is initialized (e.g. "Session").
- [x] I can see an element with corresponding `id="time-left"`. NOTE: Paused or running, the value in this field should always be displayed in `mm:ss` format (i.e. 25:00).
- [x] I can see a clickable element with a corresponding `id="start_stop"`.
- [x] I can see a clickable element with a corresponding `id="reset"`.
- [x] When I click the element with the id of `reset`, any running timer should be stopped, the value within `id="break-length"` should return to `5`, the value within `id="session-length"` should return to `25`, and the element with `id="time-left"` should reset to its default state.
- [x] When I click the element with the id of `break-decrement`, the value within `id="break-length"` decrements by a value of 1, and I can see the updated value.
- [x] When I click the element with the id of `break-increment`, the value within `id="break-length"` increments by a value of 1, and I can see the updated value.
- [x] When I click the element with the id of `session-decrement`, the value within `id="session-length"` decrements by a value of 1, and I can see the updated value.
- [x] When I click the element with the id of `session-increment`, the value within `id="session-length"` increments by a value of 1, and I can see the updated value.
- [x] I should not be able to set a session or break length to <= `0`.
- [x] I should not be able to set a session or break length to > `60`.
- [x] When I first click the element with `id="start_stop"`, the timer should begin running from the value currently displayed in `id="session-length"`, even if the value has been incremented or decremented from the original value of `25`.
- [x] If the timer is running, the element with the id of `time-left` should display the remaining time in `mm:ss` format (decrementing by a value of 1 and updating the display every 1000ms).
- [x] If the timer is running and I click the element with `id="start_stop"`, the countdown should pause.
- [x] If the timer is paused and I click the element with `id="start_stop"`, the countdown should resume running from the point at which it was paused.
- [x] When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of `timer-label` should display a string indicating a break has begun.
- [x] When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the `id="break-length"` element.
- [x] When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of `timer-label` should display a string indicating a session has begun.
- [x] When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the `id="session-length"` element.
- [x] When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 audio tag and have a corresponding `id="beep"`.
- [x] The audio element with `id="beep"` must be 1 second or longer.
- [x] The audio element with id of `beep` must stop playing and be rewound to the beginning when the element with the id of `reset` is clicked.
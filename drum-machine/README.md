# 💻 Project : Drum Machine

Build an app that is functionally similar to this: https://drum-machine.freecodecamp.rocks/.

[**View on CodePen**](https://codepen.io/alexis-massa/pen/GRVQmqB)

## User stories :
- [x] I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.
- [x] Within #drum-machine I can see an element with a corresponding id="display".
- [x] Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.
- [x] Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).
- [x] When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.
- [x] When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.).
- [x] When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).
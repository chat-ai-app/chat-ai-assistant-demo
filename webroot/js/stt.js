import * as Everything from '/dist/vitalSpeechToText.min.js';

// console.log(Everything);

// console.log(window.VitalSpeechToText);

window.vitalSTT = new window.VitalSpeechToText();

await window.vitalSTT.start();


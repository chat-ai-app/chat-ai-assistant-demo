import { meter, audioStream } from './audioStream.js';

var audioContext = null;

var canvasContext = null;
var WIDTH=500;
var HEIGHT=50;
var rafID = null;

var debuglog = false;

// this needs to run after user interacts with the page
//window.addEventListener("load", function() {

    console.log("Initing audio...");
    
    // grab our canvas
    // canvasContext = document.getElementById( 'meter' ).getContext('2d');
	
    // monkeypatch Web Audio
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
	
    // grab an audio context
    audioContext = new AudioContext();
    
    window.currentAudioContext = audioContext;
    
    // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
    // https://sites.google.com/a/chromium.org/dev/audio-video/autoplay
    // https://stackoverflow.com/questions/50218162/web-autoplay-policy-change-resuming-context-doesnt-unmute-audio
  
    // One-liner to resume playback when user interacted with the page.
    document.querySelector('#start').addEventListener('click', function() {

      audioContext.resume().then( () => {
        console.log('User interacted with the page. Playback resumed successfully')
      })

    })

    
    document.querySelector('#stop').addEventListener('click', function() {

      audioContext.suspend().then( () => {
        console.log('User interacted with the page. Stopped successfully')
      })

    })
    
    document.querySelector('#startconsoledebug').addEventListener('click', function() {
      debuglog = true
    })

    // debug log flag
    document.querySelector('#stopconsoledebug').addEventListener( 'click', () =>  { 
      debuglog = false 
    })

    // const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    
    // Attempt to get audio input
    try {
        // ask for an audio input
        navigator.mediaDevices.getUserMedia(
          
        { audio: true }    
        /*    
        {
            'audio': {
                'mandatory': {
                    'googEchoCancellation': 'false',
                    'googAutoGainControl': 'false',
                    'googNoiseSuppression': 'false',
                    'googHighpassFilter': 'false'
                },
                'optional': []
            },
        }
        */
        
        ).then(audioStream)
        .catch(didntGetStream);
    } catch (e) {
        alert('getUserMedia threw exception :' + e);
    }

    
    audioContext.suspend().then( () => {
        console.log('Audio context stopped intially.')
    });
    
// });

function didntGetStream() {
    // alert('Stream generation failed.');
}


function drawLoop( time ) {
    // clear the background
    canvasContext.clearRect(0,0,WIDTH,HEIGHT);

    // check if we're currently clipping
    if (meter.checkClipping())
        canvasContext.fillStyle = 'red';
    else
        canvasContext.fillStyle = 'green';

    // draw a bar based on the current volume
    canvasContext.fillRect(0, 0, meter.volume*WIDTH*1.4, HEIGHT);

    // set up the next visual callback
    rafID = window.requestAnimationFrame( drawLoop );
}



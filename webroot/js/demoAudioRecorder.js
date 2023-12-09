/* eslint-env browser */

import { MediaRecorder, register } from 'https://dev.jspm.io/npm:extendable-media-recorder';
import { connect } from 'https://dev.jspm.io/npm:extendable-media-recorder-wav-encoder'; 

import { DEFAULT_PARAMETERS_CONFIGURATION } from './audioDetectionConfig.js'

var recorder = null

export let audioPlay = true

// This example uses MediaRecorder to record from a live audio stream,
// and uses the resulting blob as a source for an audio element.
//
// The relevant functions in use are:
//
// navigator.mediaDevices.getUserMedia -> to get audio stream from microphone
// MediaRecorder (constructor) -> create MediaRecorder instance for a stream
// MediaRecorder.ondataavailable -> event to listen to when the recording is ready
// MediaRecorder.start -> start recording
// MediaRecorder.stop -> stop recording (this will generate a blob of data)
// URL.createObjectURL -> to create a URL from a blob, which we can use as audio src


const FILE_TYPE = 'audio/wav'

await register(await connect());

export function audioRecorder(stream) {

    console.log("Stream: " + stream);

    recorder = new MediaRecorder(stream, { mimeType: FILE_TYPE });

    console.log("Recorder: " + recorder);
    
  // listen to dataavailable, 
  // which gets triggered whenever we have
  // an audio blob available
    
  recorder.addEventListener('dataavailable', onRecordingReady)

}

export function onRecordingReady(e) {

  //
  // listen recording (audio play) 
  // just if speech is not aborted
  //
    
  if (audioPlay) {

    //
    // you don't want to record while playing (through loudspeakers), 
    // to avoid that playback audio feedback in the mic input!
    // 
    suspendRecording()

    document.querySelector('#audiostatuscell').style.background = 'orange'
    document.querySelector('#audiostatuscell').style.color = 'black'
    document.querySelector('#audiostatus').style.background = 'orange'
    document.querySelector('#audiostatus').textContent = 'playback'

     window.currentAudioContext.suspend().then( () => {
            console.log('Stopped listening before playback.')
      });  
            
    // const audio = document.getElementById('audio')

    // e.data contains a blob representing the recording
   //  audio.src = URL.createObjectURL(e.data)

    // audio.play()
    
    // call whisper model  
      
      var postdata = new FormData();

      // Blob constructor takes an Array. so you need provide `[data]` not `data`
      // postdata.append(
      //  'audio', new Blob([e.data], { type: "audio/wav"}), 'audio.wav');
      
      postdata.append('file', new Blob([e.data], { type: "audio/wav"}), 'audio.wav');

      postdata.append('model', 'whisper-1');

      const startTime = performance.now();
      
      fetch('https://api.openai.com/v1/audio/transcriptions', {
        method: 'POST',
          headers: {
              
            Authorization: 'Bearer sk-*'  
              
        },
        body: postdata
      }).then((response) => response.json())
        .then((result) => {
            console.log('Success:', result);
          
          const endTime = performance.now();
          
          const duration = endTime - startTime;
          
          console.log(`Fetch duration: ${duration} ms`);
 
          result['parsedText'] = result['text'];
          
          // window.currentPopform.sendIntent('whisperchat', JSON.stringify(result));
        
          var parsedText = result["parsedText"];
          
          // var currentSession = window.currentSession;
          
          // console.log("CurrentSession: " + currentSession);
          
          /*
          
          fetch('http://localhost:9090/text', {
              method: 'POST',
              body: JSON.stringify({'session': currentSession, 'text': parsedText})      
          }).then((response2) => response2.json())
            .then((result2) => {
            console.log('Success:', result2);
          
            var messageText = result2["message"];

            window.currentPopform.sendIntent('chatresponse', JSON.stringify(result2));
          
          
          resumeRecording();
          
          
            //console.log('recordingEnabled ' + DEFAULT_PARAMETERS_CONFIGURATION.recordingEnabled)
        
        
       // window.currentAudioContext.suspend().then( () => {
        //    console.log('Stopped listening after playback.')
      // });
          
          })
      
      
        })
        .catch((error) => {
            console.error('Error:', error);
        });
      */
          
      
      
        resumeRecording();

      
      
        
    //
    // you want to resume recording after the audio playback
    //
      
    /*  
    audio.onended = () => {
      resumeRecording() 
      //console.log('recordingEnabled ' + DEFAULT_PARAMETERS_CONFIGURATION.recordingEnabled)
        
        
        window.currentAudioContext.suspend().then( () => {
            console.log('Stopped listening after playback.')
      })
        
        
    }  
    */
    
    
  });
  }
}


export function startRecording() {
  recorder.start()
}

export function stopRecording() {
  // Stopping the recorder will eventually trigger the `dataavailable` event and we can complete the recording process
  recorder.stop()
  audioPlay = true
}


/**
 * restartRecording
 *
 * abort and start
 */ 

export function restartRecording() {
  
  // https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/state
  //console.log('recorder ' +  recorder.state )

  // need otherwise I get on Chrome the error:
  // Failed to execute 'stop' on 'MediaRecorder': The MediaRecorder's state is 'inactive'.
  if (recorder.state != 'inactive')
    recorder.stop()

  audioPlay = false
  recorder.start()
  
}

export function abortRecording() {
  // Stopping the recorder will eventually trigger the `dataavailable` event and we can complete the recording process
  recorder.stop()
  audioPlay = false
}


// to suspend recording when the system play audio with a loudspeaker, avoiding feedback
export function suspendRecording() {
  DEFAULT_PARAMETERS_CONFIGURATION.recordingEnabled = false
}  


export function resumeRecording() {
  DEFAULT_PARAMETERS_CONFIGURATION.recordingEnabled = true
}  

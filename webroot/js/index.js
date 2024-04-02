const VADHandler = function (speakingEvent) {
    speakingEvent.detail ? (document.getElementById("VADLed").classList.add("led-red"), document.getElementById("VADLed").classList.remove("led-green")) : (document.getElementById("VADLed").classList.add("led-green"), document.getElementById("VADLed").classList.remove("led-red"))
}

window.start = async function () {
    window.mic = new vitalWakeWord.Mic(JSON.parse(document.getElementById('mic').value))
    window.localvad = new vitalWakeWord.Vad(JSON.parse(document.getElementById('VAD').value))
    await mic.start()
    await localvad.start(mic)
    
    window.wakeWordDownSampler = new vitalWakeWord.DownSampler({
        targetFrameSize: 1280,
        targetSampleRate: 16000,
        Int16Convert: true
        })
    
    await wakeWordDownSampler.start(mic)

    window.wakeword = new vitalWakeWord.WakeWord()
    
    await wakeword.start(wakeWordDownSampler)
    
    document.getElementById("VADLed").setAttribute('style', 'display:inline-block;')
    
    localvad.addEventListener("speakingStatus", VADHandler)
}

window.stop = async function () {
    
    await localvad.stop()
    
    await wakeWordDownSampler.stop()
    
    await wakeword.stop()
        
    document.getElementById("VADLed").setAttribute('style', 'display:none;')
    
    localvad.removeEventListener("speakingStatus", VADHandler)
}

let debounceTimer;
    
function playSound() {
    const audio = new Audio('/sounds/dingsound.mp3');
    audio.play();
}
  
function handleSpeechToTextEvent(event) {
   
    const text = event.detail;
   
    console.log('SST Result: ', text);
    
    var transcriptionDiv = document.getElementById('transcription');

    transcriptionDiv.textContent = ('Speaker: ' + text);
    
}


window.addEventListener('speechToTextResult', handleSpeechToTextEvent);


async function handleEvent(event, threshold = 0.2, debounceTime = 1000){
        
    let score = event.detail;
    
    console.log('Hey Haley Score: ', score);
    
    if (debounceTimer) return;
  
    if (score > threshold) {
        
        playSound();
        
        debounceTimer = setTimeout(() => {
            clearTimeout(debounceTimer);
            debounceTimer = null;
        }, debounceTime);
        
        const mylocalvad = await vad.MicVAD.new({
        
        // does this work?
        startOnLoad: true,    
                 
      // onSpeechStart: () => {
        // console.log("Speech start detected")
      // },
        
      onSpeechEnd: (audio) => {
          
        console.log("Speech end detected")
          
          
        var listeningDiv = document.getElementById('listening');

        listeningDiv.textContent = '...';  
          
        var task = {};
        
        task.recorded_audio = audio;
          
        // do_whisper_web(task);
          
        window.vitalSTT.do_whisper_web(task);
  
          
        console.log("Finshed whisper task");
 
        mylocalvad.pause();
          
          
          
      },
        
        /*    
        onFrameProcessed: (probabilities) => {
            
            // {isSpeech: float; notSpeech: float}
            
            let isSpeech = probabilities.isSpeech;
            
            let notSpeech = probabilities.notSpeech;
                        
            if(isSpeech > 0.1) {
                // console.log("Is Speech: ", isSpeech);
            }
        } 
        */
        
    })
        
    mylocalvad.start();    
       
    var transcriptionDiv = document.getElementById('transcription');

    transcriptionDiv.textContent = '';
         
    var listeningDiv = document.getElementById('listening');

    listeningDiv.textContent = 'Listening...';
        
        
        
    }
}


window.addEventListener('wakeWordEvent', handleEvent);

document.getElementById('mic').value = JSON.stringify(vitalWakeWord.Mic.defaultOptions, false, 4)

document.getElementById('VAD').value = JSON.stringify(vitalWakeWord.Vad.defaultOptions, false, 4)

document.getElementById("start").onclick = async () => {
    start()
}

document.getElementById("stop").onclick = async () => {
    stop()
}
   

let microphone;
     
document.addEventListener('DOMContentLoaded', function () {
    
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    
    if (checkbox.checked) {
     
      console.log('Checked');
    
        // myvad.start();
        
        start();
        
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function(stream) {
    
                microphone = stream;
            
        })
            .catch(function(err) {
    
                console.log('Failed to get microphone access', err);
        });
        
    } else {
     
      console.log('Not checked');
    
        // myvad.pause();
        
        stop();
    }
  });
}); 


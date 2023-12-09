
import { audioRecorder } from './demoAudioRecorder.js';
import { audioDetection } from './audioDetection.js';

import { DEFAULT_PARAMETERS_CONFIGURATION } from './audioDetectionConfig.js'

var mediaStreamSource = null

export var meter = null;

export function audioStream(stream) {
    
  console.log("called audio stream." + stream);
    
    var [firstAudioTrack] = stream.getAudioTracks();

    const channelCount = 1;

    if (firstAudioTrack.getSettings().sampleRate === undefined) {
        firstAudioTrack.getSettings = ((getSettings) => () => ({
            sampleRate: 16000,
        ...getSettings.call(firstAudioTrack)
        }))(firstAudioTrack.getSettings);
    }    
    
    
    if (firstAudioTrack.getSettings().channelCount === undefined) {
    firstAudioTrack.getSettings = ((getSettings) => () => ({
        channelCount,
        ...getSettings.call(firstAudioTrack)
    }))(firstAudioTrack.getSettings);
    }

  // Create an AudioNode from the stream.
  mediaStreamSource = window.currentAudioContext.createMediaStreamSource(stream);

  // Create a new volume meter and connect it.
  meter = createAudioMeter(window.currentAudioContext);
  mediaStreamSource.connect(meter);

  // kick off the visual updating
  //drawLoop();

  audioDetection(DEFAULT_PARAMETERS_CONFIGURATION)

  audioRecorder(stream)
}


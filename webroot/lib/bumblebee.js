//const EventEmitter = require('events');
// class EventEmitter extends EventTarget {};

// const PorcupineManager = require('./porcupine_manager');
// const webVoiceProcessor = require('./web-voice-processor');
// const SpectrumAnalyser = require('./spectrum-analyser');


/*
const defaultHotwrds = {
	alexa: require('../hotwords/alexa'),
	bumblebee: require('../hotwords/bumblebee'),
	computer: require('../hotwords/computer'),
	grasshopper: require('../hotwords/grasshopper'),
	hey_edison: require('../hotwords/hey_edison'),
	hey_google: require('../hotwords/hey_google'),
	hey_siri: require('../hotwords/hey_siri'),
	jarvis: require('../hotwords/jarvis'),
	ok_google: require('../hotwords/ok_google'),
	porcupine: require('../hotwords/porcupine'),
	terminator: require('../hotwords/terminator')
};
*/

async function main() {

await (async () => {
    
    const PorcupineManagerModule = await import('./porcupine_manager.js');
    const webVoiceProcessor = await import('./web-voice-processor.js');
    const SpectrumAnalyser = await import('./spectrum-analyser.js');
    
    const PorcupineManager = PorcupineManagerModule.default;
    
    const alexaModule = await import("../hotwords/alexa.js");
    const bumblebeeModule = await import("../hotwords/bumblebee.js");
    const computerModule = await import("../hotwords/computer.js");
    const grasshopperModule = await import("../hotwords/grasshopper.js");
    const hey_edisonModule = await import("../hotwords/hey_edison.js");
    const hey_googleModule = await import("../hotwords/hey_google.js");
    const hey_siriModule = await import("../hotwords/hey_siri.js");
    const jarvisModule = await import("../hotwords/jarvis.js");
    const ok_googleModule = await import("../hotwords/ok_google.js");
    const porcupineModule = await import("../hotwords/porcupine.js");
    const terminatorModule = await import("../hotwords/terminator.js");
    
    const defaultHotwords = {
        alexa: alexaModule.default,
        bumblebee: bumblebeeModule.default,
        computer: computerModule.default,
        grasshopper: grasshopperModule.default,
        hey_edison: hey_edisonModule.default,
        hey_google: hey_googleModule.default, 
        hey_siri: hey_siriModule.default,
        jarvis: jarvisModule.default,
        ok_google: ok_googleModule.default,
        porcupine: porcupineModule.default,
        terminator: terminatorModule.default
    };
 
 
   // class EventEmitter extends EventTarget {};

    class Bumblebee extends EventEmitter3 {
	constructor() {
		super();
		this.hotword = null;
		this.hotwords = {};
		this.setMicVolume(1);
		this.setMuted(false);
		this.setSensitivity(0.5);
		this.setWorkersPath('/');
		this.setVoiceProcessor(webVoiceProcessor);
		this._detectionCallback = this.detectionCallback.bind(this);
		this._errorCallback = this.errorCallback.bind(this);
		this._audioProcessCallback = this.audioProcessCallback.bind(this);
		this._audioAnalyserCallback = this.audioAnalyserCallback.bind(this);
	}
	
	setVoiceProcessor(proc) {
		this.webVoiceProcessor = proc;
	}
	
	addHotword(name, data, sensitivity) {
		if (!data) {
			if (name in defaultHotwords) {
				data = defaultHotwords[name];
			}
		}
		if (data) {
			this.hotwords[name] = {
				data,
				sensitivity: sensitivity === undefined? this.defaultSensitivity : sensitivity
			};
		}
		else throw new Error('no hotword data for '+name);
	}
	
	setHotword(w) {
		if (w === null || w === '') {
			this.hotword = null;
		}
		else if (Object.keys(this.hotwords).indexOf(w) > -1) {
			this.hotword = w;
		}
		else {
			throw new Error('invalid hotword');
		}
	}
	
	setSensitivity(s) {
		this.defaultSensitivity = s;
	}
	
	stop() {
		if (this.porcupineManager) this.porcupineManager.stop();
		this.started = false;
	}
	
	setWorkersPath(path) {
		this.webWorkersPath = path;
	}
	
	detectionCallback(keyword, intData, floatData) {
		this.didStart = true;
		let hotword;
		if (keyword) {
			hotword = keyword;
			if (this.hotword === null || keyword === this.hotword) {
				this.emit('hotword', keyword);
			}
			else {
				console.log('wrong hotword:', keyword);
			}
		}
		this.emit('data', intData, floatData, 16000, hotword);
	}
	
	errorCallback(e) {
		this.emit('error', e);
	}
	
	audioProcessCallback() {
		// this.didStart = true;
		// this.emit('data', data, sampleRate);
		// clearTimeout(this.crashTimer);
		// this.crashTimer = setTimeout(() => {
		// 	if (this.started) {
		// 		// one second of no audio has gone by, assume a crash has occurred
		// 		console.log('bumblebee crashed? -----------------');
		// 		this.stop();
		// 		this.start();
		// 	}
		// },1000);
	}
	
	audioAnalyserCallback(audioAnalyser, gainNode) {
		this.gainNode = gainNode;
		this.audioAnalyser = audioAnalyser;
		this.emit('analyser', audioAnalyser);
	}
	
	start() {
		if (this.started) return;
		this.started = true;
		this.didStart = false;
		this.porcupineManager = PorcupineManager(
			this.webVoiceProcessor,
			this.webWorkersPath+"/porcupine_worker.js",
			this.webWorkersPath+"/downsampling_worker.js",
			this.bufferSize,
			this.microphone);
		
		let keywordIDs = {};
		let sensitivities = [];
		for (let id in this.hotwords) {
			let h = this.hotwords[id];
			keywordIDs[id] = h.data;
			sensitivities.push(h.sensitivity);
		}
		this.porcupineManager.start(keywordIDs, new Float32Array(sensitivities), this._gain, this._detectionCallback, this._errorCallback, this._audioProcessCallback, this._audioAnalyserCallback);
		
		// this.crashTimer2 = setTimeout(() => {
		// 	// if it does not start within 1 second, try again
		// 	if (!this.didStart) {
		// 		this.stop();
		// 		this.start();
		// 	}
		// },1000);
	}
	
	setMuted(muted) {
		this.muted = muted;
		if (this.gainNode) {
			if (muted) {
				this._gain = this.gainNode.gain.value;
				this.gainNode.gain.value = 0;
			}
			else {
				this.gainNode.gain.value = this._gain || 1;
			}
		}
	}
	
	setMicVolume(vol) {
		this._gain = vol;
		if (this.gainNode) this.gainNode.gain.value = vol;
	}
	
	setMicrophone(id) {
		this.microphone = id;
	}
	
	async getMicrophones() {
		const deviceInfos = await navigator.mediaDevices.enumerateDevices();
		const mics = [];
		for (let i = 0; i !== deviceInfos.length; ++i) {
			const deviceInfo = deviceInfos[i];
			if (deviceInfo.kind === 'audioinput') {
				let id = deviceInfo.deviceId;
				let name = deviceInfo.label || 'microphone '+i;
				mics.push({
					id,
					name
				});
			}
		}
		return mics;
	}
}



    window.BumbleBee = new Bumblebee();

    console.log('BB', window.BumbleBee)
    
    
    // export { Bumblebee, SpectrumAnalyser };
    
// module.exports = Bumblebee;
// module.exports.SpectrumAnalyser = SpectrumAnalyser;
    
})();


}

await main();


// Import BumbleBee
// import BumbleBee from 'bumblebee-hotword';
 
const bumblebee = window.BumbleBee;

// Set up BumbleBee instance
// const bumblebee = new BumbleBee();
 
bumblebee.setSensitivity(0.5);
bumblebee.setWorkersPath('./bumblebee-workers');
bumblebee.addHotword('computer');
bumblebee.setHotword('computer');
 
class HaleyWakeWordApp {
    
    constructor() {
        this.words = [];
        this.started = false;
        
        const sound = new Audio('sounds/dingsound.mp3');
		
        bumblebee.on('hotword', (hotword) => {
            sound.play();
            this.words.push(hotword);
            this.render();
        });
    }
	
    start() {
        this.started = true;
        bumblebee.start();
        this.render();
    }
	
    stop() {
        this.started = false;
        this.words = [];
        bumblebee.stop();
        this.render();
    }
	
    render() {
        
        const app = document.querySelector('.App');
        
        if (!app) return;
        
        app.innerHTML = '';
        
        const buttonStart = document.createElement('div');
        buttonStart.classList.add('buttonStart');
        buttonStart.addEventListener('click', () => this.start());
        app.appendChild(buttonStart);
        
        const buttonStop = document.createElement('div');
        buttonStop.classList.add('buttonStop');
        buttonStop.addEventListener('click', () => this.stop());
        app.appendChild(buttonStop);
        
        this.renderStarted(app);
    }
	
    renderStarted(parentElement) {
        if (this.started) {
            this.words.forEach((word, i) => {
                console.log("Recognized: ", i, " ", word);
                
                console.log("AudioContext", window.currentAudioContext);
                
                
                window.currentAudioContext.resume().then(() => {
                    console.log('User interacted with the page. Playback resumed successfully')
                });
            });
        }
    }
}
 
window.HaleyWakeWordApp = HaleyWakeWordApp;

const wakeWordApp = new HaleyWakeWordApp();

wakeWordApp.render();




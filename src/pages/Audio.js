export const renderAudio = () => {
    return `
     
        <button class="pad" id="pad1">Pad 1</button>
        <button class="pad" id="pad2">Pad 2</button>
        <button class="pad" id="pad3">Pad 3</button>
        <button class="pad" id="pad4">Pad 4</button>
        <button class="pad" id="pad5">Pad 5</button>
        <button class="pad" id="pad6">Pad 6</button>
        <button id="stopButton">Stop</button>
    
        `
}
export function initAudio() {


        let audioContext;

        let rhythmIntervals = {};
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const bpm = 120; // Batidas por minuto
        const beatDuration = 60 / bpm;

        // Função para criar um oscilador com uma frequência específica
        function createOscillator(frequency) {
            const oscillator = audioContext.createOscillator();
            oscillator.type = 'sine'; // Pode ser 'sine', 'square', 'sawtooth' ou 'triangle'
            oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
            return oscillator;
        }
        function createOscillator2(frequency) {
            const oscillator = audioContext.createOscillator();
            oscillator.type = 'sawtooth'; // Pode ser 'sine', 'square', 'sawtooth' ou 'triangle'
            oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
            return oscillator;
        }

        // Função para criar um envelope de amplitude (para controlar o volume)
        function createAmplitudeEnvelope() {
            const envelope = audioContext.createGain();
            envelope.gain.setValueAtTime(0, audioContext.currentTime);
            return envelope;
        }

        // Função para tocar um som (oscilador) com um envelope de amplitude
        function playSound(oscillator, envelope, duration) {
            oscillator.connect(envelope);
            envelope.connect(audioContext.destination);

            oscillator.start();
            envelope.gain.setValueAtTime(1, audioContext.currentTime);
            envelope.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
            oscillator.stop(audioContext.currentTime + duration);
        }

        function startRhythmForPad(padId) {
            if (rhythmIntervals[padId]) {
                clearInterval(rhythmIntervals[padId]);
                delete rhythmIntervals[padId];
                return; // Parar o ritmo se ele já estiver tocando
            }

            rhythmIntervals[padId] = setInterval(() => {
                let bassDrum, snareDrum;

                if (padId === 'pad1' ) {
                    bassDrum = createOscillator(60);
                    playSound(bassDrum, createAmplitudeEnvelope(), 0.2);
                }
                if (padId === 'pad2') {
                    bassDrum = createOscillator(300);
                    playSound(bassDrum, createAmplitudeEnvelope(), 0.8);
                }

                if (padId === 'pad3' || padId === 'pad4') {
                    snareDrum = createOscillator(200);
                    playSound(snareDrum, createAmplitudeEnvelope(), 0.2);
                }

                // Adicione lógica para outros pads conforme necessário
            }, 100); // Altere este valor conforme necessário para alterar a velocidade do ritmo
        }
        function ensureAudioContext() {
            if (!audioContext || audioContext.state === 'closed') {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }
        }
        // Função para parar todos os ritmos
        function stopAllRhythms() {
            for (const intervalId of Object.values(rhythmIntervals)) {
                clearInterval(intervalId);
            }
            rhythmIntervals = {};
            audioContext.close().then(() => {
                console.log('Audio context closed.');
            });
        }

        document.getElementById('stopButton').addEventListener('click', stopAllRhythms);

        const pads = document.querySelectorAll('.pad');
        pads.forEach((pad) => {
            pad.addEventListener('click', () => {
                ensureAudioContext();
                startRhythmForPad(pad.id);
            });
        });
}


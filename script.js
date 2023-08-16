document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const content = document.getElementById("content");
            
    startButton.addEventListener("click", () => {
        const speechText = content.innerText;
        readText(speechText);
    });
            
    function readText(text) {
        const speech = new SpeechSynthesisUtterance();
        speech.text = text;
            
        speech.lang = 'pt-BR-Neural2-B';
            
        speech.voiceURI = 'Google português do Brasil';
        speech.voice = getMaleVoice();
            
        window.speechSynthesis.speak(speech);
    }
            
    function getMaleVoice() {
        const availableVoices = window.speechSynthesis.getVoices();
        for (const voice of availableVoices) {
            if (voice.name === 'Google português do Brasil') {
                    return voice;
            }
        }
        return null;
    }
});

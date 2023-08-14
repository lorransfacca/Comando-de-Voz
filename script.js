
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

        window.speechSynthesis.speak(speech);
    }
});

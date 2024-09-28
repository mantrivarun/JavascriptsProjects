let speech= new SpeechSynthesisUtterance();

let voice=[];
let voiceSelect= document.querySelector('select');

window.speechSynthesis.onvoiceschanged = ()=>{
    voices= window.speechSynthesis.getVoices();
    speech.voice=voices[0];

    voiceSelect.innerHTML = '';

    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        option.setAttribute('data-name', voice.name); 
        voiceSelect.appendChild(option);
    });
}


document.querySelector('button').addEventListener('click',() => {
    speech.text= document.querySelector('textarea').value;

    window.speechSynthesis.speak(speech);

    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    const voices = window.speechSynthesis.getVoices();
    for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
            speech.voice = voices[i];
            break;
        }
    }

    window.speechSynthesis.speak(speech);
});

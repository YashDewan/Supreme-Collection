const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
let btnTxtId = document.getElementById('btnTxtId');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();
    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    }else if(hr == 12) {
        speak("Good noon Boss");
    }else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss");
    }else {
        speak("Good Evening Boss");
    }
}

// window.addEventListener('load', ()=>{
//     speak("Activating JARVIS");
//     speak("Going online");
//     wishMe();
// })

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    // me : 
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    console.log(transcript);
    // content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

function writeText(finaltxt){
    btnTxtId.innerText = finaltxt;
}

btn.addEventListener('click', ()=>{
    btnTxtId.style.display = 'block';
    btnTxtId.style.width = "120px";
    btnTxtId.style.height = "90px";
    btnTxtId.style.position = "fixed";
    btnTxtId.style.bottom = "65px";
    btnTxtId.style.right = "80px";
    btnTxtId.style.padding = "10px";
    btnTxtId.style.backgroundColor = "grey"
    btnTxtId.style.zIndex = "999";
    btnTxtId.style.borderRadius = "20px";
    btnTxtId.style.opacity = "10";
    btnTxtId.style.color = "white";
    writeText("Speak !")
    recognition.start();
})

function speakThis(message) {
    // comp : 
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I did not understand what you said please try again";
    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Boss";
        writeText(finalText);
        speech.text = finalText;
    }else if(message.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        writeText(finalText);
        speech.text = finalText;
    }else if(message.includes('name')) {
        const finalText = "My name is Jarvis";
        writeText(finalText);
        speech.text = finalText;
    }else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        writeText(finalText);
        speech.text = finalText;
    }else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        writeText(finalText);
        speech.text = finalText;
    }else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        writeText(finalText);
        speech.text = finalText;
    }else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        writeText(finalText);
        speech.text = finalText;
    }else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        writeText(finalText);
        speech.text = finalText;
    } else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        writeText(finalText);
        speech.text = finalText;
    }else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        writeText(finalText);
        speech.text = finalText;
    }else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        writeText(finalText);
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
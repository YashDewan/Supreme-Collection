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

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    // me : 
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    console.log(transcript);
    speakThis(transcript.toLowerCase());
}

function writeText(finaltxt){
    btnTxtId.innerText = finaltxt;
}

btn.addEventListener('click', ()=>{
    btnTxtId.style.display = 'block';
    btnTxtId.style.position = "fixed";
    btnTxtId.style.bottom = "65px";
    btnTxtId.style.right = "80px";
    btnTxtId.style.padding = "10px";
    btnTxtId.style.zIndex = "999";
    setTimeout(()=>{
        document.getElementById("btnTxtId").style.display = "none";
    }, 5000);
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
    }else if(message.includes('filter T shirt') || message.includes('t-shirt') || message.includes("tshirt") || message.includes('show some T shirt')){
        const newArr = arrdict.filter((e)=>{
            return ("tshirt" == e.prod);
        });
        productDisplay(newArr);
        const finalText = "Showing T shirts";
        writeText(finalText);
        speech.text = finalText;
    }else if(message.includes('filter kids wear') || message.includes('kids') || message.includes("kids wear") || message.includes('show kids wear')){
        const newArr = arrdict.filter((e)=>{
            return ("kidswear" == e.prod);
        });
        productDisplay(newArr);
        const finalText = "Showing Kids Wear";
        writeText(finalText);
        speech.text = finalText;
    }else if(message.includes('filter women lower') || message.includes("women's lower") || message.includes("ladies lowers") || message.includes('show womens lower')){
        const newArr = arrdict.filter((e)=>{
            return ("womenlower" == e.prod);
        });
        productDisplay(newArr);
        const finalText = "Showing women lowers";
        writeText(finalText);
        speech.text = finalText;
    }else if(message.includes('filter men lower') || message.includes("men's lower") || message.includes("men lower") || message.includes("gents lowers") || message.includes('show men lower')){
        const newArr = arrdict.filter((e)=>{
            return ("menlower" == e.prod);
        });
        productDisplay(newArr);
        const finalText = "Showing mens lowers";
        writeText(finalText);
        speech.text = finalText;
    }else if(message.includes('filter mens shorts') || message.includes('shorts') || message.includes("men's shorts") || message.includes('show mens shorts')){
        const newArr = arrdict.filter((e)=>{
            return ("menshort" == e.prod);
        });
        productDisplay(newArr);
        const finalText = "Showing mens summer shorts";
        writeText(finalText);
        speech.text = finalText;
    }else if(message.includes('women capri') || message.includes('capri') || message.includes('capery') || message.includes('cabery') || message.includes("women's capri")){
        const newArr = arrdict.filter((e)=>{
            return ("menshort" == e.prod);
        });
        productDisplay(newArr);
        const finalText = "Showing womens capris";
        writeText(finalText);
        speech.text = finalText;
    }else if(message.includes('women dress') || message.includes('dress') || message.includes('dresses') || message.includes("women's dress")){
        const newArr = arrdict.filter((e)=>{
            return ("womendress" == e.prod);
        });
        productDisplay(newArr);
        const finalText = "Showing womens dresses";
        writeText(finalText);
        speech.text = finalText;
    }else if(message.includes('women top') || message.includes('top') || message.includes('tops') || message.includes("women's tops")){
        const newArr = arrdict.filter((e)=>{
            return ("womentop" == e.prod);
        });
        productDisplay(newArr);
        const finalText = "Showing womens dresses";
        writeText(finalText);
        speech.text = finalText;
    }else if(message.includes('open a product') || message.includes('product') || message.includes('item') || message.includes('show me a product')){
        window.location.href = 'singleProduct.html';
        const finalText = "Opening a random product";
        writeText(finalText);
        speech.text = finalText;
    }else if(message.includes('shop') || message.includes('open shop section')){
        window.location.href = 'shop.html';
        const finalText = "Opening shop section";
        writeText(finalText);
        speech.text = finalText;
    }else if(message.includes('contact us') || message.includes('open contact section')){
        window.location.href = 'contact.html';
        const finalText = "Opening contact us section";
        writeText(finalText);
        speech.text = finalText;
    }else if(message.includes('home') || message.includes('open home section')){
        window.location.href = 'index.html';
        const finalText = "Opening home section";
        writeText(finalText);
        speech.text = finalText;
    }else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        writeText(finalText);
        speech.text = finalText;
    }else if(message.includes('open instagram')) {
        window.open("https://www.instagram.com/supremecollection_yv/", "_blank");
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
    }
    // else {
    //     window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
    //     const finalText = "I found some information for " + message + " on google";
    //     writeText(finalText);
    //     speech.text = finalText;
    // }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}
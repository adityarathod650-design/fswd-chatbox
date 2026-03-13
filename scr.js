function sendMessage(){

let input = document.getElementById("userInput").value.toLowerCase();
let chatbox = document.getElementById("chatbox");

chatbox.innerHTML += "<p class='user'><b>You:</b> " + input + "</p>";

let reply = "";

if(input.includes("hello")){
reply = "Hello! How can I help you?";
}

else if(input.includes("who are you")){
reply = "I am a simple chatbot created using HTML, CSS and JavaScript.";
}

else if(input.includes("how are you")){
reply = "I am fine. Thank you for asking!";
}

else if(input.includes("president of india")){
reply = "The President of India is Droupadi Murmu.";
}

else if(input.includes("prime minister")){
reply = "The Prime Minister of India is Narendra Modi.";
}

else{
reply = "Sorry, I don't understand that question.";
}

chatbox.innerHTML += "<p class='bot'><b>Bot:</b> " + reply + "</p>";

document.getElementById("userInput").value = "";

chatbox.scrollTop = chatbox.scrollHeight;

}
function sendMessage() {
    let inputField = document.getElementById("user-input");
    let message = inputField.value.toLowerCase();

    if (message === "") return;

    addMessage(message, "user");

    let reply = getBotReply(message);
    addMessage(reply, "bot");

    inputField.value = "";
}

function addMessage(text, sender) {
    let chatBox = document.getElementById("chat-box");

    let msg = document.createElement("div");
    msg.className = sender;
    msg.innerText = text;

    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}


/* to Add Your Portfolio Knowledge */

const faq = [
    {
        keywords: ["name", "who are you"],
        answer: "I am Govardhan, a developer passionate about DSA and web development."
    },
    {
        keywords: ["skills", "technologies","About"],
        answer: "I work with Java, DSA, HTML, CSS, and JavaScript."
    },
    {
        keywords: ["Projects"],
        answer: "You can check my projects section to see my work."
    },
    {
        keywords: ["contact", "email"],
        answer: "You can contact me through the contact section on this website."
    }
];

function getBotReply(input) {
    for (let item of faq) {
        for (let word of item.keywords) {
            if (input.includes(word)) {
                return item.answer;
            }
        }
    }
    return "I can answer questions about this portfolio only.";
}



/* Enter key Support */

document.getElementById("user-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

window.onload = function() {
    addMessage("Hi! Ask me about my portfolio 👋", "bot");
};


function toggleChat() {
    const chat = document.getElementById("chat-container");
    chat.classList.toggle("hidden");
}
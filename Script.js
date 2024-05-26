 // add classes for mobile navigation toggling
 var CSbody = document.querySelector('body');
 const CSnavbarMenu = document.querySelector('#cs-navigation');
 const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');
 
 CShamburgerMenu.addEventListener('click', function () {
     CShamburgerMenu.classList.toggle('cs-active');
     CSnavbarMenu.classList.toggle('cs-active');
     CSbody.classList.toggle('cs-open');
     // run the function to check the aria-expanded value
     ariaExpanded();
 });
 
 // checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
 function ariaExpanded() {
     const csUL = document.querySelector('#cs-expanded');
     const csExpanded = csUL.getAttribute('aria-expanded');
 
     if (csExpanded === 'false') {
         csUL.setAttribute('aria-expanded', 'true');
     } else {
         csUL.setAttribute('aria-expanded', 'false');
     }
 }
 
 // mobile nav toggle code
 const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
 for (const item of dropDowns) {
     const onClick = () => {
         item.classList.toggle('cs-active');
     };
     item.addEventListener('click', onClick);
 }           
 
     // Get all the image elements
 const images = document.querySelectorAll('.cs-icon');
 
 // Add click event listener to each image
 images.forEach(image => {
     image.addEventListener('click', () => {
         // Get the parent list item of the clicked image
         const listItem = image.closest('.cs-item');
         
         // Get the information associated with the clicked image within the parent list item
         const info = listItem.dataset.info;
 
         // Show the information (you can change this to any desired way of displaying)
         alert(info);
     });
 });
 
 
 
 document.addEventListener("DOMContentLoaded", function() {
    const chatbotImage = document.getElementById("chatbot-image");
    const chatInterface = document.getElementById("chat-interface");
    const closeChatBtn = document.getElementById("close-chat");
    const sendBtn = document.getElementById("send-btn");
    const chatBox = document.getElementById("chat-box");
    const chatInput = document.getElementById("chat-input");

    function toggleChat() {
        chatInterface.classList.toggle("hidden");
    }

    chatbotImage.addEventListener("click", toggleChat);

    closeChatBtn.addEventListener("click", function() {
        chatInterface.classList.add("hidden");
    });

    sendBtn.addEventListener("click", function() {
        sendMessage();
    });

    chatInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

    document.addEventListener("keydown", function(e) {
        if (e.key === "Tab") {
            e.preventDefault(); // Prevent the default tab behavior
            toggleChat();
        }
    });

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message !== "") {
            const userMessage = document.createElement("div");
            userMessage.classList.add("user-message");
            userMessage.textContent = "You: " + message;
            chatBox.appendChild(userMessage);

            // Simulate bot response
            setTimeout(() => {
                const botMessage = document.createElement("div");
                botMessage.classList.add("bot-message");
                botMessage.textContent = "Bot: " + getBotResponse(message);
                chatBox.appendChild(botMessage);
                chatBox.scrollTop = chatBox.scrollHeight;
            }, 1000);

            chatInput.value = "";
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }

    function getBotResponse(message) {
        // Simulate a simple bot response
        return "Hello! How can I help you?";
    }
});




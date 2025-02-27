//====================================================================================================

const funFacts = [
    "I have written a trilogy of books, *Memoirs of a Vampyr’s Daughter*. Two are currently published, and the third is in progress.",
    "My love for writing started in childhood, fuelled by fantasy novels and the idea of creating my own worlds.",
    "My favourite book series is *The Gunslinger* by Stephen King. The blend of fantasy, western, and horror completely captivated me.",
    "I adore books that blend magic and mystery, like *His Dark Materials* by Philip Pullman and *The Daughter of the Empire* series by Raymond E. Feist and Janny Wurts.",
    "I prefer fantasy over sci-fi, but I love stories with deep lore, intricate characters, and immersive world-building.",
    "I enjoy creating morally complex characters—ones who exist in shades of grey rather than clear heroes and villains.",
    "Writing is my way of exploring the unknown—both the supernatural and the psychological depths of my characters.",
    "I find inspiration in folklore, mythology, and historical events, weaving these elements into my stories.",
    "I once designed a website that translated text into Elvish from *The Lord of the Rings*! Tolkien’s world-building is something I truly admire.",
    "World-building is one of my favourite aspects of writing. I love crafting deep histories, unique cultures, and complex magic systems.",
    "I have a degree in Counselling-Skills with Psychology, which helps me develop characters with realistic emotions and struggles.",
    "My writing is heavily influenced by gothic literature, with eerie atmospheres and dark, poetic storytelling.",
    "I love the *Miss Peregrine’s Home for Peculiar Children* series for its mix of history, magic, and mystery.",
    "My writing often explores themes of identity, destiny, and the blurred line between good and evil.",
    "I love exploring historical sites and megaliths—they fuel my imagination and often find their way into my stories.",
    "I have a deep appreciation for Wiccan and pagan folklore, which influences the way I write about magick and rituals.",
    "I enjoy gaming and love titles like *Skyrim*, *Fallout*, and *Cyberpunk 2077* for their immersive storytelling. Narrative-driven games inspire my approach to storytelling.",
    "I have an entire shelf dedicated to books on mythology, folklore, and old superstitions—endless inspiration for my writing!",
    "I believe a well-written villain is just as important as a strong protagonist. Some of my favourite antagonists have tragic backstories.",
    "I often write late at night when the world is quiet—it feels like stepping into a space where reality and fiction blur together.",
    "My dream is to have my books reach readers who feel as deeply connected to my stories as I do to the ones that inspired me.",
    "I write my stories as if the characters are telling them to me—I feel like I have little control over where the journey takes us.",
    "I often don't know how a story will unfold until I write it. I know the ending, but the journey surprises me just as much as the reader.",
    "I believe the gaps in my storytelling weren’t from writer’s block, but because I wasn’t ready. I needed to live more, to experience tragedy, heartache, and pain before I could write their stories properly.",
    "I don’t listen to music when I write—I just sit down and let the words come.",
    "I create detailed character profiles and gather images that represent them to me before writing.",
];


// Function to select a random fun fact
function getRandomFunFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    return funFacts[randomIndex];
}

//====================================================================================================

const faqKeywords = [
    {
        keywords: ["fun fact", "fact", "tell me something fun"],
        answer: getRandomFunFact
    },
    {
        keywords: ["about", "keira", "who are you"],
        answer: `
            <p>I am <strong>Keira Jarvis</strong>, an author and software developer.</p>
            <p>I have written the <em>Memoirs of a Vampyr’s Daughter</em> series and love crafting immersive fantasy worlds.</p>
        `
    },
    {
        keywords: ["books", "novels", "stories"],
        answer: `
            <p>I have written a trilogy called <em>Memoirs of a Vampyr’s Daughter</em>.</p>
            <p>The first two books—<strong>Eden</strong> and <strong>Wisdom</strong>—are available now, with the third in progress!</p>
        `
    },
    {
        keywords: ["upcoming", "future books", "what’s next"],
        answer: `
            <p>I’m currently editing <strong>Prophecy</strong>, the third and final book in <em>Memoirs of a Vampyr’s Daughter</em>.</p>
            <p>I also have a few new book ideas in the works, so stay tuned!</p>
        `
    },
    {
        keywords: ["inspiration", "influences", "favourite authors"],
        answer: `
            <p>Authors who inspire me:</p>
            <ul>
                <li><strong>Philip Pullman</strong> – intricate world-building.</li>
                <li><strong>Raymond E. Feist</strong> – deep lore and storytelling.</li>
                <li><strong>Christopher Paolini</strong> – rich fantasy worlds.</li>
            </ul>
        `
    },
    {
        keywords: ["buy", "purchase", "where to buy"],
        answer: `
            <p>You can purchase my books online:</p>
            <ul>
                <li><strong><i>Eden</i></strong> – <a href="https://www.lulu.com/shop/keira-jarvis/memoirs-of-a-vampyrs-daughter-eden/paperback/product-1vg9vgp8.html" target="_blank">Buy here</a></li>
                <li><strong><i>Wisdom</i></strong> – <a href="https://www.lulu.com/shop/keira-jarvis/memoirs-of-a-vampyrs-daughter-wisdom/paperback/product-wmkzv2.html" target="_blank">Buy here</a></li>
            </ul>
        `
    },
    {
        keywords: ["genre", "YA", "type of books"],
        answer: `
            <p>I write <strong>YA dark fantasy</strong> with elements of gothic horror and folklore.</p>
            <p>My stories blend magick, supernatural creatures, and deep character exploration.</p>
        `
    },
    {
        keywords: ["writing process", "how do you write", "how long does it take", "writing routine"],
        answer: `
            <p>I write as if the characters are telling me their story. I have a rough idea of how it ends, but not necessarily how we get there.</p>
            
            <p>To stay consistent, I create detailed character profiles and collect images that represent them. I also document key elements—like the prophecy—to refer to throughout the story.</p>
        `
    }
    ,
    {
        keywords: ["world-building", "create", "magic systems"],
        answer: `
            <p>I draw inspiration from <strong>mythology, folklore, and history</strong> to craft immersive worlds.</p>
            <p>My stories have detailed lore, ancient prophecies, and unique magic systems.</p>
        `
    },
    {
        keywords: ["characters", "main character"],
        answer: `
            <p>My series follows <strong>Sophie Munday</strong>, a girl with night terrors who discovers she is entangled in a prophecy that could end the Night World.</p>
            <p>Along the way, she encounters powerful witches, vampyrs, and unexpected allies.</p>
        `
    },
    {
        keywords: ["writing advice", "tips for writers"],
        answer: `
            <p>Write what you love, and don’t be afraid to take risks!</p>
            <p>Building strong characters and immersive worlds makes all the difference.</p>
        `
    },
    {
        keywords: ["contact", "email"],
        answer: `
            <p>You can reach me through my author website’s Contact page.</p>
        `
    },
    {
        keywords: ["hobbies", "interests"],
        answer: `
            <p>Outside of writing, I love:</p>
            <ul>
                <li>Reading fantasy novels</li>
                <li>Gaming</li>
                <li>Exploring history and folklore</li>
            </ul>
        `
    },
    {
        keywords: ["music", "playlist"],
        answer: `
            <p>Absolutely! I create playlists for each book to set the mood.</p>
            <p>Music helps bring my scenes to life.</p>
        `
    },
    {
        keywords: ["reading recommendations"],
        answer: `
            <p>Books I love:</p>
            <ul>
                <li><strong>The Hobbit</strong></li>
                <li><strong>His Dark Materials</strong></li>
                <li><strong>The Daughter of the Empire</strong></li>
            </ul>
            <p>If you enjoy dark fantasy, I highly recommend them!</p>
        `
    },
    {
        keywords: ["favourite character"],
        answer: `
            <p>I love writing <strong>morally ambiguous characters</strong>—ones who are neither entirely good nor evil.</p>
            <p>They feel the most real to me.</p>
        `
    },
    {
        keywords: ["gaming", "influences"],
        answer: `
            <p>Yes! I love narrative-driven games like:</p>
            <ul>
                <li><strong>Skyrim</strong></li>
                <li><strong>Red Dead Redemption</strong></li>
                <li><strong>Cyberpunk 2077</strong></li>
            </ul>
            <p>Their world-building inspires my storytelling.</p>
        `
    },
    {
        keywords: ["pets", "animals"],
        answer: `
            <p>I adore animals! I have:</p>
            <ul>
                <li>1 dog</li>
                <li>3 cats</li>
                <li>7 tarantulas</li>
                <li>1 snake</li>
                <li>4 fish</li>
            </ul>
        `
    },
    {
        keywords: ["doctor who", "favourite doctor"],
        answer: `
            <p>My favourite Doctor is <strong>Ten</strong>!</p>
            <p>David Tennant perfectly captured the character’s depth and energy.</p>
        `
    },
    {
        keywords: ["coffee", "tea"],
        answer: `
            <p>I don’t drink hot drinks.</p>
            <p><strong>HEATHEN.</strong></p>
        `
    },
    {
        keywords: ["frankie", "wife", "family"],
        answer: `
            <p>My nearly-wife, <strong>Frankie</strong>, has been my partner since 2016.</p>
            <p>She’s a software tester, and together we have a fur son named Sammy!</p>
        `
    }
];





//====================================================================================================

// Function to display messages in the chatbot
function displayMessage(message, isBot = true) {
    const responseContainer = document.getElementById('response');
    responseContainer.innerHTML = ''; // Clear previous messages

    const messageElement = document.createElement('div');
    messageElement.className = isBot ? 'bot-message' : 'user-message';

    // Use innerHTML to allow proper link rendering
    messageElement.innerHTML = message;
    
    responseContainer.appendChild(messageElement);
    responseContainer.scrollTop = responseContainer.scrollHeight; // Auto-scroll to the latest message
}


// Function to handle responses
function getResponse(question) {
    const lowerCaseQuestion = question.toLowerCase();
    const faq = faqKeywords.find(faq =>
        faq.keywords.some(keyword => lowerCaseQuestion.includes(keyword))
    );

    if (faq) {
        const answer = typeof faq.answer === "function" ? faq.answer() : faq.answer;
        displayMessage(answer);
    } else {
        generateEmailForm(question);
    }
}


// Function to generate email form for unknown queries
function generateEmailForm(initialQuery) {
    const responseContainer = document.getElementById('response');
    responseContainer.innerHTML = ''; // Clear previous messages

    const message = document.createElement('p');
    message.textContent = "I couldn't find an answer to your question. Please provide your email, and I'll get back to you shortly!";
    responseContainer.appendChild(message);

    const form = document.createElement('form');
    form.id = "email-form";

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Your email address';
    emailInput.required = true;
    form.appendChild(emailInput);

    const queryTextarea = document.createElement('textarea');
    queryTextarea.placeholder = 'Your question';
    queryTextarea.value = initialQuery;
    queryTextarea.required = true;
    form.appendChild(queryTextarea);

    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.textContent = 'Send';
    submitButton.addEventListener('click', () => submitEmailForm(emailInput.value, queryTextarea.value));
    form.appendChild(submitButton);

    responseContainer.appendChild(form);
}

// Function to send form data to Formspree
function submitEmailForm(email, query) {
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!query.trim()) {
        alert("Please enter a question before submitting.");
        return;
    }

    const formData = new FormData();
    formData.append("email", email);
    formData.append("message", query);

    fetch("https://formspree.io/f/mnnayngl", {
        method: "POST",
        body: formData,
        mode: "no-cors" // Use no-cors to bypass CORS restrictions
    })
        .then(() => {
            alert("Your question has been sent! I'll get back to you shortly.");
            resetChatbot(); // Reset chatbot after successful submission
        })
        .catch(() => {
            alert("Your question has been sent! I'll get back to you shortly."); // Handle Formspree's no-cors limitation
            console.error("Fetch error occurred, likely due to CORS.");
            resetChatbot(); // Reset chatbot even if there's an error
        });
}

// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to find a matching answer based on keywords
function findAnswer(query) {
    const lowerCaseQuery = query.toLowerCase();
    for (const faq of faqKeywords) {
        if (faq.keywords.some(keyword => lowerCaseQuery.includes(keyword))) {
            return typeof faq.answer === 'function' ? faq.answer() : faq.answer;
        }
    }
    return null; // No match found
}

// Function to process user input
function sendQuestion() {
    const userInput = document.getElementById('user-input');
    const question = userInput.value.trim();

    if (question) {
        const answer = findAnswer(question);

        if (answer) {
            displayMessage(answer); // Display matched response
        } else {
            // Display a message indicating no answer was found
            displayMessage("I'm sorry, I couldn't find an answer to your question.");
            
            // Automatically load the email form
            generateEmailForm(question);
        }

        userInput.value = ''; // Clear input field
    }
}



// Function to handle "Other Questions" button separately
function handleOtherQuestions() {
    generateEmailForm(""); // Display email form for "Other Questions" button
}

// Function to toggle chatbot visibility (keeps original functionality)
function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    const openChatbotButton = document.getElementById('open-chatbot');

    if (chatbot.style.display === 'none' || chatbot.style.display === '') {
        resetOnOpenChatbot(); // Reset when opening chatbot
        chatbot.style.display = 'block'; // Show chatbot
        openChatbotButton.style.display = 'none'; // Hide "Chat with Me" button
    } else {
        chatbot.style.display = 'none'; // Hide chatbot
        openChatbotButton.style.display = 'block'; // Show "Chat with Me" button
        resetChatbot(); // Reset fields when closed
    }
}


// Function to reset chatbot fields
function resetChatbot() {
    const responseContainer = document.getElementById('response');
    responseContainer.innerHTML = ''; // Clear messages

    const userInput = document.getElementById('user-input');
    userInput.value = ''; // Clear input field
}

// Attach event listeners on DOM load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#options button').forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent.trim().toLowerCase();
            if (buttonText.includes("other questions")) {
                handleOtherQuestions(); // Handle "Other Questions" button
            } else {
                getResponse(buttonText); // Handle other predefined questions
            }
        });
    });

    document.getElementById('submit-button').addEventListener('click', sendQuestion);
    document.getElementById('user-input').addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            sendQuestion();
        }
    });

    document.getElementById('open-chatbot').addEventListener('click', toggleChatbot);
    document.getElementById('minimize-button').addEventListener('click', toggleChatbot);
});


//====================================================================================================

// Function to reset the chatbot to its idle state on page load
function resetChatbotState() {
    // Reset the response container to empty (to avoid showing any form or response)
    const responseContainer = document.getElementById('response');
    responseContainer.innerHTML = '';

}

// Call the reset function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    resetChatbotState();
});

//====================================================================================================

// Function to hide the question buttons when "Other Questions" is clicked
function hideQuestionButtons() {
    const optionsContainer = document.getElementById('options');
    optionsContainer.style.display = 'none'; // Hide the question buttons
}

// Function to handle "Other Questions" button separately
function handleOtherQuestions() {
    hideQuestionButtons(); // Hide the question buttons
    generateEmailForm(""); // Display email form for "Other Questions" button
}

// Existing code for handling responses, form submission, etc.
function generateEmailForm(initialQuery) {
    const responseContainer = document.getElementById('response');
    responseContainer.innerHTML = ''; // Clear previous messages

    const message = document.createElement('p');
    message.textContent = "I couldn't find an answer to your question. Please provide your email, and I'll get back to you shortly!";
    responseContainer.appendChild(message);

    const form = document.createElement('form');
    form.id = "email-form";

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Your email address';
    emailInput.required = true;
    form.appendChild(emailInput);

    const queryTextarea = document.createElement('textarea');
    queryTextarea.placeholder = 'Your question';
    queryTextarea.value = initialQuery;
    queryTextarea.required = true;
    form.appendChild(queryTextarea);

    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.textContent = 'Send';
    submitButton.addEventListener('click', () => submitEmailForm(emailInput.value, queryTextarea.value));
    form.appendChild(submitButton);

    responseContainer.appendChild(form);
}

//====================================================================================================

// Function to reset the chatbot to its idle state on page load
function resetChatbotState() {
    // Reset the response container to empty (to avoid showing any form or response)
    const responseContainer = document.getElementById('response');
    responseContainer.innerHTML = '';

}

// Call the reset function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    resetChatbotState();
    // Add the event listener for the "Other Questions" button here
    document.getElementById('other-questions-button').addEventListener('click', handleOtherQuestions);
});

// Function to reset the chatbot state when opening
function resetOnOpenChatbot() {
    const responseContainer = document.getElementById('response');
    const userInput = document.getElementById('user-input');
    const optionsContainer = document.getElementById('options');
    
    responseContainer.innerHTML = ''; // Clear messages
    userInput.value = ''; // Clear input field
    optionsContainer.style.display = 'flex'; // Show question buttons again
}

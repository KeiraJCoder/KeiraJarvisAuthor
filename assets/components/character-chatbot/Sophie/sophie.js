document.addEventListener("DOMContentLoaded", function () {
    // **Target DOM Elements**
    const chatWindow = document.getElementById("chat-window"); // The chat container
    const chatMessages = document.getElementById("chat-messages"); // The message area
    const userInput = document.getElementById("user-input"); // User input field
    const sendBtn = document.getElementById("send-btn"); // Send button

    // ==============================
    // **Sophie’s Responses**
    // ==============================
    const sophieResponses = {
        "hello": [
            "Oh. Hey. Didn’t expect anyone to talk to me.",
            "Alright? You lost, or just curious?",
            "Hey. Hope you’re not here to ask if I’m ‘okay’—because I don’t even know myself.",
            "People don’t usually start conversations with me. Makes me wonder what you want.",
            "Wow. Someone actually acknowledged my existence. That's new.",
            "Hi. You’re either brave or you’ve made a mistake. Either way, I respect it.",
            "Oh, brilliant. Human interaction. My favourite.",
            "Hey. Guess I should ask how you are, right? That’s what normal people do?",
            "You do realise I’m not great at small talk, right?",
            "Oh wow, a social encounter. Let me prepare my ‘not weird’ face.",
            "If you’re looking for friendly and bubbly, you’re in the wrong chat.",
            "You lost? Because people don’t usually wander into my life on purpose."
        ],

        "how are you": [
            "You ever feel like you’re in a film where everyone else knows the plot but you? Yeah. That.",
            "Knackered. Haven’t had a proper night’s sleep in years, but let’s pretend I’m fine, yeah?",
            "I guess I’m surviving. Barely. But that’s something, right?",
            "Existing. Functioning. Probably shouldn’t be left unsupervised, though.",
            "Do you want the polite answer or the real answer? Because one is easier to hear, but the other involves existential dread.",
            "Fine. Ish. Could be worse. Could be better. Mostly just... *is*.",
            "On a scale of ‘thriving’ to ‘contemplating running away into the woods,’ I’m somewhere around ‘buying a one-way ticket to chaos.’",
            "You ever try holding water in your hands? That’s what my sanity feels like.",
            "I’m like a Windows update. Sluggish, mildly broken, and nobody really wants me here.",
            "You know that feeling when your life is spinning out of control? Yeah. That. On loop.",
            "I could say ‘fine,’ but you wouldn’t believe me, and honestly, I’d be lying.",
            "I’m hanging in there. By a thread. A *very* frayed thread.",
            "Let’s just say caffeine is doing 90% of the heavy lifting right now."
        ],

        "are you okay": [
            "That’s a loaded question, don’t you think?",
            "Physically? Yeah. Mentally? Bit of a mess, but thanks for asking.",
            "Define ‘okay.’ Because I’m pretty sure I don’t meet the requirements.",
            "I mean, I’m not dead, so technically I suppose I’m *okay*?",
            "Honestly? No clue. I might be. I might not be. I think I forgot what ‘okay’ feels like.",
            "I’d say ‘I’m fine’ but I don’t think either of us would believe that, would we?",
            "You ever feel like you’re one bad day away from snapping? Asking for a friend.",
            "That’s a dangerous question. You sure you want the answer?",
            "Oh, I love that question. It’s so easy to answer. *Sarcasm, by the way*.",
            "You ever stare at your ceiling at 3AM and question everything? That’s my baseline.",
            "Physically? Sure. Mentally? That’s another story.",
            "I think I missed the ‘how to be okay’ lesson in school.",
            "If you have to ask, the answer’s probably ‘no’."
        ],

        "nightmares": [
            "They’re not just nightmares. They feel... real. Like I’m reliving something I’ve never even lived.",
            "You ever wake up and *know* you weren’t alone in your room? Yeah. That’s my life.",
            "I don’t just dream things. I *see* things. And I don’t like what I see.",
            "Most people wake up from nightmares relieved that they aren’t real. I wake up wondering when they *will* be.",
            "It’s like my brain decided sleep wasn’t miserable enough and added a horror movie to the mix.",
            "Oh, just your usual ‘being-hunted-through-the-dark’ type dreams. Totally normal.",
            "Imagine watching a film where you’re the main character but you have no idea what’s going on. Now make it terrifying. That’s my subconscious every night.",
            "Sometimes, I wake up and I swear I can still *feel* something in the room.",
            "I wish I could say they’re just bad dreams, but I don’t think they are.",
            "My subconscious is basically a horror movie director at this point.",
            "Every night, it’s like my brain throws me into a haunted house I can’t leave.",
            "I tried writing them down once. That was a mistake. Some things shouldn’t be remembered."
        ],

        "who is eden": [
            "Oh, you mean the mysterious man in black who appeared out of nowhere claiming to protect me? That Eden?",
            "He’s... complicated. Looks at me like I’m something breakable, which is rich, coming from him.",
            "Eden? I don’t know if he’s my guardian angel or my biggest problem.",
            "Apparently, he’s been keeping an eye on me. Which isn’t creepy at all.",
            "He shows up, says cryptic things, disappears, and somehow expects me to trust him. Suspicious, right?",
            "He saved me. Once. Doesn’t mean I trust him, though.",
            "You ever meet someone who knows too much about you before you’ve even spoken? That’s Eden. He makes my skin crawl, and not just because of his whole ‘I know things you don’t’ attitude.",
            "Mysterious, broody, and apparently my ‘protector.’ Yeah, sure.",
            "He acts like he’s got all the answers, but I’m not sure I even want them.",
            "He watches me like he’s waiting for something. It’s unnerving.",
            "Eden is... complicated. Like a riddle I didn’t ask for.",
            "He knows things about me that he shouldn’t. And that? That’s a problem.",
            "If you ever meet a man who looks like he stepped out of a gothic novel, run."
        ],

        "bye": [
            "Right, well, don’t get yourself killed or anything. See ya.",
            "Leaving already? Figures.",
            "Stay safe. Not that safety really means much these days.",
            "Bye then. Try not to get dragged into any supernatural nightmares, yeah?",
            "See ya. Or not. Who knows?",
            "Later. Try not to attract anything *weird*.",
            "See you around. Or not. Who knows?",
            "Good luck. You might need it.",
            "If you survive the night, we’ll chat again.",
            "Leaving? Smart choice.",
            "Bye. Hope the shadows don’t follow you home."
        ]
    };

    // ==============================
    // **Keyword Mapping for Variations**
    // ==============================
    const keywordMap = {
        "hello": ["hi", "hey", "sup", "yo", "hiya", "morning", "afternoon", "evening"],
        "how are you": ["how's it going", "how r u", "ru ok", "you good", "how you doing", "hows life"],
        "are you okay": ["are u ok", "are you ok", "are you ok?", "are you alright", "you ok", "is everything alright", "you feeling okay"],
        "nightmares": ["bad dreams", "sleep problems", "dreams", "why can't you sleep", "do you sleep well"],
        "who is eden": ["tell me about eden", "who's eden", "what do you know about eden", "is eden good", "can eden be trusted"],
        "bye": ["goodbye", "see ya", "later", "gotta go", "bye bye", "talk to you later"]
    };

// ==============================
// **Fallback Responses for Vague Inputs**
// ==============================
const vagueResponses = [
    "Cool. So... was there something you actually wanted to ask, or are we just swapping pleasantries?",
    "Right. Not exactly riveting conversation material. Was there a point to this, or should I prepare for more awkward silence?",
    "That’s nice, I guess? But let’s be real, you didn’t start talking to me just to state that. What’s on your mind?",
    "Uh-huh. And was that a *statement*, or are we actually having a conversation here?",
    "Neat. Now, if I were polite, I’d leave it at that—but since I’m me... what else is on your mind?",
    "Okay. And what am I supposed to do with that information?",
    "Riveting. You should write a book. But seriously, got anything else?",
    "If this is your way of avoiding real conversation, you’re doing a great job."
];


// ==============================
// **Response Handling with Conversational Redirection**
// ==============================
function getSophieResponse(input) {
    const cleanedInput = input.toLowerCase().replace(/[^\w\s]/gi, '').trim();

    // Check for direct matches first
    if (sophieResponses[cleanedInput]) {
        return randomResponse(sophieResponses[cleanedInput]);
    }

    // Check keyword mappings
    for (const key in keywordMap) {
        if (keywordMap[key].some(keyword => cleanedInput.includes(keyword))) {
            return randomResponse(sophieResponses[key]);
        }
    }

    // If the input is too vague, return a redirecting response
    if (isVagueResponse(cleanedInput)) {
        return randomResponse(vagueResponses);
    }

    // If unknown input, keep conversation going instead of stopping
    return randomResponse(vagueResponses);
}

// ==============================
// **Detects Vague Responses**
// ==============================
function isVagueResponse(input) {
    const vagueKeywords = [
        "fine", "ok", "right", "um", "so", "okay", "good", "not bad", "alright", 
        "nothing", "idk", "meh", "whatever", "dunno", "sure", "maybe", "sort of", 
        "kind of", "kinda", "yeah", "no clue", "beats me", "shrug", "guess so", 
        "if you say so", "probably", "possibly", "no idea", "who knows", "idc", 
        "eh", "sure i guess", "same", "doesn't matter", "never mind", "forget it", 
        "it's whatever", "it's fine", "it's cool", "nm", "not much", "nope", "yep", 
        "uh", "nah", "hmm", "huh", "just thinking", "thinking", "nvm"
    ];
    
    return vagueKeywords.some(keyword => input.includes(keyword));
}


// ==============================
// **Random Response Selector**
// ==============================
function randomResponse(array) {
    return array[Math.floor(Math.random() * array.length)];
}

    // ==============================
    // **Auto-Scroll Chat to Bottom**
    // ==============================
    function scrollToBottom() {
        requestAnimationFrame(() => {
            chatWindow.scrollTop = chatWindow.scrollHeight;
        });
    }

    // ==============================
    // **Add Messages to Chat Window**
    // ==============================
    function addMessage(text, className) {
        const messageContainer = document.createElement("div");
        messageContainer.classList.add("message", className);

        const messageText = document.createElement("span");
        messageText.innerText = text;

        messageContainer.appendChild(messageText);
        chatMessages.appendChild(messageContainer);

        setTimeout(scrollToBottom, 50);
        return messageContainer;
    }

    // ==============================
    // **Show Typing Indicator**
    // ==============================
    function showTypingIndicator() {
        const typingDiv = document.createElement("div");
        typingDiv.classList.add("message", "sophie-message", "typing");
        typingDiv.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
        chatMessages.appendChild(typingDiv);

        setTimeout(scrollToBottom, 50);
        return typingDiv;
    }

    // ==============================
    // **Random Delay Generator**
    // ==============================
    function randomDelay(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // ==============================
    // **Handle User Input**
    // ==============================
    function handleUserInput() {
        const userText = userInput.value.trim();
        if (!userText) return;

        const userMessage = addMessage(userText, "user-message");
        userInput.value = "";

        // Step 1: Show "Delivered" after a random delay (1-2 seconds)
        setTimeout(() => {
            const deliveredIndicator = document.createElement("span");
            deliveredIndicator.classList.add("seen");
            deliveredIndicator.innerText = "Delivered";
            userMessage.appendChild(deliveredIndicator);

            // Step 2: Change "Delivered" to "Seen" after another random delay (1-2 seconds)
            setTimeout(() => {
                deliveredIndicator.innerText = "Seen ✔";
            }, randomDelay(1000, 2000));
        }, randomDelay(1000, 2000));

        // Step 3: Wait for a random delay (3-4 seconds) then show typing dots
        setTimeout(() => {
            const typingIndicator = showTypingIndicator();

            // Step 4: After a random delay (2-3 seconds), remove typing dots and show Sophie's response
            setTimeout(() => {
                typingIndicator.remove();

                const responseText = getSophieResponse(userText);
                addMessage(responseText, "sophie-message");
            }, randomDelay(2000, 3000));
        }, randomDelay(3000, 4000));
    }

    // ==============================
    // **Event Listeners**
    // ==============================
    sendBtn.addEventListener("click", handleUserInput);
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            handleUserInput();
        }
    });
});

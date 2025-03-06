document.addEventListener("DOMContentLoaded", function () {
    // **Target DOM Elements**
    const chatContainer = document.getElementById("chat-container");
    const chatWindow = document.getElementById("chat-window");
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
    const openChatBtn = document.getElementById("open-chat-btn");
    const minimizeChatBtn = document.getElementById("minimize-chat-btn");

    // ==============================
    // **Toggle Chat Visibility (Open & Minimize)**
    // ==============================
    // Ensure chat starts hidden
    chatContainer.style.display = "none";
    chatContainer.style.opacity = "0";
    chatContainer.style.transition = "opacity 0.3s ease-in-out";

    // Open Chat with smooth fade-in
    openChatBtn.addEventListener("click", function () {
        chatContainer.style.display = "block";
        setTimeout(() => {
            chatContainer.style.opacity = "1";
        }, 50);
        // Keep the Open Chat button in the flow when hidden
        openChatBtn.style.visibility = "hidden";
    });

    // Minimize Chat with smooth fade-out
    minimizeChatBtn.addEventListener("click", function () {
        chatContainer.style.opacity = "0";
        setTimeout(() => {
            chatContainer.style.display = "none";
            openChatBtn.style.visibility = "visible";
        }, 300);
    });

    // ==============================
    // **Global Fallback Variables**
    // ==============================
    // Global array of vague responses used for fallback if input is too vague
    const vagueResponses = [
        "Cool. So… did you actually want to say something, or are we just filling the silence?",
        "Right. And that’s relevant because…?",
        "Nice one. Anyway, what’s actually going on?",
        "Wow. Edge-of-my-seat stuff. Truly thrilling.",
        "Ah, classic. The verbal equivalent of a shrug.",
        "Okay, but like… was there supposed to be a point?",
        "Neat. Do I give you a round of applause, or…?",
        "Fascinating. Truly groundbreaking. What else you got?",
        "Compelling. Can’t wait for the next episode of ‘Random Things You Just Said.’",
        "Uh-huh. And am I meant to be reacting to that?",
        "Right, yeah, cool. But what do you actually want?",
        "I feel like that was just words, no real message.",
        "Oh, totally. That was *exactly* what I wanted to hear today.",
        "Okay. And I’m supposed to do what with that information?",
        "Lovely stuff. Now, what’s the *real* reason you started talking?",
        "Oh, for sure. This is definitely how I wanted to spend my time.",
        "Nice one. Real contribution to the conversation, that.",
        "So, are we actually talking, or are we just making noises?",
        "I mean… you’re *saying* things, but are we communicating?",
        "Brilliant. Just *brilliant*. Next topic?",
        "Right. Do I act impressed, or are we moving on?",
        "Absolutely mind-blowing stuff. Really changing lives here.",
        "Wow, yeah, no, that’s totally *so* important.",
        "Oh, yeah. This was exactly the chat I was hoping for.",
        "Neat. Now, if I *cared*, this is where I’d ask a follow-up question.",
        "Oh, definitely. You should absolutely write that in your diary.",
        "Love that for you. But what’s actually up?",
        "Top-tier conversation skills. We should do this *all* the time.",
        "That’s cool. In a ‘has nothing to do with me’ kind of way.",
        "Oh, 100%. Definitely worth mentioning.",
        "Stunning revelation. What’s the next bombshell?",
        "Okay, so do I react or pretend I didn’t hear that?",
        "Groundbreaking. Scientists should study this conversation.",
        "Oh, for sure. This will go down in history as *The Greatest Chat Ever*.",
        "Right, so is there a main event coming or was that it?",
        "Is this the warm-up, or are we done here?",
        "Ah yes, the age-old art of saying something just to say something.",
        "That’s… yeah. That’s a thing you just said.",
        "Amazing stuff. Can’t wait to tell literally no one about this.",
        "Iconic. Truly iconic. What’s next?",
        "Mmm, yes. Fascinating. Please, do go on. Or don’t.",
        "Yeah, no, this is definitely how I wanted to spend my day.",
        "Oh, yeah, for sure. Absolutely crucial info, that.",
        "Brilliant input. World-class conversation, really.",
        "Stunning. Just absolutely stunning dialogue here.",
        "Wow. I feel like I’ve grown as a person hearing that.",
        "I’ll be thinking about this for the next *zero* seconds.",
        "Solid chat. We should get this printed and framed.",
        "Love that. Shall we move on to something that matters?",
        "Not gonna lie, I almost blinked out of existence there.",
        "Oh, this is good. This is *so* good. No notes.",
        "Okay, but like… were you *trying* to make this awkward?",
        "Incredible. Simply incredible. What’s *next* on your mind?",
        "A truly essential contribution to the conversation. Really elevating the mood."
    ];

    // Global array of vague keywords for detecting vague input
    const vagueKeywords = ["um", "uh", "like", "hmm"];

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

        "who are you": [
            "Oh, right, introductions. Sophie Munday. Fifteen...ish. Professional insomniac. Amateur at surviving weird supernatural nonsense.",
            "Who am I? Now *that* is a loaded question.",
            "Depends who you ask. Some would say ‘trouble.’ Others would say ‘walking disaster.’ They’d all be right.",
            "Just your average girl with a few... *complications*. Nightmares. Weird visions. A questionable family history. You know, the usual.",
            "I could say ‘Sophie Munday,’ but something tells me that’s not really what you’re asking.",
            "I don’t even know anymore. Every time I think I’ve got a handle on things, the universe laughs and throws something else at me.",
            "Right now? I’m just someone trying to figure out what the hell is going on. And failing spectacularly.",
            "I used to think I was normal. Turns out, normal is *really* not on the cards for me.",
            "Some days I feel like a person. Other days I feel like a puzzle that’s missing half the pieces.",
            "I don’t think I even know who I am yet. But apparently, a lot of people seem *very* interested in figuring it out for me.",
            "A girl. A problem. A question without an answer. Take your pick."
        ],

        "school": [
            "School? Yeah, I do alright. Teachers still tell me I should ‘apply myself more.’ Maybe if I wasn’t living in a sleep-deprived horror film, I’d have the energy.",
            "Chemistry’s kinda cool. Feels like magick, except it follows rules. Unlike my life.",
            "Physics used to make me feel small. Now? I just wonder if I can bend reality instead of studying it.",
            "I swear, if one more teacher tells me to ‘think about my future,’ I’m gonna scream. What future?",
            "Staying awake in class is a game I keep losing. But sure, let’s pretend I should be worrying about career goals."
        ],

        "music": [
            "Mum listens to ‘classic rock.’ You know, old guys screaming about war and drugs. It’s alright, but I’ll never admit that to her.",
            "Music? Anything that drowns out my thoughts. Which is a *very* short list.",
            "I pretend to hate Mum’s music, but I catch myself humming it sometimes. Tragic, really.",
            "If I admitted to liking old rock, I’d officially be a social outcast. Not that I’m not already."
        ],

        "books": [
            "You ever read a book that makes you wish you lived in another world? Yeah. Except now I’m wondering if I actually do.",
            "Fantasy books were my escape. Turns out, reality wanted in on the fun too.",
            "I used to wish dragons were real. Now, I’m not sure I want to know what else is out there.",
            "Books don’t lie to you. People do. That’s probably why I prefer them."
        ],

        "movies": [
            "Lord of the Rings? I fell asleep in the cinema. That’s a solid review, right?",
            "Movies are fine. Unless they’re long. Or confusing. Or make me think too much. So, most of them.",
            "I don’t have the attention span for movies. My brain is too busy being haunted."
        ],

        "friends": [
            "I don’t ‘do’ friendships. Tried it once. Mum made it unbearable. Never again.",
            "I sit near people at lunch. That counts, right?",
            "Acquaintances? Sure. Friends? That’s a different question.",
            "I don’t let people in. Not because I don’t want to. Because I don’t know how."
        ],

        "romance": [
            "Romance? Yeah, that’s at the bottom of my priority list, somewhere between ‘join a cult’ and ‘willingly go outside.’",
            "Love? Have you *met* people? Hard pass.",
            "I’m a little busy dealing with nightmares and existential dread, thanks.",
            "If anyone’s romantically interested in me, they should probably reassess their life choices."
        ],

        "mum": [
            "How do I feel about my mum? Right now? Somewhere between ‘I love her’ and ‘I want to throw something at a wall.’",
            "She lied to me. About my dad. About my past. About *everything.* And now I’m supposed to just… deal with that?",
            "I always thought I knew who I was. Mum made sure of that. Turns out, she was lying. So who am I, really?",
            "If I could ask her one thing? Just... *why?* Why keep all this from me? Why lie? What was so bad about Eden?"
        ],
        "blaine": [
            "How do I feel about Blaine? Right now? Somewhere between cautious admiration and unspoken curiosity.",
            "He prowls the night with an effortless confidence—his smile hints at secrets as dark as the shadows he calls home.",
            "Every encounter with him makes me question the rules of this eerie world; is he a kindred spirit or just another enigma cloaked in midnight mystery?",
            "If I could ask him one thing? Just... *what drives you?* What is it that you truly seek in this endless dance with darkness?"
        ]
        ,
        "dr klein": [
            "You want to know about Dr. Klein? Right now? Somewhere between reluctant reliance and simmering exasperation.",
            "He insists my nightmares are just 'stress manifestations'—a tidy diagnosis that never scratches the surface of the chaos within me.",
            "Every session feels like a mechanical dissection of my pain, reducing my vivid, haunting dreams to repetitive clinical jargon.",
            "If I could ask him one thing? Just... *why?* Why dismiss the dark truths my nights reveal as mere anxiety, when they scream of a reality too vast to ignore?"
        ],

        "supernatural": [
            "Ghosts, monsters, witches? Never gave it much thought. Then reality punched me in the face. So, yeah. Now I have questions.",
            "I used to think my dreams were just dreams. Then they started happening when I was awake.",
            "I made a psy-ball appear out of nowhere. You ever do that? No? Yeah, me neither—until last week.",
            "Vampyrs? Cool in books. Less cool when they might be hunting you.",
            "The supernatural is like a stray cat. I ignored it, and now it won’t leave me alone."
        ],

        "fear": [
            "I used to think my dreams were the worst thing about my life. Now? Not so sure.",
            "Am I scared? Always. But fear doesn’t help. It just slows you down.",
            "I *want* to believe people when they say I’m safe. But the last time I believed someone, I found out my whole life was a lie.",
            "Every time I walk into a room, I check for exits. Don’t know when that started. Don’t know if I can stop."
        ],

        "future": [
            "What do I want to do with my life? Exist. Hopefully without something trying to kill me.",
            "Dream job? Honestly? I never thought I’d live long enough to have one.",
            "If I could be normal, I would. But I think that option expired the second I was born.",
            "A future? Sounds nice. Shame I probably don’t get one."
        ],

        "death": [
            "I used to think my dad was dead. Turns out, he was never my dad. Now I don’t know what’s real.",
            "Death is inevitable. I just didn’t think I’d have to worry about it so soon.",
            "Afterlife? No clue. If I find out, I’ll let you know—assuming I don’t get dragged into whatever nightmare is waiting for me.",
            "I always thought I had time. Turns out, time is a luxury."
        ],

        "powers": [
            "I thought I was just unlucky. Turns out, I might be something else entirely.",
            "You ever do something you *know* isn’t possible, and your brain just refuses to process it? Yeah. That.",
            "Magick is real. Not book-magick. *Real.* And I think I can use it.",
            "I didn’t ask for this. But now that I have it, I’m going to figure out what it means."
        ],

        "destiny": [
            "I believe in free will. But everyone keeps telling me I’m ‘meant for something bigger.’ Great. No pressure, right?",
            "If my life is already written, I’d like to meet the author and *punch them in the face*.",
            "They say I have a destiny. I say they can shove it.",
            "Do I want to know more about the prophecy? I *have* to. It’s about me. And I don’t like surprises."
        ],

        "random": [
            "What’s my favorite food? Something that doesn’t remind me I exist.",
            "If I could erase one person from existence, I’d need a *very* long list to choose from.",
            "You think I have *hobbies*? That’s adorable.",
            "Fun fact: I used to like sleeping. Then my subconscious declared war on me."
        ],

        "hobbies": [
            "Hobbies? I spend my free time reading fantasy novels, scribbling in my diary, and daydreaming about a world where nightmares don’t exist.",
            "I like to hide in quiet corners with a good book. It’s better than dealing with all the chaos at school.",
            "Honestly, my hobby is surviving school and these damn nightmares. And maybe plotting how to escape it all.",
            "When I’m not haunted by my dreams, I’m lost in a book or wondering if I can create some magick of my own."
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
        "hello": ["hi", "hey", "sup", "yo", "hiya", "hullo", "morning", "afternoon", "evening", "hello", "hiya"],
    
        "how are you": [
    "doing", 
    "been", 
    "going", 
    "holding up", 
    "coping", 
    "alright", 
    "how r u", 
    "how ru", 
    "ru ok", 
    "how have you been", 
    "are you well",
    "what's up",
    "what's new",
    "how you feeling",
    "you alright",
    "you okay",
    "everything good",
    "how goes it",
    "how's life",
    "you good",
    "how's it hanging",
    "what's going on",
    "how's everything",
    "all good",
    "feeling okay"
],

    
        "who are you": [ "name", "talking", "identity", "your name", "who is this", "who ru", "who am i talking to", "who tf are you"],
    
        "are you okay": ["alright", "fine", "you good", "not bad", "feeling", "holding up", "doing alright", "are u ok", "is everything alright", "you feeling okay", "are you fine"],
    
        "nightmares": ["nightmares", "dreams", "sleep", "bad dreams", "insomnia", "can't sleep", "horrors", "night terrors", "do you have nightmares", "do you ever sleep"],
    
        "who is eden": ["eden", "tell me about eden", "who's eden", "what do you know about eden", "is eden good", "can eden be trusted", "eden who", "who tf is eden"],
    
        "school": ["school", "class", "teachers", "subjects", "education", "study", "lesson", "grades", "homework", "students", "do you like school", "what's school like", "do you try in school", "are you smart", "what subjects do you like"],
    
        "music": ["music", "song", "band", "rock", "listen", "favorite", "black sabbath", "classic rock", "what music do you like", "what do you listen to", "do you like music", "favorite band"],
    
        "books": ["books", "read", "fantasy", "library", "story", "dragons", "novels", "favorite", "do you read", "favorite book", "what do you like to read", "do you like fantasy books", "do you like dragons"],
    
        "movies": ["movie", "film", "watch", "cinema", "Lord of the Rings", "favorite", "long movies", "do you like movies", "favorite movie", "what's the best film you've seen", "have you watched lord of the rings", "do you watch films"],
    
        "friends": ["friends", "acquaintances", "social", "people", "alone", "peers", "hang out", "classmates", "do you have friends", "who are your friends", "do you hang out with anyone", "are you a loner", "do people like you", "do you talk to people"],
    
        "romance": ["love", "boyfriend", "dating", "relationship", "crush", "romantic", "valentine", "do you have a boyfriend", "have you ever been in love", "do you believe in love", "are you dating anyone", "are you interested in romance"],
    
        "mum": ["mum", "mom", "mother", "jean", "parent", "family", "guardian", "tell me about your mum", "do you get along with your mum", "do you love your mum", "has your mum lied to you", "what do you think of jean"],
    
        "supernatural": ["supernatural", "ghosts", "paranormal", "magic", "vampire", "vampyr", "vampires", "vampyrs", "witches", "werewolves", "do you believe in ghosts", "do you think magic is real", "have you seen something supernatural", "are vampires real", "do you believe in the supernatural"],
    
        "fear": ["fear", "scared", "worst nightmare", "afraid", "phobia", "paranoia", "creepy", "what are you scared of", "do you ever get scared", "what's your worst fear", "do you feel safe", "are you paranoid", "do you get nervous"],
    
        "future": ["future", "dreams", "career", "what next", "plans", "where do you see yourself", "what do you want to do in life", "do you have dreams", "do you think you have a future", "do you want to be normal"],
    
        "death": ["death", "dying", "afterlife", "what happens when you die", "dead", "lost someone", "are you scared of dying", "do you think about death", "do you believe in an afterlife"],
    
        "powers": ["powers", "magic", "abilities", "supernatural", "do you have powers", "paranormal", "can you do magic", "what can you do", "have you done something impossible", "do you think you’re different"],
    
        "destiny": ["destiny", "fate", "future", "prophecy", "meant to be", "free will", "do you believe in fate", "what do you think about destiny", "are you part of a prophecy", "do you think life is predetermined", "do you believe in free will"],
    
        "hobbies": ["hobby", "hobbies", "pastime", "free time", "fun", "enjoy", "what do you do for fun", "how do you spend your free time", "any pastimes", "do you have hobbies"],
    
        "random": ["random", "fact", "weird", "tell me something", "favorite", "cats or dogs", "stupid question", "what's your favorite food", "what’s the dumbest thing someone said to you", "do you have hobbies"],

        "blaine": [
            "blaine",
            "boys",
            "mysterious",
            "enigmatic",
            "shadow",
            "charm",
            "alluring",
        ],
        "dr klein": [
            "dr klein",
            "klein",
            "psychiatrist",
            "therapy",
            "diagnosis",
            "psychiatric",
            "counseling",
            "clinical",
            "treatment",
            "stress",
            "sessions", 
            "counselling",
            "counsellor", 
            "therapist",
            "psych"
        ]
        ,
    
        "bye": ["bye", "goodbye", "see ya", "later", "gotta go", "talk later", "see you soon", "bye bye", "i’m leaving"]
    };
    
    // ==============================
    // **Response Handling with Conversational Redirection**
    // ==============================
    function getSophieResponse(input) {
        const cleanedInput = input.toLowerCase().replace(/[^\w\s]/gi, '').trim();
        const inputWords = cleanedInput.split(/\s+/); // Split input into individual words

        // Check for direct matches first
        if (sophieResponses[cleanedInput]) {
            return randomResponse(sophieResponses[cleanedInput]);
        }

        // Check keyword mappings using whole-word matching for single-word keywords
        for (const key in keywordMap) {
            if (keywordMap[key].some(keyword => {
                // If the keyword contains a space, use simple substring check
                if (keyword.indexOf(" ") !== -1) {
                    return cleanedInput.includes(keyword);
                } else {
                    return inputWords.includes(keyword);
                }
            })) {
                return randomResponse(sophieResponses[key]);
            }
        }

        // If the input is too vague, return a redirecting response **SOMETIMES**
        if (isVagueResponse(cleanedInput)) {
            return Math.random() < 0.6 ? randomResponse(vagueResponses) : null;  // 60% chance Sophie responds, 40% chance she admits "I don't know"
        }

        // If unknown input, **only sometimes** give a vague response, otherwise return null for AI fallback
        return Math.random() < 0.5 ? randomResponse(vagueResponses) : null; // 50% chance of vague response, 50% chance of AI fallback
    }
    
    
    // ==============================
    // **Detects Vague Responses**
    // ==============================
    function isVagueResponse(input) {
        // Check if any vague keyword is present in the input
        return vagueKeywords.some(keyword => input.includes(keyword));
    }
    
    
    // ==============================
    // **Random Response Selector**
    // ==============================
    function randomResponse(array) {
        if (!array || array.length === 0) {
            return "I... don’t know how to answer that. But if you figure it out, let me know.";
        }
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
        // **Store Last Used Response**
        // ==============================
        let lastVagueResponse = "";
        
        // ==============================
        // **Get a Unique Vague Response**
        // ==============================
        function getUniqueVagueResponse() {
            let response;
            do {
                response = vagueResponses[Math.floor(Math.random() * vagueResponses.length)];
            } while (response === lastVagueResponse && vagueResponses.length > 1);
        
            lastVagueResponse = response;
            return response;
        }
        
        // ==============================
        // **Handle User Input**
        // ==============================
        async function handleUserInput() {
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
            setTimeout(async () => {
                const typingIndicator = showTypingIndicator();
        
                // Step 4: Get Sophie's response
                let responseText = getSophieResponse(userText);
        
                // Step 5: If Sophie has no good response, choose between a unique vague fallback or an AI-generated response
                if (!responseText) {
                    // 50% chance to use a unique vague response, 50% chance to fetch from AI
                    responseText = Math.random() < 0.5 ? getUniqueVagueResponse() : await fetchAIResponse(userText);
                }
        
                // Step 6: After a random delay (2-3 seconds), remove typing dots and show response
                setTimeout(() => {
                    typingIndicator.remove();
                    addMessage(responseText, "sophie-message");
                }, randomDelay(2000, 3000));
            }, randomDelay(3000, 4000));
        }
        
        
        // ==============================
        // **Handle Server and AI integration**
        // ==============================
        
        async function fetchAIResponse(input) {
            const endpoint = "https://memoirsbackend-wusg.onrender.com/chat"; // ✅ Live backend URL
        
            try {
                const response = await fetch(endpoint, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ message: input }) // Make sure the key is 'message' (same as in the backend)
                });
        
                if (!response.ok) {
                    console.error("API Error:", await response.text());
                    return getUniqueVagueResponse(); // Use a sarcastic fallback response instead of an error message
                }
        
                const data = await response.json();
                return data.message || getUniqueVagueResponse(); // If API fails to return a message, use a fallback response
            } catch (error) {
                console.error("Fetch error:", error);
                return getUniqueVagueResponse(); // Return a sarcastic response if there's an error
            }
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

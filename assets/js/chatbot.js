//====================================================================================================

const funFacts = [
    "I have written a trilogy of books, <em>Memoirs of a Vampyr’s Daughter</em>. Two are currently published, and the third is in progress.",
    "My love for writing started in childhood, fuelled by fantasy novels and the idea of creating my own worlds.",
    "My favourite book series is <em>The Gunslinger</em> by Stephen King. The blend of fantasy, western, and horror completely captivated me.",
    "I adore books that blend magic and mystery, like <em>His Dark Materials</em> by Philip Pullman and <em>The Daughter of the Empire</em> series by Raymond E. Feist and Janny Wurts.",
    "I prefer fantasy over sci-fi, but I love stories with deep lore, intricate characters, and immersive world-building.",
    "I enjoy creating morally complex characters—ones who exist in shades of grey rather than clear heroes and villains.",
    "Writing is my way of exploring the unknown—both the supernatural and the psychological depths of my characters.",
    "I find inspiration in folklore, mythology, and historical events, weaving these elements into my stories.",
    "I once designed a website that translated text into Elvish from <em>The Lord of the Rings</em>! Tolkien’s world-building is something I truly admire.",
    "World-building is one of my favourite aspects of writing. I love crafting deep histories, unique cultures, and complex magic systems.",
    "I have a degree in Counselling-Skills with Psychology, which helps me develop characters with realistic emotions and struggles.",
    "My writing is heavily influenced by gothic literature, with eerie atmospheres and dark, poetic storytelling.",
    "I love the <em>Miss Peregrine’s Home for Peculiar Children</em> series for its mix of history, magic, and mystery.",
    "My writing often explores themes of identity, destiny, and the blurred line between good and evil.",
    "I love exploring historical sites and megaliths—they fuel my imagination and often find their way into my stories.",
    "I have a deep appreciation for Wiccan and pagan folklore, which influences the way I write about magick and rituals.",
    "I enjoy gaming and love titles like <em>Skyrim</em>, <em>Fallout</em>, and <em>Cyberpunk 2077</em> for their immersive storytelling. Narrative-driven games inspire my approach to storytelling.",
    "I have an entire shelf dedicated to books on mythology, folklore, and old superstitions—endless inspiration for my writing!",
    "I believe a well-written villain is just as important as a strong protagonist. Some of my favourite antagonists have tragic backstories.",
    "I often write late at night when the world is quiet—it feels like stepping into a space where reality and fiction blur together.",
    "My dream is to have my books reach readers who feel as deeply connected to my stories as I do to the ones that inspired me.",
    "I write my stories as if the characters are telling them to me—I feel like I have little control over where the journey takes us.",
    "I often don't know how a story will unfold until I write it. I know the ending, but the journey surprises me just as much as the reader.",
    "I believe the gaps in my storytelling weren’t from writer’s block, but because I wasn’t ready. I needed to live more, to experience tragedy, heartache, and pain before I could write their stories properly.",
    "I don’t listen to music when I write—I just sit down and let the words come.",
    "I create detailed character profiles and gather images that represent them to me before writing.",
    "I keep a collection of ‘failed’ story ideas that I hope to revisit one day when I’m ready to give them a second chance.",
    "My characters often surprise me—they sometimes do things I didn’t plan, which makes writing feel like a collaboration between me and them.",
    "The names of my characters often come from real-life places or people, with slight changes to make them feel unique.",
    "I get a lot of inspiration from historical figures and events, and I love blending reality with fiction in my writing.",
    "There are hidden easter eggs in my books—if you pay close attention, you'll spot a reference to my favourite books, authors, tv shows."
];


// Function to select a random fun fact
function getRandomFunFact() {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    return funFacts[randomIndex];
}

function getRandomHelpSuggestion() {
    const helpOptions = [
        `<p>Want to know more about specific characters? Try asking about <strong>"Sophie"</strong>, <strong>"Eden"</strong>, or <strong>"Master"</strong>.</p>`,
        `<p>Did you know some locations in the books are based on real places? Ask about <strong>"Bethnal Green"</strong> or <strong>"The Ruskin Arms"</strong>.</p>`,
        `<p>Curious about different book formats? Try <strong>"ebook"</strong>, <strong>"hardcover"</strong>, or <strong>"audiobook"</strong>.</p>`,
        `<p>Wondering if you can get a signed copy? Ask about <strong>"signed"</strong> or <strong>"autograph"</strong>.</p>`,
        `<p>Want to discuss a movie adaptation? Try <strong>"movie"</strong> or <strong>"TV series"</strong>.</p>`,
        `<p>Are there any spin-offs or extra content? Ask about <strong>"short stories"</strong> or <strong>"bonus content"</strong>.</p>`,
        `<p>Looking to support my work? Try <strong>"support"</strong> or <strong>"review"</strong> to find out how!</p>`,
        `<p>Want to know more about the prophecy? Ask about <strong>"prophecy"</strong> (without spoilers, of course!).</p>`,
        `<p>Curious about the deeper themes of my books? Try asking about <strong>"themes"</strong> or <strong>"meaning"</strong>.</p>`,
        `<p>Want to know more about the supernatural elements in my books? Ask about <strong>"magic"</strong>, <strong>"witches"</strong>, or <strong>"vampyrs"</strong>.</p>`,
        `<p>Interested in how I create my worlds? Try asking about <strong>"world-building"</strong> or <strong>"inspiration"</strong>.</p>`,
        `<p>Did you know some character names have personal significance? Ask about <strong>"character names"</strong> or <strong>"naming"</strong>.</p>`,
        `<p>Want to hear about my writing struggles and breakthroughs? Try <strong>"writer's block"</strong> or <strong>"writing challenges"</strong>.</p>`,
        `<p>Looking for book recommendations? Try <strong>"favourite authors"</strong> or <strong>"influences"</strong>.</p>`,
        `<p>Want to know how I come up with character relationships? Ask about <strong>"character dynamics"</strong> or <strong>"character connections"</strong>.</p>`,
        `<p>Curious about my personal journey as an author? Try <strong>"about me"</strong> or <strong>"how I started writing"</strong>.</p>`,
        `<p>Want to know if there are any hidden details in my books? Try <strong>"easter eggs"</strong> or <strong>"hidden references"</strong>.</p>`,
        `<p>Need advice on writing your own book? Ask about <strong>"writing tips"</strong> or <strong>"advice"</strong>.</p>`,
        `<p>Interested in what I’m working on next? Try <strong>"upcoming projects"</strong> or <strong>"future books"</strong>.</p>`,
        `<p>Want to know about the creatures in my books? Ask about <strong>"monsters"</strong> or <strong>"supernatural beings"</strong>.</p>`,
        `<p>Looking for behind-the-scenes insights into my books? Try <strong>"behind the scenes"</strong> or <strong>"book secrets"</strong>.</p>`,
        `<p>Want to know about my favourite fictional worlds? Try <strong>"favourite books"</strong> or <strong>"fantasy worlds"</strong>.</p>`,
        `<p>Curious about my creative influences beyond books? Ask about <strong>"movies"</strong>, <strong>"music"</strong>, or <strong>"art"</strong>.</p>`,
        `<p>Have a question about something else? Try rephrasing it, or reach out to me directly!</p>`
    ];
    return helpOptions[Math.floor(Math.random() * helpOptions.length)];
}


//====================================================================================================

const faqKeywords = [
    {
        keywords: ["fun", "fact", "interesting"],
        answer: getRandomFunFact
    },
    {
        keywords: ["about", "keira", "you"],
        answer: `
            <p>I am <strong>Keira Jarvis</strong>, an author and software developer.</p>
            <p>I have written the <em>Memoirs of a Vampyr’s Daughter</em> series and love crafting immersive fantasy worlds.</p>
            <p>Some fun facts about me:</p>
            <ul>
                <li>My favourite book series is <em>The Gunslinger</em> by Stephen King.</li>
                <li>I love creating morally complex characters that aren’t simply good or evil.</li>
                <li>Writing is my way of exploring the unknown—both the supernatural and psychological depths of my characters.</li>
            </ul>
        `
    },
    {
        keywords: ["books", "novels", "series"],
        answer: `
            <p>I’ve written a trilogy called <em>Memoirs of a Vampyr’s Daughter</em>:</p>
            <ul>
                <li><strong>Eden</strong> – Available now.</li>
                <li><strong>Wisdom</strong> – Available now.</li>
                <li><strong>Prophecy</strong> – In progress.</li>
            </ul>
        `
    },
    {
        keywords: ["next", "future", "upcoming"],
        answer: `
            <p>I’m currently working on <strong>Prophecy</strong>, the third and final book in the <em>Memoirs of a Vampyr’s Daughter</em> trilogy.</p>
        `
    },
    {
        keywords: ["inspiration", "influences", "ideas", "favourite", "YA", "inspired"],
        answer: `
            <p>My work is influenced by:</p>
            <ul>
                <li><strong>Philip Pullman</strong> – World-building and character depth.</li>
                <li><strong>Raymond E. Feist</strong> – Storytelling and rich lore.</li>
                <li><strong>Christopher Paolini</strong> – Detailed fantasy worlds.</li>
                <li><strong>Stephen King</strong> – Dark themes and character-driven narratives.</li>
                <li><strong>Robin Hobb</strong> (*Daughter of the Empire* series) – Complex characters and political intrigue.</li>
                <li><strong>William Nicholson</strong> (*The Wind Singer* trilogy) – Unique world-building and deep emotional themes.</li>
                <li><strong>L.J. Smith</strong> (pre-*Vampire Diaries*) – Supernatural and romantic elements.</li>
                <li><strong>Kim Harrison</strong> – Urban fantasy and strong heroines.</li>
                <li><strong>Rebecca Yarros</strong> – Emotional depth and gripping storytelling.</li>
                <li><strong>Rachel Gillig</strong> – Lyrical prose and dark fantasy elements.</li>
            </ul>
            <p>I also draw inspiration from folklore, mythology, history, music, and art.</p>
        `
    },
    {
        keywords: ["book inspiration", "authors", "favorite", "writing influences", "favourite authors", "author influences"],
        answer: `
            <p>My work is influenced by:</p>
            <ul>
                <li><strong>Philip Pullman</strong> – World-building and character depth.</li>
                <li><strong>Raymond E. Feist</strong> – Storytelling and rich lore.</li>
                <li><strong>Christopher Paolini</strong> – Detailed fantasy worlds.</li>
                <li><strong>Stephen King</strong> – Dark themes and character-driven narratives.</li>
                <li><strong>Robin Hobb</strong> (*Daughter of the Empire* series) – Complex characters and political intrigue.</li>
                <li><strong>William Nicholson</strong> (*The Wind Singer* trilogy) – Unique world-building and deep emotional themes.</li>
                <li><strong>L.J. Smith</strong> (pre-*Vampire Diaries*) – Supernatural and romantic elements.</li>
                <li><strong>Kim Harrison</strong> – Urban fantasy and strong heroines.</li>
                <li><strong>Rebecca Yarros</strong> – Emotional depth and gripping storytelling.</li>
                <li><strong>Rachel Gillig</strong> – Lyrical prose and dark fantasy elements.</li>
            </ul>
            <p>I also draw inspiration from folklore, mythology, history, music, and art.</p>
        `
    },
    {
        keywords: ["tv inspiration", "tv", "film inspiration", "movie influences", "tv shows", "films", "movies"],
        answer: `
            <p>My writing is also influenced by TV and film:</p>
            <ul>
                <li><strong>Buffy the Vampire Slayer</strong> – Some of my characters are directly inspired by this series.</li>
                <li><strong>Charmed</strong> – Themes of magic, sisterhood, and the balance of power.</li>
                <li><strong>Doctor Who</strong> – Time, fate, and the exploration of identity.</li>
            </ul>
        `
    },
    {
        keywords: ["buy", "purchase", "where"],
        answer: `
            <p>You can buy my books online:</p>
            <ul>
                <li><strong><em>Eden</em></strong> – <a href="https://www.lulu.com/shop/keira-jarvis/memoirs-of-a-vampyrs-daughter-eden/paperback/product-1vg9vgp8.html" target="_blank" class="custom-link">Buy here</a></li>
                <li><strong><em>Wisdom</em></strong> – <a href="https://www.lulu.com/shop/keira-jarvis/memoirs-of-a-vampyrs-daughter-wisdom/paperback/product-wmkzv2.html" target="_blank" class="custom-link">Buy here</a></li>
            </ul>
        `
    },
    {
        keywords: ["genre", "style", "type"],
        answer: `
            <p>I write <strong>YA dark fantasy</strong>, blending elements of gothic horror, magick, and supernatural creatures.</p>
        `
    },
    {
        keywords: ["world", "building", "magic"],
        answer: `
            <p>The world of <em>Memoirs of a Vampyr’s Daughter</em> is inspired by mythology, folklore, and real-world pagan magick.</p>
            <p>Magick is influenced by Wiccan beliefs, the threefold return, and deities such as Hecate.</p>
        `
    },
    {
        keywords: ["sophie", "main character"],
        answer: `
            <p><strong>Sophie Munday</strong> is the protagonist of <em>Memoirs of a Vampyr’s Daughter</em>.</p>
            <p>Plagued by night terrors, she is thrown into a world of Vampyrs, Witches, and ancient prophecies, discovering that she is far more than she ever imagined.</p>
        `
    },
    {
        keywords: ["eden"],
        answer: `
            <p><strong>Eden</strong> is a powerful and enigmatic Vampyr with a dark past.</p>
            <p>Once a trusted disciple of The Master, he now walks the line between redemption and destruction, doing whatever it takes to protect Sophie.</p>
        `
    },
    {
        keywords: ["aeryn"],
        answer: `
            <p><strong>Aeryn</strong> is a fierce and independent Vampyr with a tragic past.</p>
            <p>Haunted by her choices, she struggles between loyalty, survival, and the ghosts of the life she left behind.</p>
        `
    },
    {
        keywords: ["blaine", "love interest"],
        answer: `
            <p><strong>Blaine</strong> is a charming but dangerous Vampyr with a mysterious history.</p>
            <p>He hides his pain behind a playful exterior, but his true motivations remain uncertain.</p>
        `
    },
    {
        keywords: ["mischa"],
        answer: `
            <p><strong>Mischa</strong> is a determined and strong-willed Witch who has her own ties to the Night World.</p>
            <p>She is both an ally and a mystery, holding knowledge that could change everything.</p>
        `
    },
    {
        keywords: ["hailzy", "witch"],
        answer: `
            <p><strong>Hailzy the White</strong> is a powerful Witch with wisdom beyond her years.</p>
            <p>She is deeply connected to ancient magick and plays a crucial role in the unfolding events of the Night World.</p>
        `
    },
    {
        keywords: ["jean"],
        answer: `
            <p><strong>Jean Munday</strong> is Sophie’s mother, a woman who has spent her life protecting her daughter from a world she never wanted her to know.</p>
            <p>She carries secrets of her own, and as Sophie begins to uncover the truth, their relationship is put to the test.</p>
        `
    },
    {
        keywords: ["master", "villain"],
        answer: `
            <p><strong>The Master</strong> is the most feared figure in the Night World, a being as old as time itself.</p>
            <p>His influence stretches far and wide, and his obsession with the prophecy could change the balance of power forever.</p>
        `
    },
    {
        keywords: ["prophecy", "night world"],
        answer: `
            <p>The prophecy is an ancient and powerful secret that has shaped the Night World for centuries.</p>
            <p>It speaks of change, of power shifting hands, and of a being unlike any before.</p>
            <p>Many seek its truth, but few truly understand its meaning… until it’s too late.</p>
        `
    },
    {
        keywords: ["creatures", "monsters", "monster", "supernatural beings"],
        answer: `
            <p>Beyond Vampyrs, Witches, and Werewolves, the Night World is home to many supernatural beings.</p>
            <p>Trolls are known to exist. <span class="emphasis">Spoilers Sweetie</span>. But many more creatures may be lurking in the shadows.</p>
        `
    },
    {
        keywords: ["vampyrs", "vampires", "vampyr", "vampire"],
        answer: `
            <p>Vampyrs in my books retain more of their human emotions than traditional portrayals.</p>
            <p>While they have animalistic instincts, many still experience deep feelings and personal growth.</p>
            <p>Eden, for example, was inspired by Angel from <em>Buffy the Vampire Slayer</em>, a character who regains his soul and struggles with morality.</p>
        `
    },
    {
        keywords: ["names", "naming", "character names"],
        answer: `
            <p>Some names are random, but many are inspired by real people I’ve known.</p>
            <p>Examples:</p>
            <ul>
                <li><strong>Sophie Munday</strong> – Named after my friend, whom I see as a little sister.</li>
                <li><strong>Mischa</strong> – Short for Michelle, a friend from years ago.</li>
                <li><strong>Hailzy the White</strong> – Inspired by my friend Hayley White.</li>
            </ul>
        `
    },
    {
        keywords: ["references", "easter eggs"],
        answer: `
            <p>I love including hidden references in my books!</p>
            <p>You’ll find nods to <em>Doctor Who</em>, my favorite authors, and characters from beloved books.</p>
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
            <p>Outside of writing, I enjoy:</p>
            <ul>
                <li>Reading fantasy novels</li>
                <li>Gaming, especially narrative-driven games</li>
                <li>Exploring history and folklore</li>
            </ul>
        `
    },
    {
        keywords: ["pets", "animals"],
        answer: `
            <p>I have a variety of pets:</p>
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
        keywords: ["partner", "frankie", "wife"],
        answer: `
            <p>My partner, <strong>Frankie</strong>, and I have been together since 2016.</p>
            <p>She’s a software tester, and together we share a love for literature, and our fur son, Sammy!</p>
        `
    },
    {
        keywords: ["themes", "meaning", "message"],
        answer: `
            <p>My books explore themes of <strong>identity, destiny, and moral complexity</strong>.</p>
            <p>Sophie’s journey is about self-discovery, questioning fate, and deciding who she really wants to be.</p>
        `
    },
    {
        keywords: ["age", "rating", "dark", "mature"],
        answer: `
            <p><em>Memoirs of a Vampyr’s Daughter</em> is a <strong>YA dark fantasy</strong>, meaning it’s written for a young adult audience but has darker themes.</p>
            <p>It explores supernatural horror, moral dilemmas, and some violent moments, but it’s not overly graphic.</p>
            <p>If you enjoy gothic horror or supernatural fantasy, you’ll feel right at home!</p>
        `
    },
    {
        keywords: ["signed", "autograph", "personalized", "autographed", "sign"],
        answer: `
            <p>If you’d like a signed copy of my books, feel free to reach out to me through my website!</p>
            <p>I can arrange signed editions depending on availability.</p>
        `
    },
    {
        keywords: ["spinoff", "short stories", "bonus", "extra content"],
        answer: `
            <p>Right now, I’m focused on completing the <em>Memoirs of a Vampyr’s Daughter</em> trilogy.</p>
            <p>But I have lots of ideas for potential spin-offs or extra stories in the Night World!</p>
        `
    },
    {
        keywords: ["writing time", "how long", "how fast", "writing process"],
        answer: `
            <p><strong>Eden</strong> was first written as a short story around 2004/2005 before evolving into a full novel. It took many years to refine and develop into what it is today.</p>
            <p><strong>Wisdom</strong> began a few years later, around 2008. However, I got stuck for years, particularly in the tunnels leading to the witches for Aeryn and Mischa, and the parallel storyline of Sophie and Blaine. They were trapped in torchlit, damp corridors, and I couldn’t find a way out.</p>
            <p>The biggest gap in writing was between 2013 and 2016, when the characters simply stopped talking to me. But in 2016, I met my partner—who, despite <strong>pretending</strong> she liked YA fantasy, inspired me to continue. With her encouragement, the story finally flowed.</p>
            <p>By 2017, not only had I finished <strong>Wisdom</strong>, but I had also completed <strong>Prophecy</strong> in very short order.</p>
        `
    },
    {
        keywords: ["visions", "dreams", "psychic", "powers"],
        answer: `
            <p>Sophie experiences intense dreams, visions, and out-of-body experiences, all tied to her hidden connection with the Night World.</p>
            <p>These abilities are more than just nightmares—they are glimpses into something far greater.</p>
        `
    },
    {
        keywords: ["reading order", "which book first", "read first"],
        answer: `
            <p>You should read <em>Memoirs of a Vampyr’s Daughter</em> in order:</p>
            <ul>
                <li><strong>Book One: Eden</strong> – Start here!</li>
                <li><strong>Book Two: Wisdom</strong> – Continues Sophie’s story.</li>
                <li><strong>Book Three: Prophecy</strong> – The grand finale (in progress).</li>
            </ul>
        `
    },
    {
        keywords: ["follow", "social media", "updates"],
        answer: `
            <p>You can follow my work and get updates on upcoming books through my author website.</p>
        `
    },
    {
        keywords: ["support", "how to help", "help author"],
        answer: `
            <p>The best way to support me is to <strong>leave a review</strong> after reading!</p>
            <p>Reviews help indie authors get discovered by more readers.</p>
            <p>You can also share my books with friends or follow my work for future updates!</p>
        `
    },
    {
        keywords: ["ebook", "digital", "kindle"],
        answer: `
            <p><strong>Eden</strong> is available as an <strong>eBook</strong> for readers who prefer digital formats.</p>
            <p>Currently, <strong>Wisdom</strong> is only available in paperback and hardback.</p>
        `
    },
    {
        keywords: ["hardcover", "hardback"],
        answer: `
            <p><strong>Wisdom</strong> is available in <strong>hardback</strong> format for those who love a premium edition.</p>
            <p><strong>Eden</strong> is available in paperback and eBook formats.</p>
        `
    },
    {
        keywords: ["audiobook", "audio", "listen"],
        answer: `
            <p>I’ve started recording the <strong>audiobook</strong> for <em>Eden</em>, but it's a long process and will take time to complete.</p>
            <p>As of now, there are no audiobooks for the series, but I’ll share updates when that changes!</p>
        `
    },
    {
        keywords: ["format", "other versions", "different format"],
        answer: `
            <p>If you're interested in a specific book format (such as an eBook for <em>Wisdom</em> or an audiobook), please reach out to me!</p>
            <p>Reader demand helps shape what formats I release next.</p>
        `
    },
    {
        keywords: ["locations", "location", "places", "setting", "real places", "ruskin", "ruskin arms", "the ruskin arms", "the dukes head", "Dukes", "pub", "bethnal green"],
        answer: `
            <p>Many locations in <em>Memoirs of a Vampyr’s Daughter</em> are inspired by real-life places I’ve lived in and frequented.</p>
            <p>I’m originally from <strong>The Isle of Dogs</strong> in East London, and places like <strong>Bethnal Green</strong> feature in my books because I know them well.</p>
            <p><strong>The Dukes Head Pub</strong> is a real pub I used to visit when I was around 19, and <strong>The Ruskin Arms</strong> was indeed a rock and metal pub, which I also frequented!</p>
            <p>Bringing these locations into my stories helps create a rich and immersive setting.</p>
        `
    },
    {
        keywords: ["help", "commands", "options"],
        answer: getRandomHelpSuggestion
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

// Function to handle responses based on FAQ keywords
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

//====================================================================================================

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

    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '10px';

    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.textContent = 'Send';
    submitButton.addEventListener('click', () => submitEmailForm(emailInput.value, queryTextarea.value));
    buttonContainer.appendChild(submitButton);

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.textContent = 'Close';
    closeButton.style.backgroundColor = '#ccc';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
    closeButton.addEventListener('click', () => {
        responseContainer.innerHTML = ''; // Removes the form
    });
    buttonContainer.appendChild(closeButton);

    form.appendChild(buttonContainer);
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
            resetChatbot();
        })
        .catch(() => {
            alert("Your question has been sent! I'll get back to you shortly.");
            console.error("Fetch error occurred, likely due to CORS.");
            resetChatbot();
        });
}

// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to find a matching answer based on keywords
function findAnswer(query) {
    const lowerCaseQuery = query.toLowerCase().trim();
    let bestMatch = null;
    let highestMatchScore = 0;

    faqKeywords.forEach(entry => {
        entry.keywords.forEach(keyword => {
            // Check for exact word match (not just partial match)
            const regex = new RegExp(`\\b${keyword}\\b`, 'i'); // Word boundary ensures exact match

            if (regex.test(lowerCaseQuery)) {
                const matchScore = keyword.length; // Longer keywords get priority

                if (matchScore > highestMatchScore) {
                    highestMatchScore = matchScore;
                    bestMatch = entry.answer;
                }
            }
        });
    });

    return bestMatch;
}

// Function to process user input
function sendQuestion() {
    const userInput = document.getElementById('user-input');
    const question = userInput.value.trim();

    if (!question) {
        return; // Prevent processing empty messages
    }

    const answer = findAnswer(question);

    if (answer) {
        displayMessage(answer);
    } else {
        displayMessage("I'm sorry, I couldn't find an answer to your question.");
        generateEmailForm(question);
    }

    userInput.value = ''; // Clear input field
}

// Function to hide the question buttons
function hideQuestionButtons() {
    const optionsContainer = document.getElementById('options');
    optionsContainer.style.display = 'none';
}

// Function to handle "Other Questions" button by hiding buttons and showing the email form
function handleOtherQuestions() {
    hideQuestionButtons();
    generateEmailForm("");
}

function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    const openChatbotButton = document.getElementById('open-chatbot');

    if (chatbot.style.display === 'none' || chatbot.style.display === '') {
        // Show the chatbot
        chatbot.style.display = 'block';
        chatbot.style.zIndex = '99999';      // Ensure it's above everything
        chatbot.style.pointerEvents = 'auto'; // Allow interaction
        chatbot.style.position = 'fixed';    // Ensure it’s positioned correctly
        resetOnOpenChatbot();
        openChatbotButton.style.display = 'none';
    } else {
        // Completely remove chatbot from interaction flow
        chatbot.style.display = 'none';   
        chatbot.style.zIndex = '-9999';       // Moves it completely out of view
        chatbot.style.pointerEvents = 'none'; // Prevents click interaction
        chatbot.style.position = 'absolute';  // Prevents it from affecting layout
        openChatbotButton.style.display = 'block';
        resetChatbot();
    }
}

// Function to reset chatbot fields (clears messages and user input)
function resetChatbot() {
    const responseContainer = document.getElementById('response');
    responseContainer.innerHTML = '';
    document.getElementById('user-input').value = '';
}

// Function to reset the chatbot to its idle state on page load
function resetChatbotState() {
    const responseContainer = document.getElementById('response');
    responseContainer.innerHTML = '';
}

// Function to reset chatbot state when opening (shows question buttons)
function resetOnOpenChatbot() {
    const responseContainer = document.getElementById('response');
    const userInput = document.getElementById('user-input');
    const optionsContainer = document.getElementById('options');

    responseContainer.innerHTML = '';
    userInput.value = '';
    optionsContainer.style.display = 'flex'; // Ensure buttons reappear
}

//====================================================================================================

// Combined DOMContentLoaded event listener for all initial setups
document.addEventListener('DOMContentLoaded', () => {
    // Attach event listeners to question buttons
    document.querySelectorAll('#options button').forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent.trim().toLowerCase();
            if (buttonText.includes("other questions")) {
                handleOtherQuestions();
            } else {
                getResponse(buttonText);
            }
        });
    });

    // Attach event listener for user input submit button
    document.getElementById('submit-button').addEventListener('click', sendQuestion);
    
    // Send question on Enter key press
    document.getElementById('user-input').addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            sendQuestion();
        }
    });

    // Attach event listeners for opening and minimizing the chatbot
    document.getElementById('open-chatbot').addEventListener('click', toggleChatbot);
    document.getElementById('minimize-button').addEventListener('click', toggleChatbot);

    // Reset the chatbot state on page load
    resetChatbotState();
});

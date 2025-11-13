// Team Data
const teamData = [
    {
        "name": "Yashish Dahiya",
        "title": "Co-Founder & Group CEO",
        "group": "Founders",
        "icon": "👑",
        "description": "Company ke sabse upar wale leader. Poori company ki direction, vision aur strategy inke haath mein hai."
    },
    {
        "name": "Alok Bansal",
        "title": "Co-Founder & Executive Vice Chairman",
        "group": "Founders",
        "icon": "👑",
        "description": "Company ki badi planning, long-term direction aur important decisions dekhte hain."
    },
    {
        "name": "Sarbvir Singh",
        "title": "President & CEO, Policybazaar",
        "group": "Executive",
        "icon": "💼",
        "description": "Jo daily ka kaam hota hai, business kaise chal raha hai, wo handle karte hain. Day-to-day operations ke boss."
    },
    {
        "name": "Tarun Mathur",
        "title": "Chief Business Officer, Corporate Insurance",
        "group": "Business",
        "icon": "🏢",
        "description": "Bade companies ke insurance ka business sambhalte hain. B2B insurance ka head."
    },
    {
        "name": "Dhruv Sarin",
        "title": "Chief Business Officer, PB Partners",
        "group": "Business",
        "icon": "🤝",
        "description": "Agents aur partners wale network ko grow karte hain. Partner ecosystem ke boss."
    },
    {
        "name": "Kheadup Dorjee Bhutia",
        "title": "Chief Sales Officer",
        "group": "Sales",
        "icon": "🎯",
        "description": "Company ki sales kitni ho rahi hai aur kaise badhegi - ye sab dekhte hain."
    },
    {
        "name": "Amit Chabra",
        "title": "Chief Business Officer, General Insurance",
        "group": "Business",
        "icon": "🚗",
        "description": "Car, bike, health, travel jaise normal insurance products ka business inke under aata hai."
    },
    {
        "name": "Vivek Jain",
        "title": "Chief Business Officer, Life Insurance",
        "group": "Business",
        "icon": "❤️",
        "description": "Life insurance ka pura business inke under hai. Term, whole life, ULIP sab."
    },
    {
        "name": "Saurabh Tiwari",
        "title": "Chief Technology Officer",
        "group": "Technology",
        "icon": "💻",
        "description": "Technology sambhalte hain: website, app, systems sab sahi chal raha hai ya nahi. Tech ka boss."
    },
    {
        "name": "Rajiv Kumar Gupta",
        "title": "President, Group Strategic Initiatives & Public Policy",
        "group": "Strategy",
        "icon": "📋",
        "description": "Government policy, rules aur company ki long-term strategy handle karte hain."
    },
    {
        "name": "Deepti Rustagi",
        "title": "Head, General Counsel",
        "group": "Legal",
        "icon": "⚖️",
        "description": "Legal matters dekhte hain. Matlab kanooni kaam, contracts, compliance sab."
    },
    {
        "name": "Mandeep Mehta",
        "title": "Group CFO",
        "group": "Finance",
        "icon": "💰",
        "description": "Company ke paise, profit, cost sab manage karte hain. CFO matlab Chief Financial Officer."
    },
    {
        "name": "Sai Narayan",
        "title": "Chief Marketing Officer",
        "group": "Marketing",
        "icon": "📢",
        "description": "Brand logon tak kaise pahunch raha hai, advertising kaise chal rahi hai - ye dekhte hain."
    },
    {
        "name": "Shambhavi Solanki",
        "title": "Group Head, Human Resources",
        "group": "HR",
        "icon": "👥",
        "description": "Hiring, employees, culture, training sab handle karti hain. HR ka head."
    },
    {
        "name": "Bibhu Krishna",
        "title": "Chief Information Security Officer",
        "group": "Security",
        "icon": "🔒",
        "description": "Data security dekhte hain. Customer ka data safe rahe, koi hack na ho."
    },
    {
        "name": "Anuj Kapur",
        "title": "Head, Design",
        "group": "Design",
        "icon": "🎨",
        "description": "App, website, UI/UX ka look and feel inke under aata hai. Design ka boss."
    },
    {
        "name": "Apeksha Mishra",
        "title": "Head, PR and Corporate Communications",
        "group": "Communications",
        "icon": "📱",
        "description": "Media mein company ki image handle karti hain. Public relations aur communication."
    },
    {
        "name": "Harsh Vardhan Masta",
        "title": "Head, Payments",
        "group": "Product",
        "icon": "💳",
        "description": "Transactions, payment flow, payment gateway sab dekhte hain."
    },
    {
        "name": "Harshit Gangwar",
        "title": "Head, Risk Business",
        "group": "Operations",
        "icon": "⚠️",
        "description": "Risk ka analysis karte hain: kaha loss ka chance hai, usko kaise control karein."
    },
    {
        "name": "Jitin Jain",
        "title": "Head, Health Customer Experience",
        "group": "Product",
        "icon": "🏥",
        "description": "Health insurance lene wale customers ka experience better banana inka kaam hai."
    },
    {
        "name": "Manas Kapoor",
        "title": "Head, Two Wheeler Insurance",
        "group": "Product",
        "icon": "🏍️",
        "description": "Bike insurance business inke under hai. Two-wheeler segment ke boss."
    },
    {
        "name": "Manoj Sharma",
        "title": "Head, Finance",
        "group": "Finance",
        "icon": "💵",
        "description": "Daily finance operations handle karte hain. Accounting, budgeting, financial planning."
    },
    {
        "name": "Meet Kapadia",
        "title": "Head, Travel Insurance",
        "group": "Product",
        "icon": "✈️",
        "description": "Travel insurance category ko grow karte hain. Domestic aur international travel coverage."
    },
    {
        "name": "Paras Pasricha",
        "title": "Head, Car Insurance",
        "group": "Product",
        "icon": "🚙",
        "description": "Car insurance ka pura product, pricing, service ye dekhte hain. Motor insurance ka important part."
    },
    {
        "name": "Pradeep Yadav",
        "title": "Head, Western India Operations",
        "group": "Operations",
        "icon": "🌍",
        "description": "West India mein business kaise chal raha hai, wo manage karte hain. Regional operations."
    },
    {
        "name": "Rasleen Kaur",
        "title": "Head, Corporate Strategy & Investor Relations",
        "group": "Strategy",
        "icon": "📊",
        "description": "Company ki future strategy aur investors se relation ye manage karti hain."
    },
    {
        "name": "Sajja Praveen Chowdary",
        "title": "Head, PB for Business",
        "group": "Business",
        "icon": "💼",
        "description": "Business clients ke liye special solutions banate hain. B2B platform."
    },
    {
        "name": "Samir Sethi",
        "title": "Head, Brand Marketing",
        "group": "Marketing",
        "icon": "🎯",
        "description": "Brand ko strong banana, public image banana, brand positioning - ye kaam hai."
    },
    {
        "name": "Santosh Bhat",
        "title": "Head, Advanced Technology",
        "group": "Technology",
        "icon": "🚀",
        "description": "New technology, innovation, AI, ML type cheezein inke under. Future tech."
    },
    {
        "name": "Sandeep Saraf",
        "title": "Head, Motor Customer Experience",
        "group": "Product",
        "icon": "🚗",
        "description": "Jo log vehicle insurance lete hain unka experience better banana inka kaam hai."
    },
    {
        "name": "Shubham Choudhary",
        "title": "Head, Growth Business",
        "group": "Business",
        "icon": "📈",
        "description": "Company ka naya growth kaha se aayega, naye ideas, naye channels - ye dekhte hain."
    },
    {
        "name": "Siddharth Singhal",
        "title": "Head, Health Insurance",
        "group": "Product",
        "icon": "🏥",
        "description": "Health insurance ka pura business inke under hai. Medical, critical illness, family floater sab."
    },
    {
        "name": "Sudeep Mathur",
        "title": "Head, Persistency",
        "group": "Operations",
        "icon": "🔄",
        "description": "Jo customers policy le chuke hain wo renew karte rahein, chhod ke na jaayein - retention."
    },
    {
        "name": "Varun Agarwal",
        "title": "Head, Term Insurance",
        "group": "Product",
        "icon": "🛡️",
        "description": "Term life insurance category ye lead karte hain. Pure life insurance ka popular product."
    },
    {
        "name": "Vishwajeet Goel",
        "title": "Head, Life Customer Experience",
        "group": "Product",
        "icon": "❤️",
        "description": "Life insurance lene wale customers ko best service mile, ye ensure karte hain."
    }
];

// ---------------- existing UI & features (unchanged) ----------------

// Count animation
function animateCount(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Initialize stats
const departments = [...new Set(teamData.map(person => person.group))];
animateCount(document.getElementById('totalLeaders'), teamData.length);
animateCount(document.getElementById('totalDepts'), departments.length);

// Get tag class
function getTagClass(group) {
    const tagMap = {
        'Founders': 'tag-founders',
        'Executive': 'tag-executive',
        'Business': 'tag-business',
        'Sales': 'tag-sales',
        'Technology': 'tag-technology',
        'Finance': 'tag-finance',
        'Marketing': 'tag-marketing',
        'Operations': 'tag-operations',
        'Legal': 'tag-legal',
        'HR': 'tag-hr',
        'Security': 'tag-security',
        'Design': 'tag-design',
        'Communications': 'tag-communications',
        'Product': 'tag-product',
        'Strategy': 'tag-strategy'
    };
    return tagMap[group] || 'tag-business';
}

// Render team cards
function renderTeamCards(data) {
    const teamGrid = document.getElementById('teamGrid');
    teamGrid.innerHTML = '';
    
    data.forEach(person => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.innerHTML = `
            <div class="card-icon">${person.icon}</div>
            <div class="card-name">${person.name}</div>
            <div class="card-title">${person.title}</div>
            <span class="card-tag ${getTagClass(person.group)}">${person.group}</span>
            <div class="card-description">${person.description}</div>
        `;
        
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
        
        teamGrid.appendChild(card);
    });
}

// Search functionality
document.getElementById('searchBox').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = teamData.filter(person => 
        person.name.toLowerCase().includes(searchTerm) ||
        person.title.toLowerCase().includes(searchTerm) ||
        person.description.toLowerCase().includes(searchTerm)
    );
    renderTeamCards(filtered);
});

// Filter functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        const filtered = filter === 'all' 
            ? teamData 
            : teamData.filter(person => person.group === filter);
        
        renderTeamCards(filtered);
    });
});

// Study mode
let studyIndex = 0;
let learnedCount = 0;
let studyDeck = [...teamData].sort(() => Math.random() - 0.5);

document.getElementById('modeToggle').addEventListener('click', () => {
    const studyMode = document.getElementById('studyMode');
    const btn = document.getElementById('modeToggle');
    
    if (studyMode.classList.contains('active')) {
        studyMode.classList.remove('active');
        document.getElementById('teamGrid').style.display = 'grid';
        btn.textContent = '🎓 Start Study Mode';
    } else {
        studyMode.classList.add('active');
        document.getElementById('teamGrid').style.display = 'none';
        btn.textContent = '📋 Back to Grid View';
        showFlashcard();
    }
});

function showFlashcard() {
    if (studyIndex >= studyDeck.length) {
        studyIndex = 0;
        studyDeck = [...teamData].sort(() => Math.random() - 0.5);
    }
    
    const person = studyDeck[studyIndex];
    const flashcard = document.getElementById('flashcard');
    
    flashcard.classList.remove('revealed');
    document.getElementById('flashcardName').textContent = person.name;
    document.getElementById('flashcardTitle').textContent = person.title;
    document.getElementById('flashcardDesc').textContent = person.description;
    document.getElementById('studyProgress').textContent = 
        `Card ${studyIndex + 1} of ${studyDeck.length}`;
}

document.getElementById('flashcard').addEventListener('click', () => {
    document.getElementById('flashcard').classList.toggle('revealed');
});

document.getElementById('knowBtn').addEventListener('click', () => {
    learnedCount++;
    animateCount(document.getElementById('learnedCount'), learnedCount, 500);
    createConfetti();
    studyIndex++;
    showFlashcard();
});

document.getElementById('reviewBtn').addEventListener('click', () => {
    studyIndex++;
    showFlashcard();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    studyIndex++;
    showFlashcard();
});

// Confetti effect
function createConfetti() {
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.background = ['#ffd700', '#ff6b6b', '#4ecdc4', '#95e1d3'][Math.floor(Math.random() * 4)];
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Initial render
renderTeamCards(teamData);

// ---------------- NEW: Quiz Feature (one-question-at-a-time, 35 questions) ----------------

/**
 * Behavior:
 * - Generate 35 questions based on teamData.
 * - Each question: "Who is the '<title>'?"
 * - Options: correct name + 3 random other names.
 * - Questions order and options order are shuffled each page load.
 */

const QUIZ_LENGTH = 35;
let quizQuestions = [];
let currentQ = 0;
let quizScore = 0;
let userAnswers = []; // to store user's selected option index per question

// Utility: shuffle array in-place
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Build quiz questions
function generateQuizQuestions(n = QUIZ_LENGTH) {
    const questions = [];
    const names = teamData.map(p => p.name);

    for (let i = 0; i < n; i++) {
        // pick a random person as the correct one
        const correctPerson = teamData[Math.floor(Math.random() * teamData.length)];
        const questionText = `Who is the "${correctPerson.title}"?`;

        // pick 3 distinct wrong names
        const wrongPool = names.filter(nm => nm !== correctPerson.name);
        shuffleArray(wrongPool);

        // if wrongPool length < 3 (rare), allow repeats
        const wrongOptions = wrongPool.slice(0, 3);

        const options = [correctPerson.name, ...wrongOptions];
        // shuffle options
        shuffleArray(options);

        const correctIndex = options.indexOf(correctPerson.name);

        questions.push({
            question: questionText,
            options,
            correctIndex,
            correctName: correctPerson.name
        });
    }

    // shuffle questions order
    return shuffleArray(questions);
}

// Render a question
function renderQuizQuestion(index) {
    const total = quizQuestions.length;
    const qObj = quizQuestions[index];

    document.getElementById('quizProgress').textContent = `Question ${index + 1} of ${total}`;
    document.getElementById('quizScore').textContent = `Score: ${quizScore}`;

    // question text
    document.getElementById('questionText').textContent = qObj.question;

    // options
    const optionsList = document.getElementById('optionsList');
    optionsList.innerHTML = '';
    qObj.options.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.dataset.index = i;
        btn.addEventListener('click', () => selectOption(i));
        optionsList.appendChild(btn);
    });

    // reset control buttons
    document.getElementById('submitQ').disabled = true;
    document.getElementById('nextQ').disabled = true;
    document.getElementById('prevQ').disabled = (index === 0);
    // provide previous answer highlight if user already answered
    if (typeof userAnswers[index] !== 'undefined') {
        highlightSelected(index, userAnswers[index], true);
    } else {
        clearOptionHighlights();
    }
}

// select an option (does not auto submit)
function selectOption(optionIndex) {
    // enable submit
    document.getElementById('submitQ').disabled = false;
    // store temporarily the selected index for this question (but only finalize on submit)
    // we will store in a temp attr on quizCard
    const quizCard = document.getElementById('quizCard');
    quizCard.dataset.selected = optionIndex;

    highlightSelected(currentQ, optionIndex, false);
}

function highlightSelected(qIndex, optionIndex, readOnly) {
    const optionBtns = document.querySelectorAll('#optionsList .option-btn');
    optionBtns.forEach(btn => {
        btn.classList.remove('selected', 'correct', 'wrong');
    });
    const chosen = optionBtns[optionIndex];
    if (chosen) chosen.classList.add('selected');

    // if readOnly true, mark correct/wrong colors
    if (readOnly) {
        const correctIdx = quizQuestions[qIndex].correctIndex;
        if (optionBtns[correctIdx]) optionBtns[correctIdx].classList.add('correct');
        if (optionBtns[optionIndex] && optionIndex !== correctIdx) optionBtns[optionIndex].classList.add('wrong');
    }
}

function clearOptionHighlights() {
    const optionBtns = document.querySelectorAll('#optionsList .option-btn');
    optionBtns.forEach(btn => {
        btn.classList.remove('selected', 'correct', 'wrong');
    });
}

// submit answer for current question
function submitAnswer() {
    const quizCard = document.getElementById('quizCard');
    const sel = quizCard.dataset.selected;
    if (typeof sel === 'undefined') return;
    const selIndex = Number(sel);
    const qObj = quizQuestions[currentQ];

    // if already answered before, don't double count (allow changing? here we keep first answer)
    if (typeof userAnswers[currentQ] === 'undefined') {
        userAnswers[currentQ] = selIndex;
        if (selIndex === qObj.correctIndex) {
            quizScore++;
        }
    } else {
        // if changing previous answer: adjust score accordingly
        const prev = userAnswers[currentQ];
        if (prev !== selIndex) {
            // adjust score
            if (prev === qObj.correctIndex) quizScore--;
            if (selIndex === qObj.correctIndex) quizScore++;
            userAnswers[currentQ] = selIndex;
        }
    }

    // lock UI for this question: show correct/wrong
    highlightSelected(currentQ, selIndex, true);
    document.getElementById('quizScore').textContent = `Score: ${quizScore}`;

    // enable next if not last
    document.getElementById('nextQ').disabled = (currentQ >= quizQuestions.length - 1);
    // disable submit to avoid double submits
    document.getElementById('submitQ').disabled = true;
}

// move to next question
function nextQuestion() {
    if (currentQ < quizQuestions.length - 1) {
        currentQ++;
        renderQuizQuestion(currentQ);
        // if at the end after moving, ensure next button disabled appropriately
        document.getElementById('nextQ').disabled = (currentQ >= quizQuestions.length - 1);
    } else {
        finishQuiz();
    }
}

// move to previous question
function prevQuestion() {
    if (currentQ > 0) {
        currentQ--;
        renderQuizQuestion(currentQ);
    }
}

// finish quiz: show summary / retake
function finishQuiz() {
    // hide controls and show final result
    const quizFooter = document.getElementById('quizFooter');
    quizFooter.innerHTML = `
        <div class="quiz-result">
            <h3>🎉 Quiz Complete!</h3>
            <p>Your score: <strong>${quizScore} / ${quizQuestions.length}</strong></p>
            <button id="retakeBtn" class="quiz-btn">🔁 Retake Quiz</button>
            <button id="reviewAnswersBtn" class="quiz-btn">🕵️ Review Answers</button>
        </div>
    `;
    // disable main controls
    document.getElementById('submitQ').disabled = true;
    document.getElementById('nextQ').disabled = true;
    document.getElementById('prevQ').disabled = true;

    document.getElementById('retakeBtn').addEventListener('click', () => {
        initQuiz(); // restart
    });

    document.getElementById('reviewAnswersBtn').addEventListener('click', () => {
        // show first question with answers highlighted in read-only mode
        currentQ = 0;
        renderQuizQuestion(currentQ);
        // mark all answered questions readOnly
        const total = quizQuestions.length;
        const reviewFooter = document.getElementById('quizFooter');
        reviewFooter.innerHTML = `<p>Use ◀ / ▶ to navigate and see highlighted correct/wrong answers.</p>`;
        document.getElementById('prevQ').disabled = true;
        document.getElementById('nextQ').disabled = false;
        // allow prev/next
        document.getElementById('submitQ').disabled = true;
        // ensure each question shows correct/wrong (if answered)
        if (typeof userAnswers[currentQ] !== 'undefined') {
            highlightSelected(currentQ, userAnswers[currentQ], true);
        } else {
            // just highlight correct one
            const correctIdx = quizQuestions[currentQ].correctIndex;
            const optionBtns = document.querySelectorAll('#optionsList .option-btn');
            optionBtns.forEach(btn => btn.classList.remove('selected','correct','wrong'));
            if (optionBtns[correctIdx]) optionBtns[correctIdx].classList.add('correct');
        }
    });
}

// initialize quiz (generate, reset state, render first)
function initQuiz() {
    quizQuestions = generateQuizQuestions(QUIZ_LENGTH);
    currentQ = 0;
    quizScore = 0;
    userAnswers = new Array(quizQuestions.length);
    document.getElementById('quizFooter').innerHTML = '';
    document.getElementById('nextQ').disabled = true;
    document.getElementById('submitQ').disabled = true;
    document.getElementById('prevQ').disabled = true;
    // clear any selected data
    const quizCard = document.getElementById('quizCard');
    delete quizCard.dataset.selected;

    renderQuizQuestion(currentQ);
    document.getElementById('quizScore').textContent = `Score: ${quizScore}`;
}

// wire quiz control buttons
document.addEventListener('DOMContentLoaded', () => {
    // ensure quiz HTML elements exist
    if (document.getElementById('quizSection')) {
        document.getElementById('prevQ').addEventListener('click', () => {
            prevQuestion();
        });
        document.getElementById('nextQ').addEventListener('click', () => {
            // if at last question and next clicked -> finish
            if (currentQ >= quizQuestions.length - 1) {
                finishQuiz();
            } else {
                nextQuestion();
            }
        });
        document.getElementById('submitQ').addEventListener('click', () => {
            submitAnswer();
        });

        initQuiz();
    }
});

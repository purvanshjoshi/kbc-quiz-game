// Game State
let playerName = '';
let currentScore = 0;
let warmupCount = 0;
let challengeCount = 0;
let warmupCorrect = 0;
let currentRound = '';

// Warmup Questions
const warmupQuestions = [
    { q: "Which of the following is a Palindrome number?", options: ["42042", "101010", "23232", "01234"], correct: 2 },
    { q: "Which country with the highest environmental performance index is?", options: ["France", "Denmark", "Switzerland", "Finland"], correct: 2 },
    { q: "Which animal laughs like human being?", options: ["Polar Bear", "Hyena", "Donkey", "Chimpanzee"], correct: 1 },
    { q: "Who was awarded the youngest player award in Fifa World Cup 2006?", options: ["Wayne Rooney", "Lucas Podolski", "Lionel Messi", "Christiano Ronaldo"], correct: 1 },
    { q: "Which is the third highest mountain in the world?", options: ["Mt. K2", "Mt. Kanchanjungha", "Mt. Makalu", "Mt. Kilimanjaro"], correct: 1 }
];

// Challenge Questions  
const challengeQuestions = [
    { q: "What is the National Game of England?", options: ["Football", "Basketball", "Cricket", "Baseball"], correct: 2 },
    { q: "Study of Earthquake is called...", options: ["Seismology", "Cosmology", "Orology", "Etimology"], correct: 0 },
    { q: "Of the top 10 highest peaks in the world, how many lie in Nepal?", options: ["6", "7", "8", "9"], correct: 2 },
    { q: "Laws of Electromagnetic Induction were given by?", options: ["Faraday", "Tesla", "Maxwell", "Coulomb"], correct: 0 },
    { q: "In what unit is electric power measured?", options: ["Coulomb", "Watt", "Power", "Units"], correct: 1 },
    { q: "Which element is found in Vitamin B12?", options: ["Zinc", "Cobalt", "Calcium", "Iron"], correct: 1 },
    { q: "What is the National Name of Japan?", options: ["Polska", "Hellas", "Drukyul", "Nippon"], correct: 3 },
    { q: "How many times a piece of paper can be folded at the most?", options: ["6", "7", "8", "Depends on the size of paper"], correct: 1 },
    { q: "What is the capital of Denmark?", options: ["Copenhagen", "Helsinki", "Ajax", "Galatasaray"], correct: 0 },
    { q: "Which is the longest River in the world?", options: ["Nile", "Koshi", "Ganga", "Amazon"], correct: 0 }
];

// Screen Navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function showStart() {
    showScreen('startScreen');
}

function showHelp() {
    showScreen('helpScreen');
}

// Start Game
function startGame() {
    playerName = document.getElementById('playerName').value.trim();
    if (!playerName) {
        alert('⚠️ Please enter your name to start!');
        return;
    }
    currentScore = 0;
    warmupCount = 0;
    warmupCorrect = 0;
    challengeCount = 0;
    currentRound = 'warmup';
    shuffleArray(warmupQuestions);
    showScreen('warmupScreen');
    loadWarmupQuestion();
}

// Warmup Round
function loadWarmupQuestion() {
    if (warmupCount >= 3) {
        checkWarmupQualification();
        return;
    }
    
    const question = warmupQuestions[warmupCount];
    document.getElementById('warmupQuestion').textContent = `Question ${warmupCount + 1} of 3`;
    document.getElementById('warmupQ').textContent = question.q;
    
    const optionsDiv = document.getElementById('warmupOptions');
    optionsDiv.innerHTML = '';
    
    question.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = `${String.fromCharCode(65 + idx)}. ${opt}`;
        btn.onclick = () => checkWarmupAnswer(idx);
        optionsDiv.appendChild(btn);
    });
    
    document.getElementById('warmupResult').textContent = '';
}

function checkWarmupAnswer(selected) {
    const question = warmupQuestions[warmupCount];
    const buttons = document.querySelectorAll('#warmupOptions .option-btn');
    const resultDiv = document.getElementById('warmupResult');
    
    buttons.forEach((btn, idx) => {
        btn.onclick = null;
        if (idx === question.correct) {
            btn.classList.add('correct');
        } else if (idx === selected && idx !== question.correct) {
            btn.classList.add('wrong');
        }
    });
    
    if (selected === question.correct) {
        warmupCorrect++;
        resultDiv.textContent = '✅ Correct!';
        resultDiv.className = 'result-message correct';
    } else {
        resultDiv.textContent = '❌ Wrong! The correct answer is ' + String.fromCharCode(65 + question.correct);
        resultDiv.className = 'result-message wrong';
    }
    
    warmupCount++;
    setTimeout(() => loadWarmupQuestion(), 2000);
}

function checkWarmupQualification() {
    if (warmupCorrect >= 2) {
        currentRound = 'challenge';
        shuffleArray(challengeQuestions);
        showScreen('challengeScreen');
        loadChallengeQuestion();
    } else {
        document.getElementById('finalMessage').textContent = '😞 NOT QUALIFIED';
        document.getElementById('finalAmount').textContent = 'You need at least 2 correct answers';
        document.getElementById('finalPlayerName').textContent = playerName;
        showScreen('finalScreen');
    }
}

// Challenge Round
function loadChallengeQuestion() {
    if (challengeCount >= 10) {
        endGame();
        return;
    }
    
    const question = challengeQuestions[challengeCount];
    document.getElementById('challengeQuestion').textContent = `Question ${challengeCount + 1} of 10`;
    document.getElementById('challengeQ').textContent = question.q;
    document.getElementById('currentScore').textContent = `₹${currentScore.toLocaleString('en-IN')}`;
    
    const optionsDiv = document.getElementById('challengeOptions');
    optionsDiv.innerHTML = '';
    
    question.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = `${String.fromCharCode(65 + idx)}. ${opt}`;
        btn.onclick = () => checkChallengeAnswer(idx);
        optionsDiv.appendChild(btn);
    });
    
    document.getElementById('challengeResult').textContent = '';
}

function checkChallengeAnswer(selected) {
    const question = challengeQuestions[challengeCount];
    const buttons = document.querySelectorAll('#challengeOptions .option-btn');
    const resultDiv = document.getElementById('challengeResult');
    
    buttons.forEach((btn, idx) => {
        btn.onclick = null;
        if (idx === question.correct) {
            btn.classList.add('correct');
        } else if (idx === selected && idx !== question.correct) {
            btn.classList.add('wrong');
        }
    });
    
    if (selected === question.correct) {
        currentScore += 100000;
        resultDiv.textContent = '✅ Correct! +₹1,00,000';
        resultDiv.className = 'result-message correct';
        document.getElementById('currentScore').textContent = `₹${currentScore.toLocaleString('en-IN')}`;
    } else {
        resultDiv.textContent = '❌ Wrong! The correct answer is ' + String.fromCharCode(65 + question.correct);
        resultDiv.className = 'result-message wrong';
        setTimeout(() => endGame(), 2000);
        return;
    }
    
    challengeCount++;
    setTimeout(() => loadChallengeQuestion(), 2000);
}

// End Game
function endGame() {
    saveScore();
    
    if (currentScore === 1000000) {
        document.getElementById('finalMessage').textContent = '🏆 CROREPATI!';
    } else if (currentScore >= 500000) {
        document.getElementById('finalMessage').textContent = '🎉 CONGRATULATIONS!';
    } else if (currentScore > 0) {
        document.getElementById('finalMessage').textContent = '👏 WELL PLAYED!';
    } else {
        document.getElementById('finalMessage').textContent = '😔 BETTER LUCK NEXT TIME';
    }
    
    document.getElementById('finalAmount').textContent = `₹${currentScore.toLocaleString('en-IN')}`;
    document.getElementById('finalPlayerName').textContent = playerName;
    showScreen('finalScreen');
}

// Leaderboard
function saveScore() {
    let scores = JSON.parse(localStorage.getItem('kbcLeaderboard')) || [];
    scores.push({ name: playerName, score: currentScore, date: new Date().toLocaleDateString() });
    scores.sort((a, b) => b.score - a.score);
    scores = scores.slice(0, 10);
    localStorage.setItem('kbcLeaderboard', JSON.stringify(scores));
}

function showLeaderboard() {
    const scores = JSON.parse(localStorage.getItem('kbcLeaderboard')) || [];
    const listDiv = document.getElementById('leaderboardList');
    
    if (scores.length === 0) {
        listDiv.innerHTML = '<p style="text-align:center;color:#4A90E2;font-size:1.2rem;">No scores yet. Be the first to play!</p>';
    } else {
        listDiv.innerHTML = scores.map((s, i) => `
            <div class="leaderboard-item">
                <span class="rank">${i + 1}</span>
                <span class="player-info">${s.name}</span>
                <span class="score">₹${s.score.toLocaleString('en-IN')}</span>
            </div>
        `).join('');
    }
    
    showScreen('leaderboardScreen');
}

// Utility
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Utility Functions for KBC Quiz Game

/**
 * Shuffle array elements randomly
 * @param {Array} array - Array to shuffle
 * @returns {Array} - Shuffled array
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Get random element from array
 * @param {Array} array - Source array
 * @returns {*} - Random element
 */
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Format currency for Indian Rupees
 * @param {number} amount - Amount to format
 * @returns {string} - Formatted currency string
 */
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Validate if answer is correct
 * @param {string} userAnswer - User's selected answer
 * @param {string} correctAnswer - Correct answer
 * @returns {boolean} - True if correct
 */
function isAnswerCorrect(userAnswer, correctAnswer) {
  return userAnswer.toLowerCase() === correctAnswer.toLowerCase();
}

/**
 * Get filtered options based on lifeline
 * @param {Array} options - Array of answer options
 * @param {string} correct - Correct answer
 * @returns {Array} - Filtered options
 */
function apply50Lifeline(options, correct) {
  const filtered = [correct];
  const incorrect = options.filter(opt => opt !== correct);
  const selectedWrong = incorrect.slice(0, 2);
  return shuffleArray([...filtered, ...selectedWrong]);
}

/**
 * Save score to localStorage
 * @param {string} playerName - Player name
 * @param {number} score - Final score
 */
function saveScore(playerName, score) {
  const scores = JSON.parse(localStorage.getItem('kbc_scores')) || [];
  scores.push({ name: playerName, score, timestamp: new Date() });
  localStorage.setItem('kbc_scores', JSON.stringify(scores));
}

/**
 * Get leaderboard scores
 * @returns {Array} - Sorted scores
 */
function getLeaderboard() {
  const scores = JSON.parse(localStorage.getItem('kbc_scores')) || [];
  return scores.sort((a, b) => b.score - a.score).slice(0, 10);
}

/**
 * Delay execution for given milliseconds
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise} - Promise that resolves after delay
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

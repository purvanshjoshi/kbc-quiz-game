// KBC Quiz Game Configuration
// Central configuration for game settings and constants

const GAME_CONFIG = {
  // Game difficulty levels and prize structure
  levels: [
    { level: 1, prize: 100, difficulty: 'easy' },
    { level: 2, prize: 500, difficulty: 'easy' },
    { level: 3, prize: 1000, difficulty: 'easy' },
    { level: 4, prize: 5000, difficulty: 'easy' },
    { level: 5, prize: 10000, difficulty: 'easy' },
    { level: 6, prize: 20000, difficulty: 'medium' },
    { level: 7, prize: 40000, difficulty: 'medium' },
    { level: 8, prize: 80000, difficulty: 'medium' },
    { level: 9, prize: 160000, difficulty: 'medium' },
    { level: 10, prize: 300000, difficulty: 'medium' },
    { level: 11, prize: 500000, difficulty: 'hard' },
    { level: 12, prize: 1000000, difficulty: 'hard' },
    { level: 13, prize: 2000000, difficulty: 'hard' },
    { level: 14, prize: 5000000, difficulty: 'hard' },
    { level: 15, prize: 10000000, difficulty: 'hard' }
  ],

  // Lifeline configuration
  lifelines: [
    { name: '50-50', used: false, description: 'Remove 2 wrong options' },
    { name: 'Phone a Friend', used: false, description: 'Get a suggestion' },
    { name: 'Audience Poll', used: false, description: 'Get audience voting' }
  ],

  // UI Configuration
  ui: {
    animationDuration: 300,
    transitionDelay: 500,
    soundEnabled: true,
    theme: 'dark'
  },

  // Game rules
  rules: {
    maxQuestions: 15,
    optionsPerQuestion: 4,
    timePerQuestion: null,
    minimumScoreToWin: 10000000
  },

  // Messages
  messages: {
    correctAnswer: 'Correct Answer!',
    wrongAnswer: 'Wrong Answer!',
    gameWon: 'Congratulations! You won!',
    gameLost: 'Game Over! Better luck next time!'
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GAME_CONFIG;
}

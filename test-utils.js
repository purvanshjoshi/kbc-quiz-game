/**
 * Test utilities for KBC Quiz Game
 * Provides testing helpers and mock functions
 */

// Mock quiz questions for testing
export const mockQuestions = [
  {
    id: 1,
    text: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: 1,
    difficulty: "easy"
  },
  {
    id: 2,
    text: "What is the capital of France?",
    options: ["Berlin", "London", "Paris", "Rome"],
    correct: 2,
    difficulty: "easy"
  }
];

// Mock player scores
export const mockScores = [
  { playerName: "Alice", score: 1000000, timestamp: Date.now() },
  { playerName: "Bob", score: 500000, timestamp: Date.now() },
  { playerName: "Charlie", score: 250000, timestamp: Date.now() }
];

// Test helper: Reset localStorage
export function resetTestStorage() {
  localStorage.clear();
  sessionStorage.clear();
}

// Test helper: Setup mock data
export function setupMockData() {
  localStorage.setItem('kbc_questions', JSON.stringify(mockQuestions));
  localStorage.setItem('kbc_scores', JSON.stringify(mockScores));
}

// Test helper: Validate quiz structure
export function validateQuizStructure(question) {
  if (!question.id || !question.text || !question.options || question.correct === undefined) {
    throw new Error('Invalid question structure');
  }
  if (question.options.length < 2) {
    throw new Error('Question must have at least 2 options');
  }
}

// Test helper: Create test player
export function createTestPlayer(name = 'TestPlayer', score = 0) {
  return {
    playerName: name,
    score: score,
    timestamp: Date.now(),
    lifelinesUsed: 0,
    questionsAnswered: 0
  };
}

// Test helper: Verify score ranking
export function getPlayerRank(playerScore, allScores) {
  const sortedScores = allScores.sort((a, b) => b.score - a.score);
  const rank = sortedScores.findIndex(s => s.score <= playerScore) + 1;
  return rank || sortedScores.length + 1;
}

export default {
  mockQuestions,
  mockScores,
  resetTestStorage,
  setupMockData,
  validateQuizStructure,
  createTestPlayer,
  getPlayerRank
};

# KBC Quiz Game - System Architecture

## Overview
KBC Quiz Game is an interactive web-based quiz application inspired by the popular Indian game show "Kaun Banega Crorepati" (Who Wants to Be a Millionaire). It provides an engaging user experience with multiple-choice questions, score tracking, real-time leaderboard, and gamification features.

## Architecture Diagram

```
┌───────────────────────────────────────────────────────┐
│           User Interface Layer (Frontend)              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│  │  HTML/DOM    │  │  Styling     │  │ Interactions │ │
│  │  Structure   │  │  (CSS)       │  │  (JavaScript)│ │
│  └──────────────┘  └──────────────┘  └──────────────┘ │
└──────────────┬─────────────────────────────────────────┘
               │
       ┌───────▼────────┐
       │  Game Engine   │
       │  (JavaScript)  │
       └───────┬────────┘
               │
┌──────────────┼────────────────────────────────────────┐
│              │  Application Layer                      │
│  ┌──────────▼──────────┐  ┌─────────────────────────┐ │
│  │ Game Logic Manager   │  │ Local Storage Manager  │ │
│  │ - Question Handler   │  │ - Save Scores          │ │
│  │ - Answer Validation  │  │ - Save Progress        │ │
│  │ - Score Calculation  │  │ - Leaderboard Data     │ │
│  └──────────┬───────────┘  └──────────┬──────────────┘ │
│             │                         │                │
│  ┌──────────▼──────────┐  ┌──────────▼──────────────┐ │
│  │ Configuration Layer   │  │ Utility Functions      │ │
│  │ - Game Levels        │  │ - Random Shuffling     │ │
│  │ - Game Rules         │  │ - Data Formatting      │ │
│  │ - Difficulty Settings│  │ - Event Handlers       │ │
│  └──────────────────────┘  └───────────────────────┘ │
└──────────────────────────────────────────────────────────┘
               │
┌──────────────▼──────────────────────────────────────────┐
│              Data & State Management                     │
│  ┌──────────────────┐  ┌──────────────────────────────┐ │
│  │ Browser Storage  │  │ Application State            │ │
│  │ - IndexedDB      │  │ - Current Question           │ │
│  │ - localStorage   │  │ - Player Score               │ │
│  │ - sessionStorage │  │ - Game Status                │ │
│  └──────────────────┘  └──────────────────────────────┘ │
└───────────────────────────────────────────────────────────┘
```

## System Components

### 1. User Interface Layer
The frontend presentation layer built with HTML, CSS, and JavaScript:
- **HTML Structure**: Semantic markup for game layout
- **CSS Styling**: Responsive design with animations and effects
- **JavaScript Interactions**: DOM manipulation and event handling

### 2. Game Engine (JavaScript Core)
Main logic controller that orchestrates all game operations:
- **Game Manager**: Initializes and controls game flow
- **Question Handler**: Loads and manages question display
- **Event Dispatcher**: Handles all user interactions
- **Score Calculator**: Computes and tracks scores

### 3. Application Layer
Business logic implementation:
- **Game Logic Manager**: 
  - Question selection and randomization
  - Answer validation and checking
  - Score calculation and update
  - Game state management
  
- **Local Storage Manager**:
  - Persistent score storage
  - Player progress tracking
  - Leaderboard data persistence
  - Settings management

### 4. Configuration Layer
Game settings and rules:
- **Game Levels**: Difficulty progression configuration
- **Question Difficulty**: Points and time limits per level
- **Game Rules**: Validation rules and constraints

### 5. Utility Functions
Helper methods:
- **Array Utilities**: Shuffling and sorting
- **DOM Utilities**: Element selection and manipulation
- **Data Utilities**: Formatting and parsing
- **Event Utilities**: Event binding and delegation

## Directory Structure

```
kbc-quiz-game/
├── index.html              # Main game interface
├── script.js               # Game logic and functionality
├── style.css               # Styling and animations
├── styles-improvements.css # Enhanced UI styles
├── game-config.js          # Game configuration
├── utils.js                # Utility functions
├── test-utils.js           # Testing utilities
├── test-utils-spec.js      # Test specifications
├── ARCHITECTURE.md         # This file
├── README.md              # Project documentation
└── .github/               # GitHub configuration
    └── workflows/         # CI/CD pipelines
```

## Key Technologies & Libraries

### Frontend Technologies
- **HTML5**: Semantic markup and structure
- **CSS3**: 
  - Flexbox and Grid layouts
  - CSS Animations and Transitions
  - Media Queries for responsiveness
  - CSS Variables for theming
  
- **JavaScript (ES6+)**:
  - Arrow functions and classes
  - Array methods and destructuring
  - Promise-based operations
  - Module pattern for code organization

### Storage & Data
- **Browser APIs**:
  - localStorage: Persistent player data
  - sessionStorage: Temporary session data
  - IndexedDB: Complex data structure storage

### Development & Testing
- **Testing Framework**: Custom test utilities
- **Version Control**: Git for code management
- **CI/CD**: GitHub Actions for automated testing

## Data Flow

### 1. Game Initialization Flow
```
Page Load
    ↓
Load Configuration
    ↓
Initialize Game State
    ↓
Load Stored Progress/Scores
    ↓
Render Initial UI
    ↓
Ready for Player Input
```

### 2. Question Flow
```
Player Selects Start
    ↓
Load Question from Pool
    ↓
Shuffle Answers
    ↓
Render Question & Options
    ↓
Wait for Answer Selection
    ↓
Validate Answer
    ↓
Update Score & Progress
    ↓
Load Next Question or End Game
```

### 3. Score Management Flow
```
Answer Submitted
    ↓
Calculate Points Based on:
  - Difficulty Level
  - Time Taken
  - Correct Answer
    ↓
Update Current Score
    ↓
Save to localStorage
    ↓
Update Leaderboard
    ↓
Display Score UI
```

## File Descriptions

### index.html
Main HTML file containing:
- Game container structure
- Question display area
- Answer options layout
- Score and progress display
- Modal dialogs for settings/results
- Leaderboard display section

### script.js
Core game logic:
- Game initialization
- Question and answer management
- Event listeners for user interactions
- Score calculation and tracking
- Game state management
- Leaderboard operations

### style.css
Primary styling:
- Layout styles (Flexbox, Grid)
- Color scheme and themes
- Typography
- Basic animations

### styles-improvements.css
Enhanced styling:
- Advanced animations
- Interactive effects
- Visual polish
- Improved accessibility
- Responsive improvements

### game-config.js
Configuration and constants:
- Question bank definition
- Difficulty levels
- Points per level
- Time limits
- Game settings

### utils.js
Utility functions:
- Array shuffling and sorting
- DOM manipulation helpers
- Data formatting functions
- Event handling utilities
- Storage management functions

### test-utils.js
Testing utilities:
- Mock data generators
- Test helpers
- Assertion utilities

## Game Features Architecture

### 1. Multiple Question Levels
```
Level 1 (Easy)     → 1 Point per Question
Level 2 (Medium)   → 5 Points per Question
Level 3 (Hard)     → 10 Points per Question
Level 4 (Expert)   → 25 Points per Question
```

### 2. Score Tracking System
- **In-Game Score**: Current session score
- **Leaderboard Score**: Best scores across sessions
- **Total Points**: Cumulative achievement points

### 3. Leaderboard Management
- Local storage of top scores
- Player name tracking
- Timestamp recording
- Sorting by highest score

### 4. Progress System
- Track completed questions
- Display progress bar
- Save game state
- Resume capability

### 5. User Settings
- Difficulty preference
- Sound toggle
- Theme selection
- Saved player name

## State Management

### Game State Object
```javascript
{
  currentLevel: 1-4,
  currentScore: number,
  questionsAnswered: number,
  currentQuestion: questionObject,
  selectedAnswer: number,
  gameActive: boolean,
  gameOver: boolean,
  playerName: string,
  timeRemaining: number
}
```

### Local Storage Keys
```javascript
'topScores'      // Leaderboard data
'playerName'     // Saved player name
'currentGame'    // In-progress game state
'userSettings'   // User preferences
```

## Performance Considerations

### Optimization Strategies
1. **DOM Caching**: Store element references
2. **Event Delegation**: Use single listener for multiple elements
3. **Lazy Loading**: Load content only when needed
4. **Animation Optimization**: Use CSS transforms
5. **Local Storage Caching**: Minimize API calls

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Fallbacks for older browser features
- Progressive enhancement approach

## Security Features

1. **Input Validation**: Validate all user inputs
2. **XSS Prevention**: Escape HTML content
3. **localStorage Security**: No sensitive data stored
4. **Code Security**: No external dependencies vulnerability

## Accessibility Features

1. **Keyboard Navigation**: Full keyboard support
2. **ARIA Labels**: Screen reader compatibility
3. **Color Contrast**: WCAG AA compliance
4. **Text Sizing**: Responsive text scaling
5. **Focus Indicators**: Clear focus states

## Scalability & Future Enhancements

### Current Limitations
- Single-player only
- No real-time multiplayer
- Limited to client-side storage
- No user authentication

### Proposed Enhancements
1. **Backend Integration**:
   - Server for question storage
   - User authentication system
   - Cloud-based leaderboard
   - Database for scores

2. **Multiplayer Features**:
   - Real-time multiplayer mode
   - WebSocket for live updates
   - Player-versus-player mode
   - Team competitions

3. **Advanced Features**:
   - Hint system
   - Fifty-fifty lifeline
   - Phone-a-friend feature
   - Difficulty adaptive questions

4. **Analytics**:
   - User behavior tracking
   - Performance metrics
   - Question difficulty analysis
   - User engagement analytics

5. **Mobile Application**:
   - Native mobile apps
   - Offline mode support
   - Push notifications
   - Progressive Web App (PWA)

## Testing Architecture

### Current Testing
- Unit tests via test-utils.js
- Manual testing procedures
- Browser compatibility testing

### Proposed Testing Enhancements
- Automated test suite with Jest/Mocha
- Integration tests
- End-to-end testing with Cypress
- Performance testing
- Visual regression testing

## Deployment

### Current Deployment
- Static site hosting (GitHub Pages)
- Direct browser access
- No build process required

### Future Deployment Options
- Webpack bundling
- Minification and optimization
- CDN distribution
- Docker containerization
- Serverless deployment

## Contributing to Architecture

When contributing to this project:
1. Follow modular coding patterns
2. Maintain separation of concerns
3. Update this documentation
4. Add tests for new features
5. Follow coding style guide
6. Ensure backward compatibility

## Performance Metrics

### Target Metrics
- Load time: < 2 seconds
- First interactive: < 3 seconds
- Lighthouse Score: > 90

### Monitoring
- Browser DevTools performance
- User timing API
- Custom performance markers

---

**Last Updated**: December 2024
**Architecture Version**: 1.0
**Game Type**: Interactive Quiz Game
**Maintainer**: Purvansh Joshi

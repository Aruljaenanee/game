# 🍌 GO BANANAS Game

## Overview
Go Bananas is a fun, interactive web-based game with a colorful interface, playful animations, and a competitive leaderboard system. The game features a cheerful design with custom fonts, animated elements, and a session-based user system.

## Features
- **User Authentication**: Login/registration system with session management
- **Personalized Experience**: Custom greetings for logged-in users
- **Animated Interface**: Playful animations including floating bubbles, card flips, and bouncing elements
- **Leaderboard System**: Competitive scoreboard showing player rankings with special highlighting for the top scorer
- **Responsive Design**: Fully responsive interface that works on desktop and mobile devices
- **Background Music**: Fun audio tracks that enhance the gaming experience

## Project Structure
```
go-bananas/
├── public/
│   ├── music/
│   │   ├── start.mp3
│   │   ├── fun_tune.mp3
│   │   └── game_music.mp3
│   ├── images/
│   │   └── [game images]
│   └── [other static assets]
├── views/
│   ├── index.html      # Login/Registration page
│   ├── about.html      # Main menu page
│   ├── game.html       # Game interface
│   └── leaderboard.html # Leaderboard display
├── css/
│   ├── main.css
│   ├── game.css
│   └── leaderboard.css
├── js/
│   ├── game.js         # Core game logic
│   ├── auth.js         # Authentication functions
│   └── leaderboard.js  # Leaderboard functionality
├── server.js           # Main server file
├── routes/
│   ├── auth.js         # Authentication routes
│   ├── game.js         # Game-related routes
│   └── leaderboard.js  # Leaderboard data routes
├── models/
│   ├── user.js         # User data model
│   └── score.js        # Score data model
├── package.json
└── README.md
```

## Technical Stack
- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js with Express
- **Database**: MongoDB (for user accounts and scores)
- **Authentication**: Session-based with cookies
- **Styling**: Custom CSS with animations
- **Icons**: Font Awesome

## Installation & Setup

### Prerequisites
- Node.js (v14 or later)
- MongoDB
- npm or yarn

### Steps
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/go-bananas.git
   cd go-bananas
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/go-bananas
   SESSION_SECRET=your_session_secret_here
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Game Instructions
1. **Login/Register**: Create an account or login to track your scores
2. **Start Game**: Click the "Start Game" button from the main menu
3. **How to Play**: [Include specific game mechanics here]
4. **Scoring**: Points are awarded for [explain scoring system]
5. **Levels**: Progress through levels by [explain level progression]
6. **Leaderboard**: Check your ranking against other players

## Development Notes

### CSS Animations
The project uses several custom animations:
- `floatingBubbles`: Creates a moving bubble background effect
- `shine`: Adds a radial shine effect to the card
- `floatIn`: Smooth entrance animation for elements
- `cardFlip`: 3D flip effect when pages load
- `bounce`: Makes the title bounce up and down
- `swing`: Creates the swinging effect for the banana icons

### Audio Implementation
Background music is implemented with volume control and autoplay fallbacks to handle browser restrictions.

### Responsive Design
The design adapts to different screen sizes with specific breakpoints at 600px and 350px widths.

###Screenshots
![Leaderboard](https://github.com/user-attachments/assets/52f32873-c041-4a7f-8077-0d938cb620d2)


## Future Enhancements
- Add more game levels and challenges
- Implement social sharing functionality
- Add achievements/badges system
- Create a mobile app version
- Add multiplayer functionality

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Credits
- Font Awesome for icons
- Google Fonts for the "Luckiest Guy" font
- [Any other credits for assets, music, etc.]

## Contact
For any questions or suggestions, please contact [your contact information].

---

Enjoy playing Go Bananas! 🍌

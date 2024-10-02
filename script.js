// Define consonant-vowel combinations
const combinations = [
    { combo: 'ba', sound: 'sounds/ba.mp3' },
    { combo: 'be', sound: 'sounds/be.mp3' },
    { combo: 'bi', sound: 'sounds/bi.mp3' },
    { combo: 'bo', sound: 'sounds/bo.mp3' },
    { combo: 'bu', sound: 'sounds/bu.mp3' },
    { combo: 'by', sound: 'sounds/by.mp3' },
    { combo: 'bæ', sound: 'sounds/bæ.mp3' },
    { combo: 'bø', sound: 'sounds/bø.mp3' },
    { combo: 'bå', sound: 'sounds/bå.mp3' },
    { combo: 'ca', sound: 'sounds/ca.mp3' },
    { combo: 'ce', sound: 'sounds/ce.mp3' },
    { combo: 'ci', sound: 'sounds/ci.mp3' },
    { combo: 'co', sound: 'sounds/co.mp3' },
    { combo: 'cu', sound: 'sounds/cu.mp3' },
    { combo: 'cy', sound: 'sounds/cy.mp3' },
    { combo: 'cæ', sound: 'sounds/cæ.mp3' },
    { combo: 'cø', sound: 'sounds/cø.mp3' },
    { combo: 'cå', sound: 'sounds/cå.mp3' }
];

// Array of emojis for reward
const emojis = ['🎉', '🎈', '🌟', '🚀', '🦄'];

const combinationDisplay = document.getElementById('combination');
const playSoundButton = document.getElementById('play-sound');
const nextButton = document.getElementById('next');
const emojiReward = document.getElementById('emoji-reward');

// Tab elements for levels
const level1Tab = document.getElementById('level1-tab');
const level2Tab = document.getElementById('level2-tab');
const level3Tab = document.getElementById('level3-tab');

// Emoji tracker elements
const emojiCounters = Array.from(document.getElementsByClassName('emoji-counter'));

let soundsToPlay = [];  // Array to store sounds for the current combination
let currentLevel = 1;  // Default to Level 1 (1 combination)
let isFirstPress = true;  // Track if the "Next" button is pressed for the first time
let tapCount = 0;  // To count the number of taps on the "Next" button

// Function to hide the title after opening the app
function hideTitle() {
    setTimeout(() => {
        appTitle.style.display = 'none';  // Hide the title
    }, 2000);  // 2-second delay (you can adjust this delay as needed)
}

// Function to play the sounds sequentially
function playSoundSequentially(sounds) {
    if (sounds.length === 0) return;  // No sounds to play

    const audio = new Audio(sounds[0]);
    audio.play();

    // Play the next sound after the current one finishes
    audio.onended = () => {
        playSoundSequentially(sounds.slice(1));  // Play the rest of the sounds
    };
}

// Function to generate random consonant-vowel pairs based on the level
function generateRandomCombination(level) {
    soundsToPlay = []; // Clear previous sounds

    let combinationText = '';  // To store the combination text

    // Generate random consonant-vowel pairs based on the current level
    for (let i = 0; i < level; i++) {
        const randomIndex = Math.floor(Math.random() * combinations.length);
        const selectedCombo = combinations[randomIndex];

        combinationText += selectedCombo.combo;  // Concatenate the text
        soundsToPlay.push(selectedCombo.sound);  // Store the corresponding sound
    }

    return combinationText;
}

// Function to update the display with a new random combination but not play the sound
function updateDisplayWithRandomCombination() {
    const newCombination = generateRandomCombination(currentLevel);  // Use currentLevel for the number of combinations
    combinationDisplay.textContent = newCombination;  // Display the random consonant-vowel combination
}

// Function to show emoji reward every 10 taps
function showEmojiReward() {
    if (tapCount % 10 === 0 && tapCount > 0) {
        // Show a random emoji from the emoji array
        const randomEmojiIndex = Math.floor(Math.random() * emojis.length);
        const randomEmoji = emojis[randomEmojiIndex];
        
        emojiReward.textContent = `🎉 Du har tjent en: ${randomEmoji}`;
        emojiReward.style.opacity = '1';  // Make the emoji visible

        // Update the corresponding emoji counter
        const counterElement = document.getElementById(`counter-${randomEmojiIndex}`);
        let currentCount = parseInt(counterElement.textContent);
        counterElement.textContent = currentCount + 1;

        // Hide the emoji reward after 3 seconds
        setTimeout(() => {
            emojiReward.style.opacity = '0';
        }, 3000);
    }
}

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
    updateDisplayWithRandomCombination();  // Display a new random combination

    // Add special effect for button press
    nextButton.classList.add('next-pressed');
    setTimeout(() => {
        nextButton.classList.remove('next-pressed');  // Remove effect after animation
    }, 500);

    // After the first press, change "Start" to "Næste"
    if (isFirstPress) {
        nextButton.textContent = 'Næste';  // Change button text to "Næste"
        isFirstPress = false;  // Mark that the button has been pressed
    }

    // Increment the tap counter
    tapCount++;
    
    // Show emoji reward every 10th press
    showEmojiReward();
});

// Event listener for the "Lyd" button to play the sounds
playSoundButton.addEventListener('click', () => {
    if (soundsToPlay.length > 0) {
        playSoundSequentially(soundsToPlay);  // Play the sounds associated with the current combination
    }
});

// Tab event listeners for selecting the level
level1Tab.addEventListener('click', () => {
    currentLevel = 1;  // Set to Level 1 (1 combination)
    level1Tab.style.backgroundColor = '#0056b3';
    level2Tab.style.backgroundColor = '#007bff';
    level3Tab.style.backgroundColor = '#007bff';
});

level2Tab.addEventListener('click', () => {
    currentLevel = 2;  // Set to Level 2 (2 combinations)
    level2Tab.style.backgroundColor = '#0056b3';
    level1Tab.style.backgroundColor = '#007bff';
    level3Tab.style.backgroundColor = '#007bff';
});

level3Tab.addEventListener('click', () => {
    currentLevel = 3;  // Set to Level 3 (3 combinations)
    level3Tab.style.backgroundColor = '#0056b3';
    level1Tab.style.backgroundColor = '#007bff';
    level2Tab.style.backgroundColor = '#007bff';
});

// Initialize the page with no combination shown (waiting for "Next" to be clicked)
combinationDisplay.textContent = '';  // Empty initial display

// Initialize the "Next" button with "Start"
nextButton.textContent = 'Start';  // Set initial text to "Start"

// Call the hideTitle function when the app opens after DOM is loaded
document.addEventListener('DOMContentLoaded', hideTitle);

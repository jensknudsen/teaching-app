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

// DOM elements
const combinationDisplay = document.getElementById('combination');
const playSoundButton = document.getElementById('play-sound');
const nextButton = document.getElementById('next');

let soundsToPlay = [];  // Array to store sounds for the current combination

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

// Function to generate exactly 2 random consonant-vowel pairs
function generateRandomCombination() {
    soundsToPlay = []; // Clear previous sounds

    let combinationText = '';  // To store the combination text

    // Generate exactly 2 random consonant-vowel pairs
    for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * combinations.length);
        const selectedCombo = combinations[randomIndex];

        combinationText += selectedCombo.combo;  // Concatenate the text
        soundsToPlay.push(selectedCombo.sound);  // Store the corresponding sound
    }

    return combinationText;
}

// Function to update the display with a new random combination but not play the sound
function updateDisplayWithRandomCombination() {
    const newCombination = generateRandomCombination();
    combinationDisplay.textContent = newCombination;  // Display the random consonant-vowel combination
}

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
    updateDisplayWithRandomCombination();  // Display a new random combination
});

// Event listener for the "Lyd" button to play the sounds
playSoundButton.addEventListener('click', () => {
    if (soundsToPlay.length > 0) {
        playSoundSequentially(soundsToPlay);  // Play the sounds associated with the current combination
    }
});

// Initialize the page with no combination shown (waiting for "Next" to be clicked)
combinationDisplay.textContent = '';  // Empty initial display

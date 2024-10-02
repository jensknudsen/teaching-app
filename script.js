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

let soundsToPlay = [];  // Array to hold sounds for the current random combination

// Function to play the sounds sequentially when "Lyd" is clicked
function playSoundSequentially(sounds) {
    if (sounds.length === 0) return; // No sounds to play

    const audio = new Audio(sounds[0]);
    audio.play();

    // When the current sound finishes, play the next sound in the list
    audio.onended = () => {
        playSoundSequentially(sounds.slice(1)); // Recursive call for the next sound
    };
}

// Function to get a random index for the combinations array
function getRandomIndex() {
    return Math.floor(Math.random() * combinations.length);
}

// Function to create a random combination of 2 consonant-vowel pairs
function generateRandomCombination() {
    let randomCombo = '';
    soundsToPlay = []; // Reset the sounds array

    // We will generate exactly 2 random consonant-vowel pairs
    for (let i = 0; i < 2; i++) {
        const randomIndex = getRandomIndex();
        const selectedCombo = combinations[randomIndex];  // Select a random consonant-vowel pair
        randomCombo += selectedCombo.combo;  // Concatenate the consonant-vowel pair
        soundsToPlay.push(selectedCombo.sound);    // Collect the corresponding sound for sequential play
    }

    return randomCombo;
}

// Function to update the display with a new random combination but not play the sound
function updateDisplayWithRandomCombination() {
    const randomCombo = generateRandomCombination();
    combinationDisplay.textContent = randomCombo;
}

// Event listener for the "Next" button to generate a new random combination
nextButton.addEventListener('click', () => {
    updateDisplayWithRandomCombination();  // Generate and display the random combination
});

// Event listener for the "Lyd" button to play the corresponding sounds
playSoundButton.addEventListener('click', () => {
    playSoundSequentially(soundsToPlay);  // Play the sounds for the current random combination
});

// Initialize with the first random combination (but do not play the sound)
updateDisplayWithRandomCombination();  // Display the first random combination

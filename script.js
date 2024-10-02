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

// Keep track of the current combination
let currentIndex = 0;

// DOM elements
const combinationDisplay = document.getElementById('combination');
const playSoundButton = document.getElementById('play-sound');
const nextButton = document.getElementById('next');

// Function to play the sound
function playSoundSequentially(soundFile1, soundFile2) {
    const audio1 = new Audio(soundFile1);
    const audio2 = new Audio(soundFile2);

    // Play the first sound
    audio1.play();
    
    // When the first sound finishes, play the second
    audio1.onended = () => {
        audio2.play();
    };
}

// Function to show the next combination
function showNextCombination() {
    // Select two combinations for concatenation
    const combo1 = combinations[currentIndex];
    const combo2 = combinations[(currentIndex + 1) % combinations.length]; // Get the next combination
    
    // Display the combined result
    combinationDisplay.textContent = combo1.combo + combo2.combo;
    
    // Update currentIndex to move to the next pair in sequence
    currentIndex = (currentIndex + 2) % combinations.length;
}

// Event listeners for buttons
playSoundButton.addEventListener('click', () => {
    const combo1 = combinations[currentIndex];
    const combo2 = combinations[(currentIndex + 1) % combinations.length];
    
    // Play the sounds sequentially
    playSoundSequentially(combo1.sound, combo2.sound);
});

nextButton.addEventListener('click', showNextCombination);

// Initialize with the first combination
const initialCombo1 = combinations[currentIndex];
const initialCombo2 = combinations[(currentIndex + 1) % combinations.length];
combinationDisplay.textContent = initialCombo1.combo + initialCombo2.combo;

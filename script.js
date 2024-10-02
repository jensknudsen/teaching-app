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
    { combo: 'cå', sound: 'sounds/cå.mp3' },
    // Add more combinations here
];

// Keep track of the current combination
let currentIndex = 0;

// DOM elements
const combinationDisplay = document.getElementById('combination');
const playSoundButton = document.getElementById('play-sound');
const nextButton = document.getElementById('next');

// Function to play the combined sound by parts
function playCombinedSound(combination) {
    const parts = combination.split('');
    let delay = 0;

    parts.forEach(part => {
        const soundFile = `sounds/${part}.mp3`;
        const audio = new Audio(soundFile);
        
        // Play sound after delay
        setTimeout(() => {
            audio.play();
        }, delay);
        
        // Increment delay for the next sound (adjust duration based on your sound files)
        delay += 1000; // Adjust delay based on sound duration
    });
}

// Function to show the next combination
function showNextCombination() {
    currentIndex = (currentIndex + 1) % combinations.length;
    combinationDisplay.textContent = combinations[currentIndex].combo;
}

// Event listeners for buttons
playSoundButton.addEventListener('click', () => {
    const combination = combinations[currentIndex].combo;
    playCombinedSound(combination);
});

nextButton.addEventListener('click', showNextCombination);

// Initialize with the first combination
combinationDisplay.textContent = combinations[currentIndex].combo;

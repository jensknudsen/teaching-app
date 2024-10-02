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

// Function to play the sound
function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play().catch(error => {
        console.error(`Error playing sound: ${error}`);
    });
}

// Function to show a random combination
function showRandomCombination() {
    const randomIndex = Math.floor(Math.random() * combinations.length);
    combinationDisplay.textContent = combinations[randomIndex].combo;
    return combinations[randomIndex].sound; // Return the sound for the new combination
}

// Event listeners for buttons
playSoundButton.addEventListener('click', () => {
    const soundFile = combinations.find(c => c.combo === combinationDisplay.textContent).sound;
    playSound(soundFile);
});

nextButton.addEventListener('click', () => {
    const soundFile = showRandomCombination();
    playSound(soundFile); // Play sound for the new random combination
});

// Initialize with a random combination
showRandomCombination();

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

// Function to generate a random index for the combinations
function getRandomIndex() {
    return Math.floor(Math.random() * combinations.length);
}

// Function to update both display and sound with random combinations
function updateDisplayAndPlaySoundRandom() {
    // Randomly select two combinations for concatenation
    const randomIndex1 = getRandomIndex();
    let randomIndex2 = getRandomIndex();

    // Ensure the second random index is not the same as the first
    while (randomIndex1 === randomIndex2) {
        randomIndex2 = getRandomIndex();
    }

    const combo1 = combinations[randomIndex1];
    const combo2 = combinations[randomIndex2];
    
    // Display the combined result
    combinationDisplay.textContent = combo1.combo + combo2.combo;

    // Play the corresponding sounds sequentially
    playSoundSequentially(combo1.sound, combo2.sound);
}

// Event listener for the next button to show the next random combination and play the sound
nextButton.addEventListener('click', () => {
    // Update the display and sound with random combinations
    updateDisplayAndPlaySoundRandom();
});

// Initialize with the first random combination and sound
updateDisplayAndPlaySoundRandom();  // This will display and play the first random combination

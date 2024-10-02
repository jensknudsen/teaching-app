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

// Function to play the sounds sequentially
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

// Function to create a random combination of multiple consonant-vowel pairs
function generateRandomCombination(numberOfPairs) {
    let randomCombo = '';
    let sounds = [];

    for (let i = 0; i < numberOfPairs; i++) {
        const randomIndex = getRandomIndex();
        const selectedCombo = combinations[randomIndex];  // Select a random consonant-vowel pair
        randomCombo += selectedCombo.combo;  // Concatenate the consonant-vowel pair
        sounds.push(selectedCombo.sound);    // Collect the corresponding sound for sequential play
    }

    return { randomCombo, sounds };
}

// Function to update the display and play random combinations
function updateDisplayAndPlayRandomCombinations() {
    const numberOfPairs = 3; // Adjust this to change how many pairs you want in the combination
    const { randomCombo, sounds } = generateRandomCombination(numberOfPairs);

    // Display the combined consonant-vowel result
    combinationDisplay.textContent = randomCombo;

    // Play the corresponding sounds sequentially
    playSoundSequentially(sounds);
}

// Event listener for the next button to show the next random combination and play the sound
nextButton.addEventListener('click', () => {
    updateDisplayAndPlayRandomCombinations();
});

// Initialize with the first random combination and sound
updateDisplayAndPlayRandomCombinations();  // This will display and play the first random combination

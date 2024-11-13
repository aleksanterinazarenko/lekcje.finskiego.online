async function fetchWords() {
    const response = await fetch('words.json');
    const words = await response.json();
    return words;
}

function getRandomWord(words) {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

async function displayRandomWord() {
    const words = await fetchWords();
    const randomWord = getRandomWord(words);
    
    document.getElementById('english').textContent = randomWord.English;
    document.getElementById('finnish').textContent = randomWord.Finnish;
    document.getElementById('polish').textContent = randomWord.Polish;
}

window.onload = displayRandomWord;

async function randomizeWord() {
    const words = await fetchWords();
    const randomWord = getRandomWord(words);

    setTimeout(() => {
        document.getElementById('english').textContent = randomWord.English;
        document.getElementById('finnish').textContent = randomWord.Finnish;
        document.getElementById('polish').textContent = randomWord.Polish;
    }, 100);
}

window.onload = () => {
    displayRandomWord();
    document.getElementById('randomize-button').onclick = randomizeWord;
};
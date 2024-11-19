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

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-list a');
    const currentPath = window.location.pathname.split("/").pop();
  
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
  });

function setBackground() {
    const windowHeight = window.innerHeight;

    document.body.style.backgroundImage = "url('background.png')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "right top";
    document.body.style.backgroundSize = `auto ${windowHeight}px`;
    document.body.style.backgroundAttachment = "fixed";


    document.body.style.minHeight = `${windowHeight}px`;

    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
}

window.addEventListener("load", setBackground);

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

function setBodyHeight() {
    document.body.style.height = `${window.innerHeight}px`;
}

setBodyHeight();

window.addEventListener('resize', setBodyHeight);

const backgroundDiv = document.createElement("div");
backgroundDiv.style.position = "fixed";
backgroundDiv.style.top = "0";
backgroundDiv.style.right = "0";
backgroundDiv.style.width = "100%";
backgroundDiv.style.height = `${window.innerHeight}px`;
backgroundDiv.style.backgroundImage = "url('background.png')";
backgroundDiv.style.backgroundRepeat = "no-repeat";
backgroundDiv.style.backgroundPosition = "right top";
backgroundDiv.style.backgroundSize = "auto 100%";
backgroundDiv.style.zIndex = "-1";
document.body.appendChild(backgroundDiv);

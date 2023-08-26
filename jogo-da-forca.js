const words = ["javascript", "html", "css", "python", "java"];
const randomIndex = Math.floor(Math.random() * words.length);
const secretWord = words[randomIndex];
let guessedLetters = [];
let remainingAttempts = 6;

const wordDisplayElement = document.getElementById('wordDisplay');
const remainingAttemptsElement = document.getElementById('remainingAttempts');
const usedLettersElement = document.getElementById('usedLetters');
const messageElement = document.getElementById('message');

function initializeWordDisplay() {
  let display = '';
  for (let i = 0; i < secretWord.length; i++) {
    if (guessedLetters.includes(secretWord[i])) {
      display += secretWord[i];
    } else {
      display += '_';
    }
  }
  wordDisplayElement.textContent = display;
}

function checkGuess() {
  const guess = document.getElementById('guessInput').value.toLowerCase();

  if (guess.length !== 1 || !guess.match(/[a-z]/)) {
    messageElement.textContent = 'Por favor, insira uma única letra válida.';
    return;
  }

  if (guessedLetters.includes(guess)) {
    messageElement.textContent = 'Você já tentou essa letra.';
    return;
  }

  guessedLetters.push(guess);

  if (secretWord.includes(guess)) {
    initializeWordDisplay();
    if (!wordDisplayElement.textContent.includes('_')) {
      messageElement.textContent = 'Parabéns! Você venceu!';
    } else {
      messageElement.textContent = 'Letra correta!';
    }
  } else {
    remainingAttempts--;
    remainingAttemptsElement.textContent = remainingAttempts;
    usedLettersElement.textContent += guess + ' ';
    if (remainingAttempts === 0) {
      messageElement.textContent = `Game Over. A palavra era "${secretWord}".`;
      document.getElementById('guessInput').disabled = true;
    } else {
      messageElement.textContent = 'Letra incorreta.';
    }
  }
}

initializeWordDisplay();

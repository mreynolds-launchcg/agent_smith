function playSlotMachine() {
    const result = Math.random() < 0.5 ? 'Win' : 'Lose';
    document.getElementById('slot-result').innerText = `Result: ${result}`;
}

function playBlackjack() {
    const result = Math.random() < 0.5 ? 'Win' : 'Lose';
    document.getElementById('blackjack-result').innerText = `Result: ${result}`;
}

function playRoulette() {
    const result = Math.random() < 0.5 ? 'Win' : 'Lose';
    document.getElementById('roulette-result').innerText = `Result: ${result}`;
}
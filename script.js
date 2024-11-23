const facts = [
    "The Eiffel Tower can be 15 cm taller during the summer.",
    "Cows have best friends and can become stressed when they are separated.",
    "The first oranges weren’t orange.",
    "Octopuses have three hearts.",
    "Bananas are berries, but strawberries aren't.",
    "The shortest war in history lasted 38 minutes.",
    "Honey never spoils."
];

const factDisplay = document.getElementById('factDisplay');
const factButton = document.getElementById('factButton');

factButton.addEventListener('click', function() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factDisplay.textContent = randomFact;
});

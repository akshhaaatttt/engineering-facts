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
let factIndex = 0;

function displayFact() {
    factDisplay.textContent = facts[factIndex];
    factIndex = (factIndex + 1) % facts.length;
}

// Display the first fact immediately
displayFact();

// Set an interval to display facts automatically every few seconds
setInterval(displayFact, 5000); // Change the interval duration as needed

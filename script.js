const facts = [
    "The Eiffel Tower can be 15 cm taller during summer due to thermal expansion.",
    "The first computer programmer was Ada Lovelace in the 1840s.",
    "The Great Pyramid of Giza is the only one of the Seven Wonders of the Ancient World still standing.",
    "A Boeing 747 is made up of six million parts.",
    "The word 'engineer' is derived from the Latin words 'ingenium' (cleverness) and 'ingeniare' (to devise).",
    "The longest bridge in the world is the Danyang–Kunshan Grand Bridge in China, measuring over 164 kilometers.",
    "Leonardo da Vinci conceptualized the helicopter and other engineering marvels centuries before they were built."
];

const button = document.getElementById("fact-button");
const factContainer = document.getElementById("fact-container");
const factDisplay = document.getElementById("fact-display");

button.addEventListener("click", () => {
    // Trigger fact change with animation
    factContainer.style.opacity = 0;
    factContainer.style.transform = "translateY(20px)";

    setTimeout(() => {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        factDisplay.textContent = randomFact;

        // Bring the fact back with animation
        factContainer.style.opacity = 1;
        factContainer.style.transform = "translateY(0)";
    }, 500);
});

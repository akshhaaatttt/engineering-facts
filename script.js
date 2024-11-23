const facts = [
    "A single cloud can weight more than 1 million pounds.",
    "The Eiffel Tower can be 15 cm taller during the summer.",
    "The average person walks the equivalent of three times around the world in a lifetime.",
    "Cows moo in accents specific to their region.",
    "The first oranges weren’t orange.",
    "Octopuses have three hearts.",
    "Bananas are berries, but strawberries aren't.",
    "Honey never spoils.",
    "The unicorn is the national animal of Scotland.",
    "The shortest war in history lasted only 38 minutes."
];

function showFact() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('fact').innerText = randomFact;
}

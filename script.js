const facts = [
  "The first computer programmer was Ada Lovelace, a mathematician in the 1800s.",
  "The term 'engineer' comes from the Latin word 'ingenium,' which means 'cleverness.'",
  "The Eiffel Tower was initially considered an eyesore by many when it was built.",
  "The Great Wall of China is not visible from space with the naked eye.",
  "The tallest building in the world, the Burj Khalifa, is 828 meters tall.",
  "The first recorded use of concrete was in Ancient Rome."
];

const factTextElement = document.getElementById('fact-text');
const generateBtn = document.getElementById('generate-btn');

// Function to generate a random fun fact
function generateFact() {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  gsap.fromTo(factTextElement, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 1 });
  factTextElement.textContent = randomFact;
}

generateBtn.addEventListener('click', generateFact);

// Initial Animation on Page Load
gsap.from('header h1', { opacity: 0, y: -100, duration: 1, ease: 'power4.out' });
gsap.from('#fact-box', { opacity: 0, y: 50, duration: 1.2, delay: 0.5, ease: 'power4.out' });

const facts = [
  "The Great Wall of China, built over 2,000 years ago, is one of the largest and most recognizable engineering feats in the world!",
  "The first steam engine was built by James Watt in the late 1700s and revolutionized transportation and industry.",
  "Nikola Tesla invented the modern alternating current (AC) electrical supply system, which powers most of the world today.",
  "The first computer programmer was Ada Lovelace, who wrote algorithms for Charles Babbage’s early mechanical computer in the 19th century.",
  "The Wright brothers made their first powered flight in 1903, paving the way for the aviation industry we have today."
];

document.getElementById('generate-button').addEventListener('click', function() {
  const factElement = document.getElementById('fact');
  // Add fade-out animation before changing the text
  factElement.style.animation = 'fadeOut 1s forwards';
  
  // Wait for the fade-out animation to finish before changing the text
  setTimeout(function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.textContent = facts[randomIndex];
    
    // After updating the fact, trigger the fade-in animation
    factElement.style.animation = 'fadeIn 1s forwards';
  }, 1000); // Wait for the duration of the fade-out
});

// CSS for fade-out animation
document.styleSheets[0].insertRule(`
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`, 0);

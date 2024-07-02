const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let intervals = [];

// Function to start animation on a specific h1 element
function startAnimation(h1) {
  let interval = null;
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    h1.innerText = h1.dataset.value
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return h1.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if(iteration >= h1.dataset.value.length){
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);

  intervals.push(interval);
}

// Apply animation to all h1 elements initially and on hover
const h1Tags = document.querySelectorAll("h1");

h1Tags.forEach(h1 => {
  h1.dataset.value = h1.innerText; // Store original text in dataset

  h1.onmouseover = () => {
    startAnimation(h1);
  };

  h1.onmouseleave = () => {
    clearInterval(intervals[intervals.length - 1]);
    h1.innerText = h1.dataset.value; // Restore original text
  };
});

// Trigger animation on page load for all h1 elements
  h1Tags.forEach(h1 => {
    startAnimation(h1);
  });

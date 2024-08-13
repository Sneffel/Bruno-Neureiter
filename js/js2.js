const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let intervals = [];

function startAnimation(h1) {
  let interval = null;
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    h1.innerText = h1.dataset.value
      .split("")
      .map((letter, index) => 
        index < iteration || letter === ' ' ? 
          h1.dataset.value[index] : 
          letters[Math.floor(Math.random() * 26)]
      )
      .join("");

    if (iteration >= h1.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);

  intervals.push(interval);
}

const elements = document.querySelectorAll('h1, .matrix');

elements.forEach(h1 => {
  h1.dataset.value = h1.innerText;

  h1.onmouseover = () => startAnimation(h1);
  h1.onmouseleave = () => {
    clearInterval(intervals.pop());
    h1.innerText = h1.dataset.value;
  };
});

elements.forEach(startAnimation);

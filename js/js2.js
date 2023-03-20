const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let intervals = [];

const h1Tags = document.querySelectorAll("h1");

h1Tags.forEach(h1 => {
  let interval = null;

  h1.onmouseover = event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");

      if(iteration >= event.target.dataset.value.length){
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    intervals.push(interval);
  }

  h1.onmouseleave = event => {
    clearInterval(interval);
    h1.innerText = h1.dataset.value;
  }
});

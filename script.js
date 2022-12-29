import { Fireworks } from "./node_modules/fireworks-js/dist/index.js";
import { options } from "./options.js";

const container = document.querySelector(".container");
const flipContainer = document.querySelector(".flipcontainer");
const fireworks = new Fireworks(container, options);
const title = document.createElement("h1");

title.id = "title";

let target = new Date(2023, 0, 1) / 1000;
// let target = Date.now() / 1000 + 5;

const flipdown = new FlipDown(target, {
    theme: "dark",
    headings: ["Days", "Hours", "Minutes", "Seconds"],
});

flipdown.start().ifEnded(() => {
    flipContainer.style.transition = "1s";
    flipContainer.style.opacity = 0;
    setTimeout(() => {
        // Remove the countdown and show the title
        flipContainer.remove();
        document.querySelector(".all").appendChild(title);
        document.body.classList.add("newyear");
    }, 1000);
    fireworks.start();
});

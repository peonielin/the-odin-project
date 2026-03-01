// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey I'm red";
container.appendChild(p);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm a blue h3";
container.appendChild(h3);

const blackPink = document.createElement("div");
blackPink.style.cssText = "background: pink;";
blackPink.style.border = "2px solid black";
container.appendChild(blackPink);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
blackPink.appendChild(h1);

const p1 = document.createElement("p1");
p1.textContent = "ME TOO";
blackPink.appendChild(p1);

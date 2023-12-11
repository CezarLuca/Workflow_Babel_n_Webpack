console.log("DOM File");

const body = document.querySelector("body");

export const styleBody = () => {
  body.style.background = "peachpuff";
};

export const addTitle = (text) => {
  const title = document.createElement("h1");
  title.textContent = text;
  body.appendChild(title);
};

styleBody();
addTitle("Hello, World from DOM File");

export const contact = "cezar.luca@hotmail.com";

// export { styleBody, addTitle, contact };
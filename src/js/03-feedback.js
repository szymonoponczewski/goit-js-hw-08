const throttle = require("lodash.throttle");

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const storageKey = "feedback-form-state";
const storedData = localStorage.getItem(storageKey);
console.log("storedData", storedData);

if (storedData) {
  const parsedData = JSON.parse(storedData);
  emailInput.value = parsedData.email;
  messageInput.value = parsedData.message;
  console.log("parsedata", parsedData);
}

form.addEventListener("input", () => {
  throttle(SetItem, 500)();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.removeItem(storageKey);
  emailInput.value = "";
  messageInput.value = "";
  console.log("Form data cleared");
});

function SetItem() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

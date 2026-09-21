document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const nav = document.querySelector("#main-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const opened = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(opened));
    });
  }

  const form = document.querySelector("#subscribe-form");
  const message = document.querySelector("#form-message");

  if (form && message) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      message.textContent = "Спасибо! Форма демонстрационная — данные не отправляются.";
      form.reset();
    });
  }
});

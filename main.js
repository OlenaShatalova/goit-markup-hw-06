const openModalBtn = document.querySelector(".js-open-btn");
const closeMenuBtn = document.querySelector(".js-close-menu-btn");
const modalMenu = document.querySelector(".js-modal-menu");
const openOrderBtn = document.querySelector(".js-order-btn");
const closeOrderBtn = document.querySelector(".js-close-order-btn");
const orderOverlay = document.querySelector(".js-modal-overlay");
const linksModal = document.querySelectorAll(".js-modal-menu a");

const open = (x) => {
  x.classList.add("is-open");
  document.body.style.overflow = "hidden";
};

const close = (x) => {
  x.classList.remove("is-open");
  document.body.style.overflow = "";
};

openModalBtn.addEventListener("click", () => open(modalMenu));
closeMenuBtn.addEventListener("click", () => close(modalMenu));

linksModal.forEach((link) => {
  link.addEventListener("click", () => close(modalMenu));
});

openOrderBtn.addEventListener("click", () => open(orderOverlay));
closeOrderBtn.addEventListener("click", () => close(orderOverlay));

orderOverlay.addEventListener("click", (e) => {
  if (e.target === orderOverlay) {
    close(orderOverlay);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    close(orderOverlay);
  }
});

const anchorSections = document.querySelectorAll(".js-anchor");
const headerLinks = document.querySelectorAll(".js-header-link");

const observerOptions = {
  root: null, // Вікно перегляду
  rootMargin: "0px", // Без додаткового відступу
  threshold: 0.2, // Елемент повинен бути видимий на ..%
};

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    const id = entry.target.id;

    const link = document.querySelector(`a[href="#${id}"]`);

    if (entry.isIntersecting) {
      headerLinks.forEach((link) => link.classList.remove("active-link"));

      if (link) {
        link.classList.add("active-link");
      }
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

anchorSections.forEach((anchor) => {
  observer.observe(anchor);
});

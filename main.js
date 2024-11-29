const openModalBtn = document.querySelector(".js-open-btn");
const closeMenuBtn = document.querySelector(".js-close-menu-btn");
const modalMenu = document.querySelector(".js-modal-menu");
const links = document.querySelectorAll(".js-modal-menu a");
const openOrderBtn = document.querySelector(".js-order-btn");
const closeOrderBtn = document.querySelector(".js-close-order-btn");
const orderOverlay = document.querySelector(".js-modal-overlay");

const open = (x) => {
  x.classList.add("is-open");
  document.body.style.overflow = "hidden";
};

const close = (x) => {
  x.classList.remove("is-open");
  document.body.style.overflow = "";
  console.log("jjj");
};

openModalBtn.addEventListener("click", () => open(modalMenu));
closeMenuBtn.addEventListener("click", () => close(modalMenu));

links.forEach((link) => {
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

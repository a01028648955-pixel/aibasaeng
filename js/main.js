document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const trigger = window.innerHeight * 0.9;

    revealItems.forEach((item) => {
      const top = item.getBoundingClientRect().top;
      if (top < trigger) {
        item.classList.add("show");
      }
    });
  };

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);

  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("문의가 전송된 것으로 가정한 데모입니다.");
    });
  }
});

window.addEventListener("load", () => {
  const brand = document.querySelector(".brand");
  if (brand) {
    setTimeout(() => {
      brand.classList.add("show");
    }, 150);
  }
});
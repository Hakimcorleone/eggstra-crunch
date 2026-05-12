/* =========================================================
   Eggstra Crunch JS
   Vanilla JavaScript sahaja. Boleh edit testimoni di bawah.
   ========================================================= */

const testimonials = [
  { name: "Aina, Shah Alam", text: "Serius sedap gila. Ingat nak makan sikit je, tahu-tahu tinggal separuh pek." },
  { name: "Farid, Bangi", text: "Salted egg dia ngam. Tak muak, rangup, dan bau daun kari tu memang padu." },
  { name: "Mira, Kajang", text: "Beli untuk family, semua tanya beli dekat mana. Memang repeat lepas ni." },
  { name: "Syafiq, Gombak", text: "Aku bukan peminat maruku pun, tapi yang ni lain. Crunch dia satisfying betul." },
  { name: "Nadia, Subang", text: "Rasa premium tapi harga okay. Sesuai sangat buat kudap-kudap office." },
  { name: "Haziq, Melaka", text: "Packing sampai elok, rasa pun fresh. Beli 4 memang berbaloi sebab free postage." },
  { name: "Kak Lin, Seremban", text: "Anak-anak suka, orang tua pun suka. Tak pedas sangat, cukup rasa je." },
  { name: "Iman, Putrajaya", text: "Buka masa tengok movie, habis sebelum cerita habis. Bahaya punya sedap." },
  { name: "Danish, Ipoh", text: "Maruku dia tak keras, tak lemau. Rangup dan coating salted egg banyak." },
  { name: "Sofea, KL", text: "Kalau datang rumah orang bawak ni memang nampak thoughtful. Sedap, simple, ngam." }
];

const card = document.querySelector("#testimonialCard");
const dotsWrapper = document.querySelector("#testimonialDots");
const prevButton = document.querySelector("#prevTestimonial");
const nextButton = document.querySelector("#nextTestimonial");
let activeIndex = 0;
let sliderTimer;

function renderTestimonial(index) {
  const item = testimonials[index];
  card.innerHTML = `
    <p>“${item.text}”</p>
    <footer>${item.name}</footer>
  `;

  [...dotsWrapper.children].forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === index);
  });
}

function goToTestimonial(index) {
  activeIndex = (index + testimonials.length) % testimonials.length;
  renderTestimonial(activeIndex);
  restartSlider();
}

function restartSlider() {
  clearInterval(sliderTimer);
  sliderTimer = setInterval(() => {
    activeIndex = (activeIndex + 1) % testimonials.length;
    renderTestimonial(activeIndex);
  }, 4500);
}

testimonials.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.setAttribute("aria-label", `Pergi ke testimoni ${index + 1}`);
  dot.addEventListener("click", () => goToTestimonial(index));
  dotsWrapper.appendChild(dot);
});

prevButton.addEventListener("click", () => goToTestimonial(activeIndex - 1));
nextButton.addEventListener("click", () => goToTestimonial(activeIndex + 1));
renderTestimonial(activeIndex);
restartSlider();

// Animasi masuk bila section muncul di skrin.
const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealElements.forEach((element) => revealObserver.observe(element));

// Dark mode toggle. Pilihan disimpan dalam browser.
const themeToggle = document.querySelector("#themeToggle");
const savedTheme = localStorage.getItem("eggstra-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("eggstra-theme", isDark ? "dark" : "light");
});

// Borang order: auto buka WhatsApp dengan detail lengkap.
const orderForm = document.querySelector("#orderForm");

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(orderForm);
  const name = formData.get("customerName").trim();
  const phone = formData.get("customerPhone").trim();
  const address = formData.get("customerAddress").trim();
  const quantity = Number(formData.get("quantity"));
  const seller = formData.get("seller");
  const total = quantity * 24;
  const postageNote = quantity === 4 ? "Ya, free postage" : "Sila confirm postage";

  const message = `Hi Eggstra Crunch! Saya nak order Maruku Salted Egg.\n\nNama: ${name}\nNo phone: ${phone}\nAlamat: ${address}\nKuantiti: ${quantity} pek\nTotal produk: RM${total}\nPostage: ${postageNote}\n\nBoleh confirmkan order saya?`;

  const whatsappUrl = `https://wa.me/${seller}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

// ===== LANGUAGE TOGGLE (EN → PL → RU) =====

const toggleBtn = document.getElementById("langToggle");

const enTexts = document.querySelectorAll(".lang.en");
const plTexts = document.querySelectorAll(".lang.pl");
const ruTexts = document.querySelectorAll(".lang.ru");

let currentLang = "en";

function showLang(lang) {
  enTexts.forEach(el => el.style.display = lang === "en" ? "block" : "none");
  plTexts.forEach(el => el.style.display = lang === "pl" ? "block" : "none");
  ruTexts.forEach(el => el.style.display = lang === "ru" ? "block" : "none");

  if (lang === "en") toggleBtn.textContent = "🇵🇱 Polski";
  if (lang === "pl") toggleBtn.textContent = "🇷🇺 Русский";
  if (lang === "ru") toggleBtn.textContent = "🇬🇧 English";
}

toggleBtn.addEventListener("click", () => {
  if (currentLang === "en") currentLang = "pl";
  else if (currentLang === "pl") currentLang = "ru";
  else currentLang = "en";

  showLang(currentLang);
});

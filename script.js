// --- Year in footer ---
const y = new Date().getFullYear();
document.getElementById("year").textContent = y;
document.getElementById("year2").textContent = y;
document.getElementById("year3").textContent = y;

// --- Language switcher ---
function setLanguage(lang) {
  // hide all
  document.querySelectorAll(".lang").forEach(el => el.style.display = "none");

  // show selected
  document.querySelectorAll(".lang." + lang).forEach(el => el.style.display = "");
  
  // remember choice
  localStorage.setItem("siteLang", lang);
}

// click buttons
document.querySelectorAll(".lang-switch button").forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

// load saved language (default EN)
const saved = localStorage.getItem("siteLang") || "en";
setLanguage(saved);

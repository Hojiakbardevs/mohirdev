function getrandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generated() {
  const minEl = document.getElementById("min");
  const maxEl = document.getElementById("max");

  const min = Number(minEl.value);
  const max = Number(maxEl.value);

  if (minEl.value === "" || maxEl.value === "") {
    alert("Iltimos min va max qiymatlarini to'ldiring");
    return;
  }
  if (min > max) {
    alert("Min maxdan kichik son bo'lishi mumkin emas");
    return;
  }
  const placeholderEl = document.querySelector("#result");
  placeholderEl.textContent = getrandom(min, max);
}

const btnEl = document.getElementById("generate");

btnEl.addEventListener("click", generated);

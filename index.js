const leftSwitcher = document.querySelector(".conversion-left__switcher");
let leftDiv;
// Делегирование событий
leftSwitcher.onclick = (e) => {
  if (leftDiv) leftDiv.classList.remove("active");
  leftDiv = e.target;
  leftDiv.classList.add("active");
};

if (leftDiv != undefined) console.log(leftDiv.textContent.trim());

document.querySelector(".conversion-left__input").oninput = (e) => {
  // define regular expression for only numbers
  const numbersOnlyRegex = /^[0-9]*$/;
  // if input is not a number, replace with empty string
  if (!numbersOnlyRegex.test(e.target.value)) {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  }
};
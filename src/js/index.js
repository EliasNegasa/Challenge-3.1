const submitBtn = document.getElementById('submitButton');
const home = document.getElementById('home');
const thankYou = document.getElementById('thankYou');
const ratingNumbers = document.querySelectorAll('.rating-numbers');
const ratingResult = document.getElementById('ratingResult');

let selectedValue = 0;

const updateSelectedValue = (event) => {
  selectedValue = event.target.textContent;
};

for (const ratingNumber of ratingNumbers) {
  ratingNumber.addEventListener('click', updateSelectedValue);
}

const updateUI = () => {
  ratingResult.textContent = `You selected ${selectedValue} out of 5`;
  thankYou.classList.replace('hidden', 'flex');
  home.classList.replace('flex', 'hidden');
};

submitBtn.addEventListener('click', updateUI);
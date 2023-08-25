const submitBtn = document.getElementById('submitButton');
const home = document.getElementById('home');
const thankYou = document.getElementById('thankYou');
const ratingNumbers = document.querySelectorAll('.rating-numbers');
const ratingResult = document.getElementById('ratingResult');
const error = document.getElementById('error');

let selectedValue = 0;

const updateSelectedValue = (event) => {
  selectedValue = event.target.textContent;
  error.classList.replace('block', 'hidden');
};

for (const ratingNumber of ratingNumbers) {
  ratingNumber.addEventListener('click', updateSelectedValue);
}

const updateUI = () => {
  if (selectedValue !== 0) {
    ratingResult.textContent = `You selected ${selectedValue} out of 5`;
    thankYou.classList.replace('hidden', 'flex');
    home.classList.replace('flex', 'hidden');
  } else {
    error.classList.replace('hidden', 'block');
  }
};

submitBtn.addEventListener('click', updateUI);
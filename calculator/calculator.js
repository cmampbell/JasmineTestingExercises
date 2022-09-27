let inputValues = {};

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e, inputValues) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  inputValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(inputValues));
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  inputValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(inputValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {

  let principle;

  if (typeof values.amount === 'string'){
    let principleString = (values.amount);
    principle = parseFloat(principleString.replace(/,/g, ''));
  } else { principle = values.amount; }

  let interest = (parseFloat(values.rate) / 12);
  let payments = (parseFloat(values.years) * 12);

  let monthlyPayment = ((principle * interest) / (1 - ((1+interest)**(-payments)))) //calculate monthly

  monthlyPayment = (Math.round(monthlyPayment*100))/100; // round monthly payment

  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const paymentUI = document.querySelector('#monthly-payment');
  if (monthly){
    paymentUI.innerText = monthly;
  } else { paymentUI.innerText = 'Input your amount, term in years, and yearly rate.' }
}
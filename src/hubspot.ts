// Wait for the HubSpot form to load
document.addEventListener('hs-form-ready', function () {
  // Get the form container
  var formContainer = document.querySelector('.hs-form');

  console.log(formContainer);
  // Add custom CSS styles to the form container
  formContainer.style.backgroundColor = '#f5f5f5';
  formContainer.style.padding = '30px';
  formContainer.style.borderRadius = '10px';

  // Get the form heading
  var formHeading = formContainer.querySelector('h2');

  // Add custom CSS styles to the form heading
  formHeading.style.fontSize = '24px';
  formHeading.style.fontWeight = 'bold';
  formHeading.style.marginBottom = '20px';
  formHeading.style.textAlign = 'center';

  // Get all the form labels
  var formLabels = formContainer.querySelectorAll('label');

  // Add custom CSS styles to each form label
  formLabels.forEach(function (label) {
    label.style.fontSize = '18px';
    label.style.fontWeight = 'bold';
    label.style.display = 'block';
    label.style.marginBottom = '10px';
  });

  // Get all the form inputs
  var formInputs = formContainer.querySelectorAll(
    "input[type='text'], input[type='email'], input[type='password']"
  );

  // Add custom CSS styles to each form input
  formInputs.forEach(function (input) {
    input.style.width = '100%';
    input.style.padding = '12px 20px';
    input.style.marginBottom = '20px';
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '4px';
    input.style.boxSizing = 'border-box';
    input.style.fontSize = '16px';
  });

  // Get the form submit button
  var formSubmit = formContainer.querySelector("input[type='submit']");

  // Add custom CSS styles to the form submit button
  formSubmit.style.width = '100%';
  formSubmit.style.backgroundColor = '#4CAF50';
  formSubmit.style.color = 'white';
  formSubmit.style.padding = '14px 20px';
  formSubmit.style.marginBottom = '20px';
  formSubmit.style.border = 'none';
  formSubmit.style.borderRadius = '4px';
  formSubmit.style.cursor = 'pointer';
  formSubmit.style.fontSize = '18px';

  // Add a hover effect to the form submit button
  formSubmit.addEventListener('mouseover', function () {
    this.style.backgroundColor = '#45a049';
  });
  formSubmit.addEventListener('mouseout', function () {
    this.style.backgroundColor = '#4CAF50';
  });
});

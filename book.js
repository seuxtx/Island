function openPopup() {
  document.getElementById('popupForm').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popupForm').style.display = 'none';
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
}

function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  if (name && email && phone) {
    console.log('Form Submitted:', { name, email, phone });
    alert('Form submitted successfully!');
    closePopup();
  } else {
    alert('Please fill out all fields.');
  }
}

function openFAQ() {
  document.getElementById('faqPopup').style.display = 'flex';
}

function closeFAQ() {
  document.getElementById('faqPopup').style.display = 'none';
}
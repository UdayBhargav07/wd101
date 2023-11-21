document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const table = document.getElementById('entriesTable');
    const tableBody = document.getElementById('entriesTableBody');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const dob = document.getElementById('dob').value;
      const terms = document.getElementById('terms').checked;
  
      // Calculate age
      const today = new Date();
      const birthDate = new Date(dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
  
      // Validate age (between 18 and 55)
      if (age < 18 || age > 55) {
        alert('Age should be between 18 and 55!');
        return;
      }
  
      // Display data in the table
      const newRow = tableBody.insertRow();
      newRow.innerHTML = `
        <td class="border px-4 py-2">${name}</td>
        <td class="border px-4 py-2">${email}</td>
        <td class="border px-4 py-2">${password}</td>
        <td class="border px-4 py-2">${dob}</td>
        <td class="border px-4 py-2">${terms ? 'Yes' : 'No'}</td>
      `;
  
      // Show the table after adding the first entry
      if (table.classList.contains('hidden')) {
        table.classList.remove('hidden');
      }
  
      // Clear the form fields after submission
      form.reset();
    });
  });
  
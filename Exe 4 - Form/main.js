document.getElementById("signup-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting

  const name = document.getElementById("name").value.trim();
  const salary = parseInt(document.getElementById("salary").value);
  const birthday = document.getElementById("birthday").value;
  const phone = document.getElementById("phone").value.trim();

  const errorsDiv = document.getElementById("errors");
  errorsDiv.innerHTML = ""; // Clear previous errors

  let hasError = false;

  if (name.length <= 2) {
    showError("Name must be longer than 2 characters");
    hasError = true;
  }

  if (isNaN(salary) || salary <= 10000 || salary >= 16000) {
    showError("Salary must be greater than 10,000 and less than 16,000");
    hasError = true;
  }

  if (!birthday) {
    showError("Birthday cannot be empty");
    hasError = true;
  }

  if (!/^\d{10}$/.test(phone)) {
    showError("Phone number must be exactly 10 digits");
    hasError = true;
  }

  if (!hasError) {
   // Hide form
    document.getElementById("signup-form").style.display = "none";

    // Show welcome message
    const welcomeMsg = document.createElement("h2");
    welcomeMsg.textContent = `Welcome, ${name}! 🎉`;
    welcomeMsg.style.color = "#27ae60";
    document.body.appendChild(welcomeMsg);
  }
});

function showError(message) {
  const errorPara = document.createElement("p");
  errorPara.textContent = message;
  document.getElementById("errors").appendChild(errorPara);
}
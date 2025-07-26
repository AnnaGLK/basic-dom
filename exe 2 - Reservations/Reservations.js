const reservations = {
  bob: { claimed: false },
  ted: { claimed: true },
};

const checkReservation = function () {
  const input = document.getElementById("checkUser");
  const user_name_raw = input.value.trim();
  const user_name = user_name_raw.toLowerCase(); // Normalize case
  const messageEl = document.getElementById("message");

  if (reservations[user_name]) {
    if (!reservations[user_name].claimed) {
      reservations[user_name].claimed = true; // Mark as claimed
      messageEl.textContent = `✅ Welcome, ${capitalizeFirstLetter(user_name)}. Your reservation is now claimed.`;
      messageEl.style.color = "green";
    } else {
      messageEl.textContent = `❌ Sorry, ${capitalizeFirstLetter(user_name)}, someone already claimed this reservation.`;
      messageEl.style.color = "red";
    }
  } else {
    messageEl.textContent = `❌ You have no reservation, ${capitalizeFirstLetter(user_name)}.`;
    messageEl.style.color = "red";
  }

  input.value = "";     // 🔹 Clear input
  input.focus();        // 🔹 Focus input again
};

// Capitalize first letter
function capitalizeFirstLetter(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const checkButton = document.getElementById("checkButton");
checkButton.onclick = checkReservation;


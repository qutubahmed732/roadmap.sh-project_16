const { DateTime } = luxon;

function calculateAge() {
  // Get the input date value
  const birthDateInput = document.getElementById("birthDate").value;
  if (!birthDateInput) {
    document.getElementById("result").textContent = "Please enter your birth date.";
    return;
  }

  // Parse the input date using Luxon
  const birthDate = DateTime.fromISO(birthDateInput);
  const now = DateTime.now();

  // Calculate the age
  const age = now.diff(birthDate, ["years", "months", "days"]).toObject();

  // Format and display the result
  const resultText = `You are ${Math.floor(age.years)} years, ${Math.floor(age.months)} months, and ${Math.floor(age.days)} days old.`;
  document.getElementById("result").textContent = resultText;
}
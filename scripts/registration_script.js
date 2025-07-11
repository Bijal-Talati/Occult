// scripts/registration.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(form));

    const consentDialog = document.createElement("div");
    consentDialog.className = "consent-dialog";
    consentDialog.innerHTML = `
      <div class="dialog-box fade-slide">
        <p>Do you agree to the storage of your information?</p>
        <button id="agree">I Agree</button>
        <button id="decline">Decline</button>
      </div>
    `;
    document.body.appendChild(consentDialog);

    document.getElementById("agree").addEventListener("click", () => {
      saveRegistrationData(formData);
      document.body.removeChild(consentDialog);
      alert("Thank you! Your information has been saved.");
      form.reset();
    });

    document.getElementById("decline").addEventListener("click", () => {
      document.body.removeChild(consentDialog);
    });
  });
});

function saveRegistrationData(data) {
  const existing = JSON.parse(localStorage.getItem("registrations") || "[]");
  existing.push(data);
  localStorage.setItem("registrations", JSON.stringify(existing, null, 2));
}



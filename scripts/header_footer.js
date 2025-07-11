// header-footer.js

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");
  const footer = document.getElementById("main-footer");

  header.innerHTML = `
    <div class="logo"><h1>Occult Science</h1></div>
    <nav>
      <a href="#/home">Home</a>
      <div class="dropdown">
        <a href="#/yoga">Yoga ▾</a>
        <div class="dropdown-content">
          <a href="#/yoga_asanas">Asanas</a>
          <a href="#/yoga_literature">Literature</a>
          <a href="#/yoga_Human_Anatomy">Human Anatomy</a>
        </div>
      </div>
      <div class="dropdown">
        <a href="#/astrology">Astrology ▾</a>
        <div class="dropdown-content">
          <a href="#/Astrology_Horoscope">Horoscope</a>
          <a href="#/Astrology_Match_Making">Match-Making</a>
          <a href="#/Astrology_Charges">Charges</a>
          <div class="dropdown">
            <a href="#/Astrology_Literature">Literature ▸</a>
            <div class="dropdown-content">
              <a href="#/Astrology_Lite_Parasara">Parasara</a>
              <a href="#/Astrology_Lite_KP">K.P.</a>
              <a href="#/Astrology_Lite_Transit">Transit</a>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <a href="#/vastu">Vastu ▾</a>
        <div class="dropdown-content">
          <a href="#/Vastu_Office">Office</a>
          <a href="#/Vastu_Factory">Factory</a>
          <a href="#/Vastu_Residence">Residence</a>
          <a href="#/Vastu_Remedial_Tools">Remedial Tools</a>
          <a href="#/Vastu_Charges">Charges</a>
        </div>
      </div>
      <a href="#/registration">Registration</a>
      <a href="#/contact">Contact Us</a>
    </nav>
    <button class="theme-toggle" id="themeToggle">🌓</button>
  `;

  const year = new Date().getFullYear();
  footer.innerHTML = `
    <div>
      <strong>Quick Links</strong>
      <nav>
        <a href="#/home">Home</a>
        <a href="#/registration">Register</a>
        <a href="#/contact">Contact</a>
      </nav>
    </div>
    <div>
      <strong>Follow Us</strong>
      <div>
        <a href="#">Twitter</a>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
      </div>
    </div>
    <div>&copy; <span id="footerYear">${year}</span> Occult Science. All rights reserved.</div>
  `;
});

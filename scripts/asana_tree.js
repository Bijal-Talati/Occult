<!-- home.html -->
<section class="page">
  <h2>Welcome to Occult Science</h2>
  <p>Explore ancient wisdom and modern insights in Yoga, Astrology, and Vastu.</p>
</section>

<!-- contact.html -->
<section class="page">
  <h2>Contact Us</h2>
  <p>Email us at info@occultscience.com or use the form below.</p>
</section>

<!-- registration.html -->
<section class="page">
  <h2>Register</h2>
  <form id="registrationForm">
    <label>Name: <input type="text" name="name" required></label>
    <label>Date of Birth: <input type="date" name="dob" required></label>
    <label>Place of Birth: <input type="text" name="birthplace" required></label>
    <label>Time of Birth: <input type="time" name="birthtime" required></label>
    <label>Email: <input type="email" name="email" required></label>
    <label>Contact Number: <input type="tel" name="contact" required></label>
    <button type="submit">Submit</button>
  </form>
</section>

<!-- yoga_asanas.html -->
<section class="page">
  <h2>Yoga Asanas</h2>
  <div class="yoga-page">
    <div class="asana-controls">
      <input type="text" id="asanaSearch" placeholder="Search asana...">
      <button id="clearSearch">Clear</button>
      <button id="expandAll">Expand All</button>
      <button id="collapseAll">Collapse All</button>
    </div>
    <div class="asana-layout">
      <aside id="asana-tree" tabindex="0"></aside>
      <article id="asana-details">
        <h3 class="placeholder">Select an Asana to view details</h3>
      </article>
    </div>
  </div>
  <script src="scripts/asana-tree.js"></script>
</section>

<!-- Placeholder pages -->
<!-- yoga_literature.html, yoga_Human_Anatomy.html, astrology.html, etc. -->
<section class="page">
  <h2>Coming Soon</h2>
  <p>Content for this section is under development. Stay tuned!</p>
</section>


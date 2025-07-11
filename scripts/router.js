// router.js

const routes = {
  home: "/pages/home.html",
  yoga_asanas: "/pages/yoga_asanas.html",
  yoga_literature: "/pages/yoga_literature.html",
  yoga_Human_Anatomy: "/pages/yoga_Human_Anatomy.html",
  astrology: "/pages/astrology.html",
  Astrology_Horoscope: "/pages/astrology_horoscope.html",
  Astrology_Match_Making: "/pages/astrology_match_making.html",
  Astrology_Charges: "/pages/astrology_charges.html",
  Astrology_Literature: "/pages/astrology_literature.html",
  Astrology_Lite_Parasara: "/pages/astrology_lite_parasara.html",
  Astrology_Lite_KP: "/pages/astrology_lite_kp.html",
  Astrology_Lite_Transit: "/pages/astrology_lite_transit.html",
  vastu: "/pages/vastu.html",
  Vastu_Office: "/pages/vastu_office.html",
  Vastu_Factory: "/pages/vastu_factory.html",
  Vastu_Residence: "/pages/vastu_residence.html",
  Vastu_Remedial_Tools: "/pages/vastu_remedial_tools.html",
  Vastu_Charges: "/pages/vastu_charges.html",
  registration: "/pages/registration.html",
  contact: "/pages/contact.html"
};

function loadPage(route) {
  const path = routes[route] || routes["home"];
  fetch(path)
    .then(res => res.text())
    .then(html => {
      document.getElementById("main-content").innerHTML = html;
    })
    .catch(err => {
      document.getElementById("main-content").innerHTML = `<p>Page failed to load: ${route}</p>`;
    });
}

function handleHashChange() {
  const hash = location.hash.replace(/^#\//, "");
  loadPage(hash);
}

window.addEventListener("hashchange", handleHashChange);
window.addEventListener("DOMContentLoaded", handleHashChange);

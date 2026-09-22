/* =========================================
   GOOD FUTURE EDUCATIONAL SERVICES
   JAVASCRIPT
========================================= */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

  navMenu.classList.toggle("active");
  document.body.classList.toggle("menu-open");

});


document.querySelectorAll(".nav-menu a").forEach(link => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("active");
    document.body.classList.remove("menu-open");

  });

});


/* ================= SCHOLARSHIP SEARCH ================= */

const searchInput = document.getElementById("scholarshipSearch");
const degreeFilter = document.getElementById("degreeFilter");
const scholarshipCards = document.querySelectorAll(".scholarship-card");


function filterScholarships() {

  const searchTerm = searchInput.value.toLowerCase().trim();
  const selectedDegree = degreeFilter.value;

  scholarshipCards.forEach(card => {

    const text = card.dataset.search.toLowerCase();
    const degrees = card.dataset.degree;

    const matchesSearch =
      text.includes(searchTerm);

    const matchesDegree =
      selectedDegree === "all" ||
      degrees.includes(selectedDegree);

    if (matchesSearch && matchesDegree) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }

  });

}


searchInput.addEventListener("input", filterScholarships);
degreeFilter.addEventListener("change", filterScholarships);


/* ================= ELIGIBILITY WIZARD ================= */

const wizardSteps =
  document.querySelectorAll(".wizard-step");

const progressSteps =
  document.querySelectorAll(".progress-step");

const progressLine =
  document.getElementById("progressLine");

const nextButtons =
  document.querySelectorAll(".next-btn");

const prevButtons =
  document.querySelectorAll(".prev-btn");

const eligibilityForm =
  document.getElementById("eligibilityForm");

let currentStep = 0;


function updateWizard() {

  wizardSteps.forEach((step, index) => {

    step.classList.toggle(
      "active",
      index === currentStep
    );

  });


  progressSteps.forEach((step, index) => {

    step.classList.toggle(
      "active",
      index <= currentStep
    );

  });


  const percentage =
    (currentStep / (progressSteps.length - 1)) * 100;

  progressLine.style.width =
    percentage + "%";

}


function validateCurrentStep() {

  const current =
    wizardSteps[currentStep];

  const requiredInputs =
    current.querySelectorAll(
      "input[required]"
    );

  for (const input of requiredInputs) {

    if (input.type === "radio") {

      const radioName = input.name;

      const checked =
        current.querySelector(
          `input[name="${radioName}"]:checked`
        );

      if (!checked) {

        alert("Please select an option to continue.");
        return false;

      }

      continue;
    }


    if (!input.value.trim()) {

      input.focus();

      alert("Please complete the required field.");

      return false;

    }

  }

  return true;

}


nextButtons.forEach(button => {

  button.addEventListener("click", () => {

    if (!validateCurrentStep()) return;

    if (currentStep < wizardSteps.length - 1) {

      currentStep++;

      updateWizard();

    }

  });

});


prevButtons.forEach(button => {

  button.addEventListener("click", () => {

    if (currentStep > 0) {

      currentStep--;

      updateWizard();

    }

  });

});


eligibilityForm.addEventListener("submit", event => {

  if (!validateCurrentStep()) {

    event.preventDefault();
    return;

  }

});


updateWizard();


/* ================= FAQ ================= */

const faqItems =
  document.querySelectorAll(".faq-item");


faqItems.forEach(item => {

  const question =
    item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    const isOpen =
      item.classList.contains("open");


    faqItems.forEach(other => {

      other.classList.remove("open");

    });


    if (!isOpen) {

      item.classList.add("open");

    }

  });

});


/* ================= FILE NAME DISPLAY ================= */

const fileInputs =
  document.querySelectorAll(
    '.upload-box input[type="file"]'
  );


fileInputs.forEach(input => {

  input.addEventListener("change", () => {

    const box =
      input.closest(".upload-box");

    const small =
      box.querySelector("small");


    if (input.files.length > 0) {

      small.textContent =
        input.files[0].name;

    } else {

      small.textContent =
        "Upload file";

    }

  });

});


/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =
  new Date().getFullYear();


/* ================= NAVBAR SCROLL ================= */

window.addEventListener("scroll", () => {

  const navbar =
    document.getElementById("navbar");

  if (window.scrollY > 20) {

    navbar.style.boxShadow =
      "0 5px 25px rgba(15,23,42,.07)";

  } else {

    navbar.style.boxShadow = "none";

  }

});
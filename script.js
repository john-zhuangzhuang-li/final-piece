"use strict";

// SELECTORS
const btnLearnMore = document.querySelector("#btn-learn-more");
const sectionNav = document.querySelector(".navigation");
const sectionAbout = document.querySelector(".about");
const sectionPortfolio = document.querySelector(".portfolio");
const sectionSkills = document.querySelector(".skills");
const sectionCertificates = document.querySelector(".certificates");
const bgHeader = document.querySelector(".background--header");
const bgAbout = document.querySelector(".background--about");

// NOT USING
// const sectionFooter = document.querySelector(".footer");
// const footerCard = document.querySelector(".footer__card");

// HEADER IMAGE AND ANIMATION LOAD

const headerImage = new Image();

// FOR PARCEL BUILD
headerImage.src = new URL("img/main-photo-01c.jpg", import.meta.url);

headerImage.onload = () => {
  bgHeader.classList.remove("background--header-preview");
};

// BTN LEARN MORE
btnLearnMore.addEventListener("click", () =>
  sectionAbout.scrollIntoView({ behavior: "smooth" })
);

// HIDDEN ELEMENTS SETUP
// TO ACTIVATE TRANSITIONS ONLY WHEN BROWSING FROM TOP
const sectionsHidden = [sectionPortfolio, sectionSkills, sectionCertificates];
const handleHiddenSetup = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    observer.unobserve(entry.target);
    return;
  }
  bgAbout.classList.add("background--about--hidden");
  sectionsHidden.forEach((section) => {
    section.classList.add("section--hidden");
  });
  observer.unobserve(entry.target);
};
const navObserver = new IntersectionObserver(handleHiddenSetup, {
  root: null,
  threshold: 1,
});
navObserver.observe(sectionNav);

// ABOUT IMAGE REVEAL

const handleAboutImgReveal = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("background--about--hidden");
  observer.unobserve(entry.target);
};
const aboutObserver = new IntersectionObserver(handleAboutImgReveal, {
  root: null,
  threshold: [0.15, 0.5, 0.75, 1],
});
aboutObserver.observe(bgAbout);

// SECTIONS REVEAL
const handleSectionReveal = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(handleSectionReveal, {
  root: null,
  threshold: [0.15, 0.5, 0.75, 1],
});
sectionsHidden.forEach((section) => {
  sectionObserver.observe(section);
});

// FOOTER CARD REVEAL
// NOT USING

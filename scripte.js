const features = document.querySelector(".links ul li:nth-child(1)");
const company = document.querySelector(".links ul li:nth-child(2)");
const blocOne = document.querySelector(".bloc-one");
const blocTwo = document.querySelector(".bloc-two");
const barMenu = document.querySelector(".iconmenu");
const blocMobile = document.querySelector(".bloc-mobile");

function openpopup() {
  blocOne.style.opacity = "1";
}
function closepopup() {
  blocOne.style.opacity = "0";
}
function open() {
  blocTwo.style.opacity = "1";
}
function close() {
  blocTwo.style.opacity = "0";
}
function openclose() {
  const div = document.querySelector(".div");
  div.classList.add("overflow");
  blocMobile.classList.add("openclose");
  const closeIcon = document.querySelector(".closeicon");
  closeIcon.addEventListener("click", () => {
    blocMobile.classList.remove("openclose");
    div.classList.remove("overflow");
  });

  const linkOne = document.querySelector(
    ".content-links-mobile .links-mobile ul li:nth-child(1) a"
  );
  linkOne.addEventListener("click", () => {
    const sousdossierone = document.querySelector(".sous-dossierone ul");
    sousdossierone.classList.toggle("opensousdossier");
  });

  const linkTwo = document.querySelector(
    ".content-links-mobile .links-mobile ul li:nth-child(2) a"
  );
  linkTwo.addEventListener("click", () => {
    const sousDossierTwo = document.querySelector(".sous-dossiertwo ul");
    sousDossierTwo.classList.toggle("opensousdossier");
  });
}
features.addEventListener("mouseover", openpopup);
features.addEventListener("mouseout", closepopup);
company.addEventListener("mouseover", open);
company.addEventListener("mouseout", close);
barMenu.addEventListener("click", openclose);

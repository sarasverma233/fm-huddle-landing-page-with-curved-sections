const newsletterStatus = document.querySelector(".newsletter-status");

const subscribe = (e) => {
  e.preventDefault();
  newsletterStatus.innerText = "Check your email please";
  setTimeout(() => {
    newsletterStatus.innerText = "";
  }, 3000);
};

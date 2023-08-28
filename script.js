const container = document.querySelector(".container");
const signupBtn = document.getElementById("sign-bt");
const loginBtn = document.getElementById("log-btn");
const greenBg = document.querySelector(".green-bg");
const banner1 = document.querySelector(".banner1");
const banner2 = document.querySelector(".banner2");
const greenBgP = document.querySelector(".green-bg p");
const signupForm = document.querySelector(".signup-form");
const loginForm = document.querySelector(".login-form");

signupBtn.addEventListener("click", () => {
  greenBg.classList.toggle("effect");
  banner1.classList.toggle("banner1Change");
  loginBtn.classList.toggle("hide");
  greenBgP.classList.toggle("hide");
  signupForm.classList.toggle("signup-form-Change");
  greenBg.style.left = 0;
  greenBg.style.removeProperty("right");
});

loginBtn.addEventListener("click", () => {
  greenBg.classList.toggle("effect");
  greenBg.style.right = 0;
  greenBg.style.removeProperty("left");
  signupBtn.classList.toggle("hide");
  greenBgP.classList.toggle("hide");
  loginForm.classList.toggle("login-form-Change");
  banner2.classList.toggle("banner2Change");
});

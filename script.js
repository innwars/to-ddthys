const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, cục cưng nhớ hẹn với em đó nhaaa! ᰔᩚ";

  gif.src = "https://media1.giphy.com/media/gdspgdOIV1HxhnxQOH/giphy.gif?cid=790b7611cxz7a0t5ux6jvpwqg5qfj7uuy9mkqmtvp6wqwv8c&ep=v1_gifs_search&rid=giphy.gif&ct=s";  
  gif.parentElement.style.display = "flex";
  gif.parentElement.style.justifyContent = "center";
  gif.parentElement.style.alignItems = "center";

  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  question.innerHTML = "Anh hong thương em hả? ૮ ｡•́ﻌ•̀｡ა";

  gif.src = "https://media.giphy.com/media/vdcGRctqWqhHnDDZ5p/giphy.gif"
  gif.parentElement.style.display = "flex";
  gif.parentElement.style.justifyContent = "center";
  gif.parentElement.style.alignItems = "center";
  
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
let btn = document.querySelector(".btn"),
  container = document.querySelector(".container"),
  closeBtn = document.querySelector(".close"),
  save = document.querySelector(".save");
btn.addEventListener("click", () => {
  container.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  container.style.display = "none";
});

save.addEventListener("click", () => {
  localStorage.setItem("url", "working");
});

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

let content = document.querySelector(".content-item");
let git = document.getElementById("github"),
  fb = document.getElementById("facebook"),
  twt = document.getElementById("twitter"),
  ytb = document.getElementById("youtube"),
  lin = document.getElementById("linkedin");

let gitCustm = document.getElementById("git"),
  fbCustm = document.getElementById("fb"),
  ytbCustm = document.getElementById("ytb"),
  twtCustm = document.getElementById("twt"),
  linCustm = document.getElementById("lin");

let storedNames;

save.addEventListener("click", () => {
  if (
    git.value == "" &&
    fb.value == "" &&
    ytb.value == "" &&
    twt.value == "" &&
    lin.value == ""
  ) {
    alert("Please fill any one the below field...");
  } else {
    let url = [git.value, fb.value, ytb.value, twt.value, lin.value];
    localStorage.setItem("urli", JSON.stringify(url));
    git.value = "";
    fb.value = "";
    ytb.value = "";
    twt.value = "";
    lin.value = "";
  }
});

//urls
let gitUrl = "https://github.com/",
  fbUrl = "https://facebook.com/",
  ytbUrl = "https://youtube.com/",
  twtUrl = "https://twitter.com/",
  linUrl = "https://linkedin.com/";

function urlGrabber(id) {
  if (localStorage.getItem("url") != null) {
    storedNames = JSON.parse(localStorage.getItem("url"));
    // console.log(storedNames[2]);
    switch (id) {
      case "git":
        gitCustm.href = `${gitUrl}${storedNames[0]}`;
        break;
      case "fb":
        fbCustm.href = `${fbUrl}${storedNames[1]}`;
        break;
      case "ytb":
        ytbCustm.href = `${ytbUrl}${storedNames[2]}`;
        break;
      case "twt":
        twtCustm.href = `${twtUrl}${storedNames[3]}`;
        break;
      case "lin":
        linCustm.href = `${linUrl}${storedNames[4]}`;
        break;
    }
  } else {
    switch (id) {
      case "git":
        gitCustm.href = `${gitUrl}`;
        break;
      case "fb":
        fbCustm.href = `${fbUrl}`;
        break;
      case "ytb":
        ytbCustm.href = `${ytbUrl}`;
        break;
      case "twt":
        twtCustm.href = `${twtUrl}`;
        break;
      case "lin":
        linCustm.href = `${linUrl}`;
        break;
    }
  }
}

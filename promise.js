const display = document.getElementById('display');

function getData() {
  fetch("https://unsplash.com/photos/AdkJ-LgpTrE")
    .then(res => res.blod())
    .then(data => {
      display.innerHTML = data;
    })
}
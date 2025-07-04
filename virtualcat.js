function petCat() {
  document.getElementById('cat').src = 'cathappy.jpg';
  document.getElementById('mood').innerText = "Purr... I'm happy!";
}

function feedCat() {
  document.getElementById('cat').src = 'cateating.jpg';
  document.getElementById('mood').innerText = "Yum! That was tasty!";
}

function sleepCat() {
  document.getElementById('cat').src = 'catsleeping.jpg';
  document.getElementById('mood').innerText = "Zzz... I'm sleepy!";
}

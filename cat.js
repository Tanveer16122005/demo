function turnOn() {
  document.getElementById('bulb').src = 'bulb on.jpg';
  document.getElementById('cat').src = 'cat on.jpg';

  // Activate ON button, deactivate OFF button
  document.getElementById('buttonon').classList.add('active');
  document.getElementById('buttonoff').classList.remove('active');
}

function turnOff() {
  document.getElementById('bulb').src = 'bulb off.jpg';
  document.getElementById('cat').src = 'cat2.jpg';

  // Activate OFF button, deactivate ON button
  document.getElementById('buttonoff').classList.add('active');
  document.getElementById('buttonon').classList.remove('active');
}

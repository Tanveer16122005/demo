    let count = 0;

    function updateDisplay() {
      document.getElementById('counter').textContent = count;
    }

    function increment() {
      count += 1;
      updateDisplay();
    }

    function decrement() {
      count -= 1;
      updateDisplay();
    }

    function reset() {
      count = 0;
      updateDisplay();
    }

    // Optional: Automatically update counter display every 100ms (real-time effect)
    setInterval(updateDisplay, 100);
let current = "0";
let previous = null;
let operator = null;

const display = document.getElementById("display");

function update() { display.textContent = current; }

document.querySelectorAll("button").forEach(btn => {
  btn.onclick = () => {
    const v = btn.textContent;

    if (!isNaN(v) || v === ".") {
      if (current === "0") current = "";
      current += v;
    }

    if (v === "AC") {
      current = "0"; previous = null; operator = null;
    }

    if (["+", "−", "×", "÷"].includes(v)) {
      previous = parseFloat(current);
      current = "0";
      operator = v;
    }

    if (v === "=") {
      const n = parseFloat(current);
      if (operator === "+") previous += n;
      if (operator === "−") previous -= n;
      if (operator === "×") previous *= n;
      if (operator === "÷") previous /= n;
      current = previous.toString();
    }

    update();
  }
});

update();

let current = "0";
let previous = null;
let operator = null;

const display = document.getElementById("display");

function update() {
  display.textContent = current;
}

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (!isNaN(value) || value === ".") {
      if (value === "." && current.includes(".")) return;
      if (current === "0") current = value;
      else current += value;
    }

    if (value === "AC") {
      current = "0";
      previous = null;
      operator = null;
    }

    if (value === "±") {
      current = (parseFloat(current) * -1).toString();
    }

    if (value === "%") {
      current = (parseFloat(current) / 100).toString();
    }

    if (["+", "−", "×", "÷"].includes(value)) {
      previous = parseFloat(current);
      operator = value;
      current = "0";
    }

    if (value === "=" && operator !== null) {
      const num = parseFloat(current);
      if (operator === "+") previous += num;
      if (operator === "−") previous -= num;
      if (operator === "×") previous *= num;
      if (operator === "÷") previous /= num;
      current = previous.toString();
      operator = null;
    }

    update();
  });
});

update();

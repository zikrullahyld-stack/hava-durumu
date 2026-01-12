let display = document.getElementById("screen");
let current = "0";
let previous = null;
let operator = null;
let reset = false;

function update() {
  display.textContent = current;
}

document.querySelectorAll("button").forEach(b=>{
  b.onclick = ()=>{
    const v = b.textContent;

    if (!isNaN(v) || v === ".") {
      if (reset) { current = "0"; reset = false; }
      if (v === "." && current.includes(".")) return;
      current = current === "0" ? v : current + v;
    }

    if (v === "AC") {
      current = "0"; previous = null; operator = null;
    }

    if (v === "±") current = (parseFloat(current)*-1).toString();

    if (v === "%") current = (parseFloat(current)/100).toString();

    if (["+", "−", "×", "÷"].includes(v)) {
      previous = parseFloat(current);
      operator = v;
      reset = true;
    }

    if (v === "=" && operator) {
      let n = parseFloat(current);
      if (operator === "+") previous += n;
      if (operator === "−") previous -= n;
      if (operator === "×") previous *= n;
      if (operator === "÷") previous /= n;
      current = previous.toString();
      operator = null;
      reset = true;
    }

    update();
  }
});

update();

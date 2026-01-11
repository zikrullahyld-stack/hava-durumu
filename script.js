* { box-sizing: border-box; }

body {
  margin: 0;
  height: 100vh;
  background: radial-gradient(circle at top,#021027,#000);
  font-family: system-ui, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.app {
  width: 360px;
  background: rgba(255,255,255,0.05);
  border-radius: 18px;
  padding: 25px;
  box-shadow: 0 0 40px rgba(0,200,255,.4);
}

.header {
  text-align: center;
  margin-bottom: 15px;
}

.controls select, button {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  margin-top: 10px;
  border: none;
}

button {
  background: linear-gradient(135deg,#00eaff,#4f6bff);
  cursor: pointer;
  font-weight: bold;
}

.loader {
  display: none;
  margin-top: 15px;
  text-align: center;
  animation: blink 1s infinite;
}

@keyframes blink {
  50% { opacity: .4; }
}

.result {
  margin-top: 20px;
  line-height: 1.6;
}

function selectBank(bank) {
  document.getElementById("transfer").innerHTML = `
    <h3>${bank} Transfer</h3>
    <input placeholder="IBAN" style="width:100%;padding:10px;margin-top:10px">
    <input placeholder="Tutar" type="number" style="width:100%;padding:10px;margin-top:10px">
    <button onclick="send()" style="width:100%;padding:12px;margin-top:12px;background:#003399;color:white;border:none;border-radius:10px">
      Gönder
    </button>
  `;
}

function send() {
  alert("Transfer başarılı ✔");
}


function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  const weekday = ["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"];
  let sett = weekday[today.getDay()];

  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('ora').innerHTML =  h + ":" + m + ":" + s;
  document.getElementById('sett').innerHTML = sett + ", ";

  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}



//
//sotto per ridimensionare tabella
//

window.setMobileTable = function(selector) {
  // if (window.innerWidth > 600) return false;
  const tableEl = document.querySelector(selector);
  const thEls = tableEl.querySelectorAll('thead th');
  const tdLabels = Array.from(thEls).map(el => el.innerText);
  tableEl.querySelectorAll('tbody tr').forEach( tr => {
    Array.from(tr.children).forEach(
      (td, ndx) =>  td.setAttribute('label', tdLabels[ndx])
    );
  });
}

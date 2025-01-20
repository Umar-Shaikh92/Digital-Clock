function showTime() {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  let session = "AM";

  if (h == 0) {
    h == 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let time = h + " " + ":" + " " + m + " " + ":" + " " + s + " " + session;
  document.getElementById("clock").innerText = time;
  setInterval(() => {
    showTime();
  }, 1000);
}
showTime();

function getDayOfYear() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now - startOfYear;
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  return dayOfYear;
}
document.getElementById("showDay").innerText =
  getDayOfYear() + " " + "Day of Year !";

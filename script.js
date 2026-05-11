const startDate = new Date("2025-06-03T00:00:00");
const firstAnniversary = new Date("2026-06-03T00:00:00");
const millisecondsPerDay = 1000 * 60 * 60 * 24;

function wholeDaysBetween(from, to) {
  return Math.max(0, Math.floor((to - from) / millisecondsPerDay));
}

function updateLoveCounter() {
  const now = new Date();
  const daysTogether = wholeDaysBetween(startDate, now);
  const daysUntil = wholeDaysBetween(now, firstAnniversary);

  document.getElementById("daysTogether").textContent = daysTogether.toLocaleString();
  document.getElementById("daysUntil").textContent = daysUntil.toLocaleString();

  if (now >= firstAnniversary) {
    document.getElementById("daysUntilLabel").textContent = "days since our first anniversary";
    document.getElementById("daysUntil").textContent = wholeDaysBetween(firstAnniversary, now).toLocaleString();
  }
}

updateLoveCounter();

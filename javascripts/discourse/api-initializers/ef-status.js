import { apiInitializer } from "discourse/lib/api";
import { iconHTML } from "discourse/lib/icon-library";

const STATUS_URL = "https://status.emergencyforge.de";
const TEXT = {
  up: "Alle Systeme laufen",
  degraded: "Eingeschränkt",
  down: "Störung",
  maintenance: "Wartung",
};

// Einmal pro Seitenaufruf abfragen, die API speichert ohnehin 30 s zwischen.
// Antwortet sie nicht oder meldet unknown/stale, bleibt der Link "Statusseite" stehen.
let summary;

export default apiInitializer((api) => {
  api.onPageChange(async () => {
    const el = document.querySelector(".ef-status");
    if (!el || el.dataset.state) {
      return;
    }
    try {
      summary ??= fetch(`${STATUS_URL}/v1/summary.json`).then((r) => (r.ok ? r.json() : null));
      const overall = (await summary)?.overall;
      if (!TEXT[overall]) {
        return;
      }
      el.dataset.state = overall;
      el.innerHTML = `${iconHTML(overall === "up" ? "check" : "triangle-exclamation")} Status: ${TEXT[overall]}`;
    } catch {
      // Status ist Beiwerk, ein Fehler hier darf das Forum nicht stören.
    }
  });
});

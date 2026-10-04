# EmergencyForge Forum-Theme

Discourse-Theme für forum.emergencyforge.de im Stil von emergencyforge.de: neutraler Kopf mit Amboss, ein Akzent (#ff4d00), Geist, Haarlinien statt Kästen, einfarbige Kategorien und derselbe Footer wie auf der Website, inklusive Live-Status.

Das Theme ersetzt das bisherige Theme "emergencyforge style", das nur im Admin gepflegt wurde.

## Aufbau

- `about.json`: Name, Assets (Geist, Geist Mono, Amboss) und die Farbschemata "EmergencyForge Hell" und "EmergencyForge Dunkel"
- `common/common.scss`: das gesamte Styling. Wo möglich über Discourse-Variablen (`--d-button-primary-*`, `--d-border-radius` usw.), damit es Updates übersteht
- `common/footer.html`: Footer mit Produkten, Community, Rechtlichem und Statuslink
- `javascripts/discourse/api-initializers/ef-status.js`: holt `https://status.emergencyforge.de/v1/summary.json` und schreibt den Gesamtstatus in den Footer

## Einbauen

1. Repo auf GitHub legen, z. B. `EmergencyForge/forum-theme`.
2. Admin → Anpassen → Themes → Installieren → "Aus einem Git-Repository", URL eintragen.
3. Beim neuen Theme die Farbpaletten wählen: hell "EmergencyForge Hell", dunkel "EmergencyForge Dunkel".
4. Komponente "category icons" an das neue Theme hängen. Komponenten gelten pro Theme.
5. "EmergencyForge" als Standard-Theme setzen. Das alte "emergencyforge style" nur deaktivieren, nicht löschen, dann bleibt der Rückweg offen.

## Danach im Admin

- **Logo:** Die Einstellungen `logo`, `logo small` und `mobile logo` leeren. Discourse zeigt dann den Seitentitel "EmergencyForge Forum" als Text, das Theme setzt den Amboss davor. Auf schmalen Bildschirmen bleibt nur der Amboss. Wird `digest logo` nicht eigens gesetzt, fallen auch die Zusammenfassungs-Mails auf den Text zurück.
- **Icons:** Die Komponente "discourse lucide icons" entfernen. Dann zeigt Discourse wieder Font Awesome, dieselbe Icon-Familie wie die Website. Die Kategorie-Icons sind schon Font-Awesome-Namen (z. B. `bullhorn`), dort ist nichts zu tun.
- **Kategorie "Nicht kategorisiert":** `allow uncategorized topics` ausschalten, dann verschwindet die leere Kategorie aus der Übersicht.
- **Kategorienfarben:** Das Theme zeigt alle Kategorien einheitlich grau. Die gespeicherten Farben bleiben unverändert. Wer die Daten passend haben will, setzt alle auf `#71717a`, nötig ist das nicht.
- **Cookie-Hinweis:** Er gehörte zum alten Theme und fällt mit ihm weg. Laut Datenschutzerklärung setzt das Forum nur technisch notwendige Cookies, dafür braucht es keine Einwilligung.

## Status im Footer

Der Browser fragt dafür `status.emergencyforge.de` ab. Für die Datenschutzerklärung des Forums reicht ein Satz, z. B. unter "Server-Logdateien": "Für die Statusanzeige im Fußbereich ruft Ihr Browser status.emergencyforge.de auf, einen Dienst von uns."

Antwortet die Statusseite nicht, steht dort einfach "Statusseite" als Link.

## Rückweg

Altes Theme wieder als Standard setzen und die Logos wieder eintragen:

- `logo` und `mobile logo`: `/uploads/default/original/1X/81f88aad931e3fcafd846fecedf643928b560961.png`
- `logo small`: `/uploads/default/original/1X/9b316d96806f45b0fb20d08afbb97f24e0a79e7e.png`

## Nicht geprüft

Das CSS wurde in einer Vorschau gegen das laufende Forum getestet (Discourse 2026.9, hell und dunkel, Desktop und Handy). Dafür wurde es per Browser eingespielt, nicht über Discourse kompiliert. Ungetestet sind deshalb:

- ob Discourses SCSS-Compiler alles so durchlässt
- der Status-Initializer
- ob die Icons `check` und `triangle-exclamation` im Icon-Satz des Forums enthalten sind

Am besten zuerst auf einem Test-Theme ausprobieren, bevor es Standard wird.

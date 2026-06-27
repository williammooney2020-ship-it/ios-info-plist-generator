// iOS Info.plist Key Generator — browser-only, no API.
// Generates Info.plist XML snippets for common iOS keys.

const CATEGORIES = [
  {
    id: "usage",
    name: "Usage Descriptions",
    icon: "🔐",
    desc: "Required when your app accesses sensitive device capabilities. Missing = rejection.",
    keys: [
      { key: "NSCameraUsageDescription", label: "Camera", type: "string", placeholder: "Used to scan barcodes and capture photos.", required: false },
      { key: "NSMicrophoneUsageDescription", label: "Microphone", type: "string", placeholder: "Used to record audio messages.", required: false },
      { key: "NSPhotoLibraryUsageDescription", label: "Photo Library (Read)", type: "string", placeholder: "Used to let you choose photos for your profile.", required: false },
      { key: "NSPhotoLibraryAddUsageDescription", label: "Photo Library (Write/Add Only)", type: "string", placeholder: "Used to save generated images to your library.", required: false },
      { key: "NSLocationWhenInUseUsageDescription", label: "Location (When In Use)", type: "string", placeholder: "Used to show nearby results.", required: false },
      { key: "NSLocationAlwaysUsageDescription", label: "Location (Always — iOS 10)", type: "string", placeholder: "Used to track your route in the background.", required: false },
      { key: "NSLocationAlwaysAndWhenInUseUsageDescription", label: "Location (Always — iOS 11+)", type: "string", placeholder: "Used to track your route in the background.", required: false },
      { key: "NSContactsUsageDescription", label: "Contacts", type: "string", placeholder: "Used to find friends already using the app.", required: false },
      { key: "NSCalendarsUsageDescription", label: "Calendars (read/write — iOS 16 and earlier)", type: "string", placeholder: "Used to add reminders to your calendar.", required: false },
      { key: "NSCalendarsFullAccessUsageDescription", label: "Calendars Full Access (iOS 17+)", type: "string", placeholder: "Used to create and manage your calendar events.", required: false },
      { key: "NSCalendarsWriteOnlyAccessUsageDescription", label: "Calendars Write-Only (iOS 17+)", type: "string", placeholder: "Used to add events to your calendar.", required: false },
      { key: "NSRemindersUsageDescription", label: "Reminders (iOS 16 and earlier)", type: "string", placeholder: "Used to set task reminders.", required: false },
      { key: "NSRemindersFullAccessUsageDescription", label: "Reminders Full Access (iOS 17+)", type: "string", placeholder: "Used to create and manage your reminders.", required: false },
      { key: "NSHealthShareUsageDescription", label: "HealthKit (read)", type: "string", placeholder: "Used to read your step count.", required: false },
      { key: "NSHealthUpdateUsageDescription", label: "HealthKit (write)", type: "string", placeholder: "Used to save your workouts.", required: false },
      { key: "NSMotionUsageDescription", label: "Motion & Fitness", type: "string", placeholder: "Used to count your steps.", required: false },
      { key: "NFCReaderUsageDescription", label: "NFC", type: "string", placeholder: "Used to scan NFC tags.", required: false },
      { key: "NSFaceIDUsageDescription", label: "Face ID", type: "string", placeholder: "Used to unlock your account securely.", required: false },
      { key: "NSSpeechRecognitionUsageDescription", label: "Speech Recognition", type: "string", placeholder: "Used to convert your speech to text.", required: false },
      { key: "NSLocalNetworkUsageDescription", label: "Local Network", type: "string", placeholder: "Used to connect to devices on your local network.", required: false },
      { key: "NSBluetoothAlwaysUsageDescription", label: "Bluetooth", type: "string", placeholder: "Used to connect to Bluetooth accessories.", required: false },
      { key: "NSUserTrackingUsageDescription", label: "App Tracking Transparency (ATT)", type: "string", placeholder: "This identifier will be used to deliver personalized ads.", required: false },
      { key: "NSHomeKitUsageDescription", label: "HomeKit", type: "string", placeholder: "Used to control your smart home accessories.", required: false },
      { key: "NSAppleMusicUsageDescription", label: "Apple Music / Media Library", type: "string", placeholder: "Used to access your music library.", required: false },
    ],
  },
  {
    id: "ats",
    name: "App Transport Security",
    icon: "🔒",
    desc: "Configure HTTPS exceptions. By default iOS requires HTTPS for all connections.",
    keys: [
      {
        key: "NSAppTransportSecurity",
        label: "ATS Configuration",
        type: "ats",
        atsOptions: [
          { key: "NSAllowsArbitraryLoads", label: "Allow all HTTP (NSAllowsArbitraryLoads)", type: "bool" },
          { key: "NSAllowsLocalNetworking", label: "Allow local HTTP (NSAllowsLocalNetworking)", type: "bool" },
          { key: "NSAllowsArbitraryLoadsForMedia", label: "Allow HTTP for AV assets (NSAllowsArbitraryLoadsForMedia)", type: "bool" },
          { key: "NSAllowsArbitraryLoadsInWebContent", label: "Allow HTTP in WKWebView (NSAllowsArbitraryLoadsInWebContent)", type: "bool" },
        ],
      },
    ],
  },
  {
    id: "background",
    name: "Background Modes",
    icon: "⚙️",
    desc: "Enables your app to run in the background for specific tasks.",
    keys: [
      {
        key: "UIBackgroundModes",
        label: "UIBackgroundModes",
        type: "multiselect",
        options: [
          { value: "audio", label: "Audio, AirPlay, and Picture in Picture" },
          { value: "bluetooth-central", label: "Uses Bluetooth LE accessories" },
          { value: "bluetooth-peripheral", label: "Acts as a Bluetooth LE accessory" },
          { value: "external-accessory", label: "External accessory communication" },
          { value: "fetch", label: "Background App Refresh" },
          { value: "location", label: "Location updates" },
          { value: "newsstand-content", label: "Newsstand downloads" },
          { value: "processing", label: "Background processing (BGProcessingTask)" },
          { value: "remote-notification", label: "Remote notifications (silent push)" },
          { value: "voip", label: "Voice over IP" },
        ],
      },
    ],
  },
  {
    id: "urlschemes",
    name: "URL Schemes",
    icon: "🔗",
    desc: "Register custom URL schemes your app handles (e.g. myapp://).",
    keys: [
      { key: "__url_schemes__", label: "Custom URL Scheme", type: "urlscheme", placeholder: "myapp" },
    ],
  },
  {
    id: "queries",
    name: "LSApplicationQueriesSchemes",
    icon: "❓",
    desc: "Declare which URL schemes you query with canOpenURL(_:). Required in iOS 9+.",
    keys: [
      { key: "LSApplicationQueriesSchemes", label: "Queryable Schemes", type: "stringarray", placeholder: "twitter, instagram, fb, ..." },
    ],
  },
  {
    id: "appinfo",
    name: "App Identity & Appearance",
    icon: "📱",
    desc: "Core app metadata and UI configuration.",
    keys: [
      { key: "CFBundleDisplayName", label: "Display Name", type: "string", placeholder: "My App" },
      { key: "CFBundleShortVersionString", label: "Marketing Version (CFBundleShortVersionString)", type: "string", placeholder: "1.0.0" },
      { key: "CFBundleVersion", label: "Build Number (CFBundleVersion)", type: "string", placeholder: "1" },
      { key: "UILaunchScreen", label: "Launch Screen (dict, auto-generated by Xcode)", type: "info", info: "Add UILaunchScreen as an empty dict if not using a storyboard. Xcode 13+ generates this automatically via INFOPLIST_KEY_UILaunchScreen_Generation = YES." },
      { key: "UIUserInterfaceStyle", label: "Forced UI Style", type: "select", options: ["Light", "Dark"], placeholder: "" },
      { key: "UISupportedInterfaceOrientations", label: "iPhone Orientations", type: "multiselect", options: [
          { value: "UIInterfaceOrientationPortrait", label: "Portrait" },
          { value: "UIInterfaceOrientationPortraitUpsideDown", label: "Portrait Upside Down" },
          { value: "UIInterfaceOrientationLandscapeLeft", label: "Landscape Left" },
          { value: "UIInterfaceOrientationLandscapeRight", label: "Landscape Right" },
        ],
      },
      { key: "ITSAppUsesNonExemptEncryption", label: "Uses Non-Exempt Encryption", type: "bool", help: "Set to NO for most apps. Required for App Store compliance declaration." },
    ],
  },
  {
    id: "network",
    name: "Network & Bonjour",
    icon: "📡",
    desc: "Configure Bonjour services for local network discovery.",
    keys: [
      { key: "NSBonjourServices", label: "NSBonjourServices", type: "stringarray", placeholder: "_myservice._tcp, _myservice._udp" },
    ],
  },
];

const STORAGE_KEY = "infoplist_gen_v1";

let state = {
  selections: {},  // key -> value (string | bool | string[] | ats-object)
};

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) state = JSON.parse(raw);
  } catch (e) {}
}

function toggle(key, defaultVal) {
  if (state.selections[key] !== undefined) {
    delete state.selections[key];
  } else {
    state.selections[key] = defaultVal ?? "";
  }
  save();
  renderAll();
  generate();
}

function setStr(key, value) {
  state.selections[key] = value;
  save();
  generate();
}

function setBool(key, value) {
  state.selections[key] = value;
  save();
  generate();
}

function toggleArrayValue(key, value) {
  let arr = Array.isArray(state.selections[key]) ? state.selections[key] : [];
  const idx = arr.indexOf(value);
  if (idx >= 0) arr.splice(idx, 1);
  else arr.push(value);
  state.selections[key] = arr;
  save();
  generate();
}

function setATS(subKey, value) {
  if (!state.selections["NSAppTransportSecurity"]) state.selections["NSAppTransportSecurity"] = {};
  if (value) state.selections["NSAppTransportSecurity"][subKey] = true;
  else delete state.selections["NSAppTransportSecurity"][subKey];
  if (Object.keys(state.selections["NSAppTransportSecurity"]).length === 0) {
    delete state.selections["NSAppTransportSecurity"];
  }
  save();
  generate();
}

// URL schemes are stored as array under special key
function setURLScheme(value) {
  const schemes = value.split(",").map(s => s.trim()).filter(Boolean);
  if (schemes.length > 0) state.selections["__url_schemes__"] = schemes;
  else delete state.selections["__url_schemes__"];
  save();
  generate();
}

function setStringArray(key, value) {
  const arr = value.split(",").map(s => s.trim()).filter(Boolean);
  if (arr.length > 0) state.selections[key] = arr;
  else delete state.selections[key];
  save();
  generate();
}

function renderAll() {
  CATEGORIES.forEach(cat => renderCategory(cat));
}

function renderCategory(cat) {
  const el = document.getElementById(`cat_${cat.id}`);
  if (!el) return;

  el.innerHTML = cat.keys.map(k => renderKey(k)).join("");
}

function renderKey(k) {
  const selected = state.selections[k.key] !== undefined;

  if (k.type === "info") {
    return `
    <div class="key-row info-row">
      <div class="key-info">${k.info}</div>
    </div>`;
  }

  if (k.type === "ats") {
    const atsVal = state.selections["NSAppTransportSecurity"] || {};
    return `
    <div class="key-row">
      <div class="key-head">
        <span class="key-name">${k.key}</span>
      </div>
      <div class="ats-options">
        ${k.atsOptions.map(o => `
          <label class="check-row">
            <input type="checkbox" ${atsVal[o.key] ? "checked" : ""} onchange="setATS('${o.key}', this.checked)" />
            <span>${o.label}</span>
          </label>`).join("")}
      </div>
    </div>`;
  }

  if (k.type === "multiselect") {
    const arr = Array.isArray(state.selections[k.key]) ? state.selections[k.key] : [];
    return `
    <div class="key-row">
      <div class="key-head">
        <span class="key-name">${k.key}</span>
        <span class="key-label">${k.label}</span>
      </div>
      <div class="multi-options">
        ${k.options.map(o => `
          <label class="check-row">
            <input type="checkbox" ${arr.includes(o.value) ? "checked" : ""} onchange="toggleArrayValue('${k.key}','${o.value}')" />
            <span>${o.label}</span>
          </label>`).join("")}
      </div>
    </div>`;
  }

  if (k.type === "urlscheme") {
    const arr = Array.isArray(state.selections["__url_schemes__"]) ? state.selections["__url_schemes__"] : [];
    return `
    <div class="key-row">
      <div class="key-head">
        <span class="key-name">CFBundleURLTypes</span>
        <span class="key-label">Custom URL Scheme(s)</span>
      </div>
      <input type="text" placeholder="${k.placeholder}" value="${esc(arr.join(", "))}"
        oninput="setURLScheme(this.value)" />
      <p class="key-hint">Comma-separated if multiple schemes (e.g. myapp, myapp-dev)</p>
    </div>`;
  }

  if (k.type === "stringarray") {
    const arr = Array.isArray(state.selections[k.key]) ? state.selections[k.key] : [];
    return `
    <div class="key-row">
      <div class="key-head">
        <span class="key-name">${k.key}</span>
        <span class="key-label">${k.label}</span>
      </div>
      <input type="text" placeholder="${k.placeholder || ""}" value="${esc(arr.join(", "))}"
        oninput="setStringArray('${k.key}', this.value)" />
      <p class="key-hint">Comma-separated list of values</p>
    </div>`;
  }

  if (k.type === "select") {
    const val = state.selections[k.key];
    return `
    <div class="key-row">
      <label class="check-row toggle-head">
        <input type="checkbox" ${selected ? "checked" : ""} onchange="toggle('${k.key}', '${k.options[0]}')" />
        <span class="key-name">${k.key}</span>
        <span class="key-label">${k.label}</span>
      </label>
      ${selected ? `<select onchange="setStr('${k.key}',this.value)">
        ${k.options.map(o => `<option value="${o}" ${val === o ? "selected" : ""}>${o}</option>`).join("")}
      </select>` : ""}
    </div>`;
  }

  if (k.type === "bool") {
    const val = state.selections[k.key];
    return `
    <div class="key-row">
      <label class="check-row toggle-head">
        <input type="checkbox" ${selected ? "checked" : ""} onchange="toggle('${k.key}', true)" />
        <span class="key-name">${k.key}</span>
        <span class="key-label">${k.label}</span>
      </label>
      ${selected ? `<div class="bool-toggle">
        <label class="check-row"><input type="radio" name="${k.key}" value="true" ${val === true ? "checked" : ""} onchange="setBool('${k.key}', true)" /> <span>YES</span></label>
        <label class="check-row"><input type="radio" name="${k.key}" value="false" ${val !== true ? "checked" : ""} onchange="setBool('${k.key}', false)" /> <span>NO</span></label>
      </div>` : ""}
      ${k.help ? `<p class="key-hint">${k.help}</p>` : ""}
    </div>`;
  }

  // Default: string
  const val = String(state.selections[k.key] ?? "");
  return `
  <div class="key-row">
    <label class="check-row toggle-head">
      <input type="checkbox" ${selected ? "checked" : ""} onchange="toggle('${k.key}', '')" />
      <span class="key-name">${k.key}</span>
      <span class="key-label">${k.label}</span>
    </label>
    ${selected ? `<input type="text" placeholder="${esc(k.placeholder || "")}" value="${esc(val)}"
      oninput="setStr('${k.key}', this.value)" />` : ""}
  </div>`;
}

// ── Generate plist XML ────────────────────────────────────────────────────────

function generate() {
  const lines = [];
  lines.push(`<?xml version="1.0" encoding="UTF-8"?>`);
  lines.push(`<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">`);
  lines.push(`<plist version="1.0">`);
  lines.push(`<dict>`);

  const sel = state.selections;
  let count = 0;

  for (const cat of CATEGORIES) {
    for (const k of cat.keys) {
      if (k.type === "info") continue;

      // ATS
      if (k.type === "ats") {
        const ats = sel["NSAppTransportSecurity"];
        if (ats && Object.keys(ats).length > 0) {
          lines.push(`\t<key>NSAppTransportSecurity</key>`);
          lines.push(`\t<dict>`);
          for (const [sk, sv] of Object.entries(ats)) {
            lines.push(`\t\t<key>${sk}</key>`);
            lines.push(`\t\t<${sv ? "true" : "false"}/>`);
          }
          lines.push(`\t</dict>`);
          count++;
        }
        continue;
      }

      // URL schemes
      if (k.type === "urlscheme") {
        const schemes = sel["__url_schemes__"];
        if (Array.isArray(schemes) && schemes.length > 0) {
          lines.push(`\t<key>CFBundleURLTypes</key>`);
          lines.push(`\t<array>`);
          lines.push(`\t\t<dict>`);
          lines.push(`\t\t\t<key>CFBundleURLSchemes</key>`);
          lines.push(`\t\t\t<array>`);
          schemes.forEach(s => lines.push(`\t\t\t\t<string>${escXml(s)}</string>`));
          lines.push(`\t\t\t</array>`);
          lines.push(`\t\t</dict>`);
          lines.push(`\t</array>`);
          count++;
        }
        continue;
      }

      const val = sel[k.key];
      if (val === undefined) continue;

      lines.push(`\t<key>${k.key}</key>`);

      if (k.type === "bool" || typeof val === "boolean") {
        lines.push(`\t<${val ? "true" : "false"}/>`);
      } else if (k.type === "multiselect" || k.type === "stringarray") {
        if (Array.isArray(val) && val.length > 0) {
          lines.push(`\t<array>`);
          val.forEach(v => lines.push(`\t\t<string>${escXml(v)}</string>`));
          lines.push(`\t</array>`);
        } else {
          lines.pop(); // remove the key line
          continue;
        }
      } else {
        lines.push(`\t<string>${escXml(String(val))}</string>`);
      }
      count++;
    }
  }

  lines.push(`</dict>`);
  lines.push(`</plist>`);

  const output = lines.join("\n");
  document.getElementById("plistOutput").textContent = output;
  document.getElementById("keyCount").textContent = count + " key" + (count !== 1 ? "s" : "");
}

function escXml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function copyPlist() {
  const text = document.getElementById("plistOutput").textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById("copyBtn");
    btn.textContent = "Copied!";
    setTimeout(() => { btn.textContent = "Copy XML"; }, 1500);
  });
}

function downloadPlist() {
  const text = document.getElementById("plistOutput").textContent;
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([text], { type: "application/xml" }));
  a.download = "Info.plist";
  a.click();
}

function clearAll() {
  if (!confirm("Clear all selections?")) return;
  state.selections = {};
  save();
  renderAll();
  generate();
}

function esc(s) {
  return String(s || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

document.addEventListener("DOMContentLoaded", () => {
  load();
  renderAll();
  generate();
});

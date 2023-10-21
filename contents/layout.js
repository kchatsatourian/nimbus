var panel = new Panel
var panelScreen = panel.screen

// No need to set panel.location as ShellCorona::addPanel will automatically pick one available edge

// For an Icons-Only Task Manager on the bottom, *3 is too much, *2 is too little
// Round down to next highest even number since the Panel size widget only displays
// even numbers
panel.height = 2 * Math.floor(gridUnit * 2.5 / 2)

// Restrict horizontal panel to a maximum size of a 21:9 monitor
const maximumAspectRatio = 21/9;
if (panel.formFactor === "horizontal") {
    const geo = screenGeometry(panelScreen);
    const maximumWidth = Math.ceil(geo.height * maximumAspectRatio);

    if (geo.width > maximumWidth) {
        panel.alignment = "center";
        panel.minimumLength = maximumWidth;
        panel.maximumLength = maximumWidth;
    }
}

panel.addWidget("org.kde.plasma.simplemenu")

//panel.addWidget("org.kde.plasma.showActivityManager")
panel.addWidget("org.kde.plasma.pager")

var tasks = panel.addWidget("org.kde.plasma.icontasks")
var launchers = [
    "applications:org.kde.dolphin.desktop",
    "applications:microsoft-edge.desktop",
    "applications:google-chrome.desktop",
    "applications:firefox.desktop",
    "applications:sublime-text.desktop",
    "applications:code.desktop",
    "applications:postman.desktop",
    "applications:idea.desktop",
    "applications:vlc.desktop",
    "applications:spotify.desktop",
    "applications:steam.desktop",
    "applications:org.telegram.desktop",
    "applications:discord.desktop",
    "applications:org.keepassxc.KeePassXC.desktop",
    "applications:org.qbittorrent.qBittorrent.desktop"
]

tasks.currentConfigGroup = ["General"]
tasks.writeConfig("launchers", launchers)
// panel.addWidget("org.kde.plasma.panelspacer")

panel.addWidget("org.kde.plasma.marginsseparator")

/* Next up is determining whether to add the Input Method Panel
 * widget to the panel or not. This is done based on whether
 * the system locale's language id is a member of the following
 * white list of languages which are known to pull in one of
 * our supported IME backends when chosen during installation
 * of common distributions. */

var langIds = ["as",    // Assamese
    "bn",    // Bengali
    "bo",    // Tibetan
    "brx",   // Bodo
    "doi",   // Dogri
    "gu",    // Gujarati
    "hi",    // Hindi
    "ja",    // Japanese
    "kn",    // Kannada
    "ko",    // Korean
    "kok",   // Konkani
    "ks",    // Kashmiri
    "lep",   // Lepcha
    "mai",   // Maithili
    "ml",    // Malayalam
    "mni",   // Manipuri
    "mr",    // Marathi
    "ne",    // Nepali
    "or",    // Odia
    "pa",    // Punjabi
    "sa",    // Sanskrit
    "sat",   // Santali
    "sd",    // Sindhi
    "si",    // Sinhala
    "ta",    // Tamil
    "te",    // Telugu
    "th",    // Thai
    "ur",    // Urdu
    "vi",    // Vietnamese
    "zh_CN", // Simplified Chinese
    "zh_TW"] // Traditional Chinese

if (langIds.indexOf(languageId) != -1) {
    panel.addWidget("org.kde.plasma.kimpanel");
}

panel.addWidget("org.kde.plasma.systemtray")
// panel.addWidget("org.kde.plasma.colorpicker")

var clock = panel.addWidget("org.kde.plasma.digitalclock")
clock.currentConfigGroup = ["Appearance"];
clock.writeConfig("showSeconds", true);
clock.writeConfig("showDate", true);
clock.writeConfig("dateFormat", "custom");
clock.writeConfig("customDateFormat", "d/M/yyyy");
// timeFormat (string, default default)
clock.writeConfig("showWeekNumbers", true);
clock.writeConfig("use24hFormat", 2);
clock.writeConfig("firstDayOfWeek", 1);
clock.writeConfig("enabledCalendarPlugins", ["/usr/lib/qt/plugins/plasmacalendarplugins/astronomicalevents.so", "/usr/lib/qt/plugins/plasmacalendarplugins/holidaysevents.so"]);

panel.addWidget("org.kde.plasma.showdesktop")

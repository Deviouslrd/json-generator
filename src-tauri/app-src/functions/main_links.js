function gitLink () {
    require("electron").shell.openExternal("https://github.com/Deviouslrd/json-generator");
}

function discLink () {
    require("electron").shell.openExternal("https://discord.gg/neXPNSY");
}

function helpLink () {
    const { BrowserWindow } = require('electron').remote;

    const win = new BrowserWindow({
        show: false,
        width: 850, 
        height: 600,
        title: "Generator Help",
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('pages/help.html');
    win.once('ready-to-show', () => {
        win.show();
    });
}

function changeVersion () {
    const version = require("../../../package.json");
    console.log(version);
    document.getElementById("header1").innerHTML = `Minecraft JSON Generator Tool vA`;
}
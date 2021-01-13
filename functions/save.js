const { dialog } = require('electron').remote;

document.getElementById("savebutton").addEventListener('click', async () => {
    localStorage.path = (await dialog.showOpenDialog({ properties: ['openDirectory']})).filePaths[0];
    document.getElementById("saveLocation").value = await localStorage.path;
});

function onLoad() {
    if (localStorage.blockName) {
        document.getElementById("blockName").value = localStorage.blockName;
    }
    if (localStorage.modName) {
        document.getElementById("modName").value = localStorage.modName;
    }
    if (localStorage.path) {
        document.getElementById("saveLocation").value = localStorage.path;
    }
}

document.getElementById("generateBtn").addEventListener('click', () => {
    localStorage.blockName = document.getElementById("blockName").value;
    localStorage.modName = document.getElementById("modName").value;
    localStorage.path = document.getElementById("saveLocation").value; 
});
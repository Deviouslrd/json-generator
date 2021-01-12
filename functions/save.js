const { dialog } = require('electron').remote;

const defLocation = 'No Location';

document.getElementById("savebutton").addEventListener('click', async () => {
    localStorage.path = (await dialog.showOpenDialog({ properties: ['openDirectory']})).filePaths[0];

    document.getElementById("saveLocation").value = await localStorage.path;
});

function onLoad() {
    document.getElementById("saveLocation").value = localStorage.path;
    document.getElementById("modName").value = localStorage.modName;
    document.getElementById("blockName").value = localStorage.blockName;
}